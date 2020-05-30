import React, { memo, useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.scss'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import api from '../../utils/api'
import TaskInfo from './components/TaskInfo'
import BasicInfo from './components/BasicInfo'
import TestEnv from './components/TestEnv'
import DataStatistics from './components/DataStatistics'
import TestDetail from './components/TestDetail'
import createPageHead from './createPageHead'
import createPageFoot from './createPageFoot'
import createCover from './createCover'


const phh = 42 //页眉页脚高

const a4w = 595 //a4纸张宽
const a4h = 842
const sliceH = a4h - phh * 2  //切片高


const Pdf = memo(({ task_id, cb }) => {
    const pdfEle = useRef(null)
    const [report, setReport] = useState({})
    const getPdf = () => {
        Promise.all([createCover(), createPageHead()]).then(res => {
            html2Canvas(pdfEle.current).then(canvas => {
                let contentHeight = canvas.height
                let pages = []
                let offsetY = 0

                do { //按a4纸尺寸进行切片
                    console.log(contentHeight)
                    let tempCanvas = document.createElement('canvas')
                    tempCanvas.width = a4w
                    tempCanvas.height = sliceH
                    let tempCtx = tempCanvas.getContext('2d')
                    tempCtx.drawImage(canvas, 0, offsetY, a4w, sliceH, 0, 0, a4w, sliceH)
                    pages.push(tempCanvas.toDataURL('image/png', 1.0))
                    offsetY += sliceH
                    contentHeight -= sliceH
                    tempCanvas = null

                } while (contentHeight > 0)//修正小数

                let pdf = new JsPDF('', 'pt', 'a4')
                let currentPage = null
                //总页数
                let tLen = pages.length
                //剩余页数
                let lLen = tLen
                if (tLen) {//添加封面
                    pdf.addImage(res[0], 'PNG', 0, 0, a4w, a4h)
                    pdf.addPage()
                }
                while (lLen) {
                    currentPage = pages.shift()
                    lLen = pages.length
                    //添加页眉
                    pdf.addImage(res[1], 'PNG', 0, 0, a4w, phh)

                    pdf.addImage(currentPage, 'PNG', 0, phh, a4w, sliceH)
                    //添加页脚
                    pdf.addImage(createPageFoot(`${tLen - lLen} / ${tLen}`), 'PNG', 0, phh + sliceH, a4w, phh)

                    if (lLen) {
                        pdf.addPage()
                    }
                }
                pdf.save('报告.pdf')
                cb()
            })
        })
    }

    useEffect(() => {
        api.get('/api/v1/report', {
            task_id
        }).then(res => {
            let data = res.data
            setReport(data)
            getPdf()
        })
        //eslint-disable-next-line
    }, [task_id])

    return (
        <div className={styles.mainContainer} ref={pdfEle}>
            <TaskInfo report={report} />
            <BasicInfo report={report} />
            <TestEnv report={report} />
            <DataStatistics report={report} />
            <TestDetail report={report} />
        </div>


    )
})

Pdf.defaultProps = {
    cb: () => { }
}

const downLoadPdf = (task_id) => {
    let div = document.createElement('div')
    document.body.appendChild(div)

    const cb = () => {
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
    }
    ReactDOM.render(<Pdf task_id={task_id} cb={cb} />, div)
}
export {
    downLoadPdf,
    sliceH,
    a4w,
    a4h,
    phh
}
export default Pdf
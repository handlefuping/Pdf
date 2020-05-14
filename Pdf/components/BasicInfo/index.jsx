import React, { memo, useRef, useEffect } from 'react'
import Title from '../Title'
import styles from './index.module.scss'

const colors = ['#93CCFF', '#007BBB', '#1B4A91']
const texts = ['无风险设备：', '存在风险设备：', '检测失败设备：']

const R = 47
const Lw = 18

const BasicInfo = memo(({ report }) => {
    const cavs = useRef(null)
    const data = [report.no_risk_device_num, report.risky_device_num, report.check_failed_device_num]

    useEffect(() => {
        let ctx = cavs.current.getContext('2d')
        ctx.clearRect(0, 0, 521, 94)
        ctx.lineWidth = Lw
        let total = data.reduce((a, b) => a + b)
        let lastEndAngle = 0
        const drawArc = (v, i) => {

            ctx.save()
            ctx.beginPath()
            ctx.strokeStyle = colors[i]

            let currentEndAngle = (v / total) * 2 * Math.PI + lastEndAngle
            ctx.arc(0, 0, R - Lw / 2, lastEndAngle, currentEndAngle)
            lastEndAngle = currentEndAngle
            ctx.stroke()
            ctx.restore()
        }
        ctx.save()
        ctx.translate(R, R)
        ctx.rotate(-Math.PI * 2 / 4)
        data.forEach((v, i) => {
            drawArc(v, i)
        })
        ctx.restore()
        const drawText = () => {
            ctx.save()
            ctx.font = "12px SourceHanSansCN-Regular"
            ctx.fillText('总数', R - ctx.measureText('总数').width / 2, 41)
            ctx.restore()

            ctx.save()
            ctx.font = "20px DINCondensed-Bold"
            ctx.fillStyle = '#0084F7'
            ctx.fillText(total, R - ctx.measureText(total).width / 2, 65)
            ctx.restore()
        }
        drawText()
        let offsetX = 268
        let offsetY = 20
        const drawList = (v, i) => {
            ctx.save()
            ctx.fillStyle = colors[i]
            ctx.fillRect(offsetX, offsetY, 8, 8)
            ctx.fillStyle = '#333333'
            ctx.font = "12px SourceHanSansCN-Regular"
            ctx.textBaseline = 'top'
            ctx.fillText(`${texts[i]}：${v}`, offsetX + 16, offsetY)
            ctx.restore()
            offsetY += 20
        }
        data.forEach((v, i) => {
            drawList(v, i)
        })
    }, [data])
    return (
        <>
            <Title title='基础信息' subTitle='Essential information'/>
            <div className={styles.container}>
                <canvas height='94' width='521' ref={cavs} />
            </div>
        </>
    )
})

export default BasicInfo
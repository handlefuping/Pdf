import logo from './logo.png'
import {a4w, phh} from './index'
const createPageHead = () => {
    let canvas = document.createElement('canvas')
    canvas.height = phh
    canvas.width = a4w
    let ctx = canvas.getContext('2d')

    //画线
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = '#DBDBDB'
    ctx.lineWidth = 1
    ctx.moveTo(16, phh)
    ctx.lineTo(a4w - 16, phh)
    ctx.stroke()
    ctx.restore()

    //写字
    ctx.save()
    ctx.beginPath()
    ctx.font = '10px SourceHanSansCN-Regular'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'right'
    ctx.fillStyle = '#666666'
    ctx.fillText("数据安全测试报告", a4w - 24, (phh - 10) / 2)
    ctx.restore()

    let img = new Image()
    img.src = logo
    
    return new Promise((r, j) => {
        img.onload = () => {
            ctx.drawImage(img, 24, 9)
            r(canvas.toDataURL('image/png', 1.0))
        }
    })
}


export default createPageHead
import {a4w, phh} from './index'
const createPageFoot = (pN) => {
    let canvas = document.createElement('canvas')
    canvas.height = phh
    canvas.width = a4w
    let ctx = canvas.getContext('2d')

    //画线
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = '#DBDBDB'
    ctx.lineWidth = 1
    ctx.moveTo(16, 0)
    ctx.lineTo(a4w - 16, 0)
    ctx.stroke()
    ctx.restore()

    //写字
    ctx.save()
    ctx.beginPath()
    ctx.font = '10px SourceHanSansCN-Regular'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#666666'
    ctx.fillText("数据安全测试系统", 24, (phh - 10) / 2)
    ctx.restore()

    //写页码
    ctx.save()
    ctx.beginPath()
    ctx.font = '10px SourceHanSansCN-Regular'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'right'
    ctx.fillStyle = '#666666'
    ctx.fillText(pN, 595 - 24, (phh - 10) / 2)
    ctx.restore()


    return canvas.toDataURL('image/png', 1.0)
}


export default createPageFoot
import cover from './cover.png'
import {a4w,a4h} from './index'
const createCover = () => {
    let img = new Image()
    img.width = a4w
    img.height = a4h
    img.src = cover
    return new Promise((r, j) => {
        img.onload = () => {
            r(img)
        }
    })

}


export default createCover
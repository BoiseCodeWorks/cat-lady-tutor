import CatService from "./CatService.js";


let _cs = new CatService()

function drawCat() {
    console.log("draw happenz")
    document.querySelector("#cat").innerHTML = _cs.CatTemplate
}

export default class CatController {
    constructor() {
        console.log("cat controller")
        drawCat()
    }

    petCat() {
        _cs.petCat()
        drawCat()
    }
}
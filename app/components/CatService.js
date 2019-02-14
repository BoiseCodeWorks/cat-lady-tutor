import Cat from "../models/Cat.js";


let _cat = new Cat("Jeremy", "Hairless", "skin tone", 16)

export default class CatService {
    constructor() {
        console.log("cat service")
    }

    get Cat() {
        return new Cat(_cat.name, _cat.breed, _cat.color, _cat.age)
    }

    get CatTemplate() {
        return _cat.Template
    }

    petCat() {
        _cat.age++
        console.log(_cat.age)
    }
}
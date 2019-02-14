export default class Cat {
    constructor(name, breed, color, age) {
        this.name = name
        this.breed = breed
        this.color = color
        this.age = age
    }

    get Template() {
        return /*html */`
        <h3>${this.name}</h3>
        <h3>${this.breed}</h3>
        <h3>${this.color}</h3>
        <h3>${this.age}</h3>
        <button class="btn btn-success" onclick="app.controllers.catController.petCat()">Pet</button>
        `
    }
}
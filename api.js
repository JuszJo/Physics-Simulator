import components from "./components/components.js";

export default class UI {
    constructor(game) {
        this.game = game

        this.applyGravityButton = document.getElementById("apply-gravity")
        this.removeGravityButton = document.getElementById("remove-gravity")

        this.applyGravityButton.addEventListener('click', () => {
            game.addToAll(components.Gravity)  
        })
        
        this.removeGravityButton.addEventListener('click', () => {
            game.removeFromAll("gravity")
        })
    }
}
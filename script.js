import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";
import { Gravity } from "./components/components.js";

const applyGravityButton = document.getElementById("apply-gravity")
const removeGravityButton = document.getElementById("remove-gravity")

// init game system
const game = new GameSystem()

applyGravityButton.addEventListener('click', () => {
    game.addToAll(Gravity)  
})

removeGravityButton.addEventListener('click', () => {
    game.removeFromAll("gravity")
})

// use default entity
const entity = Entity.createDefault()

entity.printInfo()

game.entities[entity.id] = entity

game.startLoop()
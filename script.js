import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";

// init game system
const game = new GameSystem()

// use default entity
const entity = Entity.createDefault()

entity.printInfo()

game.entities[entity.id] = entity

game.startLoop()
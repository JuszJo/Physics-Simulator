import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";
import UI from "./api.js";
import { Movement, Bounce } from "./components/components.js";

// init game system
const game = new GameSystem()

// init UI
new UI(game)

// use default entity
const entity = Entity.createDefault()

entity.addComponent(new Movement("controlled"))

entity.addComponent(new Bounce())

// entity.printInfo()

game.entities[entity.id] = entity

entity.generateRandomEntities(game)

game.startLoop()
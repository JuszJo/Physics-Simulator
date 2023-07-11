import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";
import UI from "./api.js";
import { Movement, Bounce, Jump } from "./components/components.js";

// init game system
const game = new GameSystem()

// init UI
new UI(game)

// use default entity
const entity = Entity.createDefault(game)

entity.addComponent(new Movement("controlled"))

// entity.addComponent(new Bounce())

entity.addComponent(new Jump())

// entity.printInfo()

// entity.generateRandomEntities(game)

game.startLoop()
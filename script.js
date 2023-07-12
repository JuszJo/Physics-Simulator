import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";
import UI from "./api.js";
import components from "./components/components.js";

// init game system
const game = new GameSystem()

// init UI
new UI(game)

// use default entity
const entity = Entity.createDefault(game)

entity.addComponent(new components.Movement("controlled"))

// entity.addComponent(new Bounce())

entity.addComponent(new components.Jump())

// entity.printInfo()

// entity.generateRandomEntities(game)

game.startLoop()
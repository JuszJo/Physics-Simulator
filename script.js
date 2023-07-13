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

Entity.createBackgroundImageEntity(game, "./assets/background.jpg")

const camera = new Entity()

camera.addComponent(new components.Dimension({width: 300, height: entity.components.dimension.height}))

camera.addComponent(new components.Position({
    x: (entity.components.position.x + entity.components.dimension.width / 2) - camera.components.dimension.width / 2,
    y: entity.components.position.y
}))

camera.addComponent(new components.Movement())

camera.addComponent(new components.Collision())

camera.addComponent(new components.Velocity({x: 0, y: 0}))

camera.addComponent(new components.Jump())

camera.addComponent(new components.Render("camera"))

camera.addComponent(new components.Camera())

camera.addComponent(new components.Gravity())

game.entities[camera.id] = camera

// entity.printInfo()

// Entity.generateRandomEntities(game)

game.startLoop()
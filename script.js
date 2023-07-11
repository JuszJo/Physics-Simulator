import GameSystem from "./systems/GameSystem.js";
import Entity from "./Entity.js";
import UI from "./api.js";
import { Movement, Position, Dimension, Render, Inventory, Collision, Velocity, Gun, Bounce } from "./components/components.js";

// init game system
const game = new GameSystem()

// init UI
new UI(game)

// use default entity
const entity = Entity.createDefault()

entity.addComponent(new Movement("controlled"))

entity.addComponent(new Bounce())

function generateRandomEntities() {
    const arrayOfEntities = []

    for(let i = 0; i < 10; ++i) {
        const entity = new Entity()
    
        const randomPosition = {
            x: Math.floor(Math.random() * 700),
            y: Math.floor(Math.random() * 500),
        }
    
        const randomDimension = {
            width: Math.min(Math.max(Math.floor(Math.random() * 100), 20), 100),
            height: Math.min(Math.max(Math.floor(Math.random() * 100), 20), 100),
        }
    
        entity.addComponent(new Position({
            x: randomPosition.x,
            y: randomPosition.y,
        }))
        
        entity.addComponent(new Velocity({
            x: 0,
            y: 0
        }))
    
        entity.addComponent(new Dimension({
            width: randomDimension.width,
            height: randomDimension.height,
        }))
    
        entity.addComponent(new Render("quad"))
    
        entity.addComponent(new Inventory())
    
        entity.addComponent(new Collision())
    
        entity.components.inventory.addItem(new Gun())

        game.entities[entity.id] = entity

        arrayOfEntities.push(entity)
    }

    return arrayOfEntities
}

entity.printInfo()

game.entities[entity.id] = entity

// generateRandomEntities()

game.startLoop()
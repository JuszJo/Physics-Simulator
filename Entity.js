import { Dimension, Position, Render, Inventory, Gun, Collision, Gravity, Velocity } from "./components/components.js"

export default class Entity {
    constructor(name) {
        this.id = (+new Date()).toString(16) + (Math.random() * 1000000 | 0).toString(16)
        this.name = name
        this.components = {}
    }

    addComponent(component) {
        this.components[component.name] = component
    }

    removeComponent(componentName) {
        let name = componentName

        if(typeof componentName == "function") {
            name = componentName.name || componentName.prototype.name
        }

        delete this.components[name]
    }

    printInfo() {
        console.log(JSON.stringify(this, null, 4));
    }

    static createDefault(game) {
        const entity = new Entity()

        entity.addComponent(new Position({
            x: 50,
            y: 50,
        }))
        
        entity.addComponent(new Velocity({
            x: 0,
            y: 0
        }))

        entity.addComponent(new Dimension({
            width: 20,
            height: 20,
        }))

        entity.addComponent(new Render("quad"))

        entity.addComponent(new Inventory())

        entity.addComponent(new Collision())

        entity.addComponent(new Gravity())

        entity.components.inventory.addItem(new Gun())

        game.entities[entity.id] = entity

        return entity
    }

    static generateRandomEntities(game) {
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

}
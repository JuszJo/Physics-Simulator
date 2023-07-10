import { Dimension, Movement, Position, Render, Inventory, Gun, Collision } from "./components/components.js"

export default class Entity {
    constructor(name) {
        this.id = (+new Date()).toString(16) + (Math.random() * 1000000 | 0).toString(16)
        this.name = name
        this.components = {}
    }

    static createDefault() {
        const entity = new Entity()

        entity.addComponent(new Position({
            x: 50,
            y: 50,
        }))

        entity.addComponent(new Dimension({
            width: 100,
            height: 100,
        }))

        entity.addComponent(new Movement("controlled"))

        entity.addComponent(new Render("quad"))

        entity.addComponent(new Inventory())

        entity.addComponent(new Collision())

        entity.components.inventory.addItem(new Gun())

        return entity
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
}
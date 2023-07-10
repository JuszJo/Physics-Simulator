import CollisionSystem from "./CollisionSystem.js"
import GravitySystem from "./GravitySystem.js"
import InputSystem from "./InputSystem.js"
import MovementSystem from "./MovementSystem.js"
import RenderSystem from "./RenderSystem.js"

export default class GameSystem {
    constructor() {
        this.entities = {}

        this.systems = {}

        this.systems.renderSystem = new RenderSystem(this.entities)

        this.systems.movementSystem = new MovementSystem(this.entities)

        this.systems.inputSystem = new InputSystem(this.systems.movementSystem)

        this.systems.collisionSystem = new CollisionSystem(this.entities)

        this.systems.gravitySystem = new GravitySystem(this.entities)

        this.systems.inputSystem.listen()
    }

    addToAll(component) {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            currentEntity.addComponent(new component())
        }
    }
    
    removeFromAll(componentName) {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]
    
            currentEntity.removeComponent(componentName)
        }
    }

    update() {
        // all systems go here
        this.systems.gravitySystem.applyGravity()

        this.systems.movementSystem.movePlayer()

        this.systems.collisionSystem.checkWallCollision()

        this.systems.renderSystem.render()

        requestAnimationFrame(this.update.bind(this))
    }

    startLoop() {
        requestAnimationFrame(this.update.bind(this))
    }
}
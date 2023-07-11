import MovementSystem from "./MovementSystem.js"

export default class VelocitySystem {
    constructor(entities) {
        this.entities = entities
    }

    applyVelocity() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.velocity) {
                MovementSystem.addPositionY(currentEntity, currentEntity.components.velocity.y)
            }
        }
    }

    static setVelocityX(currentEntity, newVelocity) {
        currentEntity.components.velocity.x = newVelocity
    }

    static setVelocityY(currentEntity, newVelocity) {
        currentEntity.components.velocity.y = newVelocity
    }

    static subVelocityX(currentEntity, amount) {
        currentEntity.components.velocity.x -= amount
    }
    
    static subVelocityY(currentEntity, amount) {
        currentEntity.components.velocity.y -= amount
    }

    static addVelocityX(currentEntity, amount) {
        currentEntity.components.velocity.x += amount
    }
    
    static addVelocityY(currentEntity, amount) {
        currentEntity.components.velocity.y += amount
    }

    static multVelocityX(currentEntity, amount) {
        currentEntity.components.velocity.x *= amount
    }

    static multVelocityY(currentEntity, amount) {
        currentEntity.components.velocity.y *= amount
    }

    static divVelocityX(currentEntity, amount) {
        currentEntity.components.velocity.x /= amount
    }

    static divVelocityY(currentEntity, amount) {
        currentEntity.components.velocity.y /= amount
    }
}
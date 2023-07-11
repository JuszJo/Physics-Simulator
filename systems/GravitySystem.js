import MovementSystem from "./MovementSystem.js"
import VelocitySystem from "./VelocitySystem.js"

export default class GravitySystem {
    constructor(entities) {
        this.entities = entities
    }

    applyGravity() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.gravity) {
                const gravityValue = currentEntity.components.gravity.value

                VelocitySystem.addVelocityY(currentEntity, gravityValue)

                MovementSystem.addPositionY(currentEntity, currentEntity.components.velocity.y)
            }
        }
    }
}
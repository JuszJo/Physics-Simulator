import VelocitySystem from "./VelocitySystem.js"
import MovementSystem from "./MovementSystem.js"

export default class BounceSystem {
    constructor(entities) {
        this.entities = entities
    }

    applyBounce() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.bounce && currentEntity.components.position.state == "ground") {
                if(currentEntity.components.velocity.y < 1) {
                    // if finished bounce
                    VelocitySystem.setVelocityY(currentEntity, 0)
                }
                else {
                    VelocitySystem.multVelocityY(currentEntity, currentEntity.components.bounce.value)
                    
                    VelocitySystem.multVelocityY(currentEntity, -1)
    
                    MovementSystem.changeState(currentEntity, "air")
                }
            }
        }
    }
}
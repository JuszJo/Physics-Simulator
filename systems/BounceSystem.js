import VelocitySystem from "./VelocitySystem.js"

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
                    VelocitySystem.divVelocityY(currentEntity, 1.1)
                    
                    VelocitySystem.multVelocityY(currentEntity, -1)
    
                    currentEntity.components.position.state = "air"
                }
            }
        }
    }
}
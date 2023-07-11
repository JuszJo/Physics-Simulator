import VelocitySystem from "./VelocitySystem.js"

export default class BounceSystem {
    constructor(entities) {
        this.entities = entities
    }

    applyBounce() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.bounce) {
                VelocitySystem.subVelocityY(currentEntity, currentEntity.components.bounce.value)

                currentEntity.removeComponent("bounce")
            }
        }
    }
}
export default class MovementSystem {
    constructor(entities) {
        this.entities = entities
    }

    handleKeydownEvent(key) {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.movement) {
                if(key == "w") {
                    currentEntity.components.movement.controls.up = true
                }
                if(key == "s") {
                    currentEntity.components.movement.controls.down = true
                }
                if(key == "a") {
                    currentEntity.components.movement.controls.left = true
                }
                if(key == "d") {
                    currentEntity.components.movement.controls.right = true
                }
            }
        }        
    }
    
    handleKeyupEvent(key) {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.movement) {
                if(key == "w") {
                    currentEntity.components.movement.controls.up = false
                }
                if(key == "s") {
                    currentEntity.components.movement.controls.down = false
                }
                if(key == "a") {
                    currentEntity.components.movement.controls.left = false
                }
                if(key == "d") {
                    currentEntity.components.movement.controls.right = false
                }
            }
        }        
    }

    movePlayer() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.movement) {
                if(currentEntity.components.movement.controls.up) {
                    currentEntity.components.position.y -= 5
                    
                    currentEntity.components.position.state = "air"
                }
                if(currentEntity.components.movement.controls.down) {
                    currentEntity.components.position.y += 5
                }
                if(currentEntity.components.movement.controls.left) {
                    currentEntity.components.position.x -= 5
                }
                if(currentEntity.components.movement.controls.right) {
                    currentEntity.components.position.x += 5
                }
            }
        }
    }

    static setPositionX(currentEntity, newPosition) {
        currentEntity.components.position.x = newPosition
    }

    static setPositionY(currentEntity, newPosition) {
        currentEntity.components.position.y = newPosition
    }

    static subPositionX(currentEntity, amount) {
        currentEntity.components.position.x -= amount
    }
    
    static subPositionY(currentEntity, amount) {
        currentEntity.components.position.y -= amount
    }

    static addPositionX(currentEntity, amount) {
        currentEntity.components.position.x += amount
    }
    
    static addPositionY(currentEntity, amount) {
        currentEntity.components.position.y += amount
    }
}
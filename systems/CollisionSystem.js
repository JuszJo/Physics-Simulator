import { GameWorld } from "../components/components.js"
import MovementSystem from "./MovementSystem.js"
import VelocitySystem from "./VelocitySystem.js"

export default class CollisionSystem {
    constructor(entities) {
        this.entities = entities
        this.collidables = []
    }

    checkWallCollision() {
        const game = GameWorld.getProps()

        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.collision) {
                if(currentEntity.components.render.type == "quad" || currentEntity.components.render.type == "camera") {
                    const entity = {
                        x: currentEntity.components.position.x,
                        y: currentEntity.components.position.y,
                        width: currentEntity.components.dimension.width,
                        height: currentEntity.components.dimension.height,
                    }

                    if(entity.x < 0) {
                        MovementSystem.setPositionX(currentEntity, 0)
                    }
                    if(entity.x + entity.width > game.canvasWidth) {
                        MovementSystem.setPositionX(currentEntity, game.canvasWidth - entity.width)
                    }
                    if(entity.y < 0) {
                        MovementSystem.setPositionY(currentEntity, 0)

                        VelocitySystem.setVelocityY(currentEntity, 0)
                    }
                    if(entity.y + entity.height > game.canvasHeight) {
                        MovementSystem.setPositionY(currentEntity, game.canvasHeight - entity.height)

                        MovementSystem.changeState(currentEntity, "ground")
                        
                        if(!currentEntity.components.bounce) {
                            VelocitySystem.setVelocityY(currentEntity, 0)
                        }                        
                    }
                }
            }
        }
    }
}
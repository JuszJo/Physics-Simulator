import { GameWorld } from "../components/components.js";

export default class RenderSystem {
    constructor(entities) {
        this.entities = entities
        this.game = GameWorld.getProps()
    }

    render() {
        this.game.drawingSurface.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight)
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            const currentEntityObject = {
                x: currentEntity.components.position.x,
                y: currentEntity.components.position.y,
                width: currentEntity.components.dimension.width,
                height: currentEntity.components.dimension.height,
            }

            if(currentEntity.components.render) {
                switch (currentEntity.components.render.type) {
                    case "quad":
                        this.game.drawingSurface.fillRect(
                            currentEntityObject.x, currentEntityObject.y,
                            currentEntityObject.width, currentEntityObject.height
                        )

                        break;
                
                    default:
                        break;
                }
            }
        }
    }
}
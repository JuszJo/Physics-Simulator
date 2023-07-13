import components from "../components/components.js"

export default class RenderSystem {
    constructor(entities) {
        this.entities = entities
        this.game = components.GameWorld.getProps()
    }

    render() {
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.render) {
                const currentEntityObject = {
                    x: currentEntity.components.position.x,
                    y: currentEntity.components.position.y,
                    width: currentEntity.components.dimension.width,
                    height: currentEntity.components.dimension.height,
                }
                switch (currentEntity.components.render.type) {
                    case "quad":
                        this.game.drawingSurface.fillRect(
                            currentEntityObject.x, currentEntityObject.y,
                            currentEntityObject.width, currentEntityObject.height
                        )

                        break;                        
                    case "camera":
                        this.game.drawingSurface.strokeRect(
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

    renderBackgroundImage() {
        this.game.drawingSurface.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight)
        for(const id in this.entities) {
            const currentEntity = this.entities[id]

            if(currentEntity.components.backgroundImage) {
                const entityObject = {
                    image: currentEntity.components.backgroundImage.image,
                    x: currentEntity.components.position.x,
                    y: currentEntity.components.position.y,
                    width: currentEntity.components.backgroundImage.image.width,
                    height: currentEntity.components.backgroundImage.image.height,
                }

                // draw image
                this.game.drawingSurface.drawImage(entityObject.image, entityObject.x, entityObject.y)
            }
        }
    }
}
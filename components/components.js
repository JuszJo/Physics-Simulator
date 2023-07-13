export class GameWorld {
    static getProps() {
        const name = "gameworld"
    
        const canvas = document.querySelector('canvas')
        
        const canvasWidth = 800
        const canvasHeight = 600

        canvas.width = canvasWidth
        canvas.height = canvasHeight
    
        const drawingSurface = canvas.getContext('2d')

        return {
            name, 
            canvasWidth, 
            canvasHeight,
            drawingSurface
        }
    }
}

export class Inventory {
    constructor() {
        this.name = "inventory"
        this.items = []
    }

    addItem(item) {
        this.items.push({
            [item.name]: item
        });
    }
    
    removeItem(item) {
        const index = this.items.indexOf(item);

        this.items.splice(index, 1);
    }
}

export class Position {
    constructor(position) {
        this.name = "position"
        this.x = position.x
        this.y = position.y
        this.state = "air"
    }
}

export class Velocity {
    constructor(velocity) {
        this.name = "velocity"
        this.x = velocity.x
        this.y = velocity.y
    }
}

export class Dimension {
    constructor(dimension) {
        this.name = "dimension"
        this.width = dimension.width
        this.height = dimension.height
    }
}
export class Movement {
    constructor(type) {
        this.name = "movement"
        this.type = type

        this.controls = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false
        }
        
        this.controlsArrow = {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    }
}

export class Gravity {
    constructor() {
        this.name = "gravity"
        this.value = 0.5
    }
}

export class Bounce {
    constructor() {
        this.name = "bounce"
        this.force = 10
        this.value = 0.8
    }
}

export class Jump {
    constructor() {
        this.name = "jump"
        this.value = 10
    }
}

export class Collision {
    constructor() {
        this.name = "collision"
    }
}

export class Gun {
    constructor() {
        this.name = "gun"
        this.damage = 10
    }
}

export class Render {
    constructor(type) {
        this.name = "render"
        this.type = type
    }
}

export class BackgroundImage {
    constructor(image) {
        this.name = "backgroundImage"
        this.image = new Image()
        this.image.src = image
    }
}

export class Camera {
    constructor() {
        this.name = "camera"
    }
}

export default {
    GameWorld,
    Inventory,
    Position,
    Velocity,
    Dimension,
    Movement,
    Gravity,
    Bounce,
    Jump,
    Collision,
    Gun,
    Render,
    BackgroundImage,
    Camera
}
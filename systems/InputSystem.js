export default class InputSystem {
    constructor(movementSystem) {
        this.movementSystem = movementSystem
    }

    listen() {
        addEventListener('keydown', e => {
            const key = e.key

            this.movementSystem.handleKeydownEvent(key)
        })

        addEventListener('keyup', e => {
            const key = e.key

            this.movementSystem.handleKeyupEvent(key)
        })
    }
}
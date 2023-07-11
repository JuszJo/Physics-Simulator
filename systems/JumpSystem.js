import VelocitySystem from "./VelocitySystem.js"

export default class JumpSystem {
    static applyJump(currentEntity, value) {
        VelocitySystem.setVelocityY(currentEntity, -value)
    }
}
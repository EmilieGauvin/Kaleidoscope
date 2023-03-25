import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/build/three.module.js'
import Experience from '../Experience.js'
import { Reflector } from '../Utils/Reflector'
import fullScreenGroup from '../Utils/fullScreenGroup'
import resizeFullScreenGroup from '../Utils/resizeFullScreenGroup'
import moveFullScreenGroup from '../Utils/moveFullScreenGroup'

export default class Mirrors {
    
    constructor(texture) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.setMirrors()
    }

    setMirrors() {
        this.mirrorsGroup = new THREE.Group()
        const mirrorsGeometry = new THREE.PlaneGeometry(5, 15)
        const mirrorsOptions =
        {
            clipBias: 0.003,
            textureWidth: 256,
            textureHeight: 256,
            color: 0x777777
        }

        const mirror1 = new Reflector(mirrorsGeometry, mirrorsOptions)
        mirror1.rotation.x = Math.PI * 0.5
        mirror1.position.y = 2

        const mirror2 = new Reflector(mirrorsGeometry, mirrorsOptions)
        mirror2.rotation.x = Math.PI * 0.5
        mirror2.rotation.y = Math.PI / 3 + Math.PI
        mirror2.position.x = 1

        const mirror3 = new Reflector(mirrorsGeometry, mirrorsOptions)
        mirror3.rotation.x = Math.PI * 0.5
        mirror3.rotation.y = Math.PI / 3 * 2
        mirror3.position.x = - 1

        this.mirrorsGroup.add(mirror1, mirror2, mirror3)
        this.mirrorsGroup.position.z = mirrorsGeometry.parameters.height * 0.25

        this.fullscreen = fullScreenGroup(
            [{ object: this.mirrorsGroup, X: 0, Y: 0, Z: 0 }],
            this.camera.instance,
            7,
            this.scene,
            false)
    }

    resize() {
        resizeFullScreenGroup(this.fullscreen)
    }

    move() {
        moveFullScreenGroup(this.fullscreen)
    }
}
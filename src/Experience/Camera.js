import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/build/three.module.js'
import { TrackballControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/examples/jsm/controls/TrackballControls.js';
import Experience from "./Experience";

export default class Camera {
    
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()

        this.controls.addEventListener('change', () => {
            this.experience.world.mirrors.move()
        });
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            55,
            this.sizes.width / this.sizes.height,
            0.1,
            15)
        this.instance.position.set(0, 0, 9)
        this.scene.add(this.instance)

    }

    setControls() {
        this.controls = new TrackballControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.noZoom = true
        this.controls.panSpeed = 0.1
        this.controls.rotateSpeed = 0.3
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
        this.scaleRatio = this.experience.scaleRatio
        this.controls.handleResize()
    }

    update() {
        if (this.controls) this.controls.update()
    }
}


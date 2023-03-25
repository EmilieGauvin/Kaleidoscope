import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/build/three.module.js'
import Experience from "./Experience";

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.debug = this.experience.debug

        this.debugObject = {}
        this.debugObject.color = new THREE.Color('#a09ef5')
        //Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('renderer')
        }

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        }
        )
        this.instance.physicallyCorrectLights = true
        this.scene.background = this.debugObject.color
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)

        //Debug
        if (this.debug.active) {
            this.debugFolder.addColor(this.scene, 'background')
        }
    }

    lightMode() {
        this.scene.background = new THREE.Color('#ff42ef')
    }

    darkMode() {
        this.scene.background = new THREE.Color('#a200fa')
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}

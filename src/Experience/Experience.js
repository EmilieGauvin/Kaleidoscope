import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/build/three.module.js'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World.js'
import Debug from './Utils/Debug'
import Stats from 'stats.js'


let instance = null

export default class Experience {

    constructor(canvas) {
        if (instance) {
            return instance
        }
        instance = this

        //Stats
        this.statsActive = window.location.hash === '#stats'
        if (this.statsActive) {
            this.stats = new Stats()
            this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
            document.body.appendChild(this.stats.dom)
        }

        //Global acces
        window.experience = this

        //Options
        this.canvas = canvas

        //Set up
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()

        this.world = new World()

        this.sizes.on('resize', () => {
            this.resize()
        })

        //Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    lightMode() {
        this.renderer.lightMode()
        this.world.lightMode()
    }

    darkMode() {
        this.renderer.darkMode()
        this.world.darkMode()
    }


    resize() {
        this.camera.resize()
        this.renderer.resize()
        this.world.resize()
    }

    update() {
        if (this.statsActive) this.stats.begin()

        this.camera.update()
        this.renderer.update()
        if (this.world) this.world.update()

        if (this.statsActive) this.stats.end()
    }
}

import * as THREE from 'https://unpkg.com/three@0.145.0/build/three.module'
import Experience from '../Experience.js'

export default class Objects {
    
    constructor(texture) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time

        this.setTorusKnot()
    }

    setTorusKnot() {
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.7, 100, 16);
        const material = new THREE.MeshStandardMaterial();
        this.torusKnot = new THREE.Mesh(geometry, material);
        this.scene.add(this.torusKnot);
    }

    update() {
        this.torusKnot.rotation.y += this.time.delta * 0.0001
        this.torusKnot.rotation.z += this.time.delta * 0.0002
    }
}
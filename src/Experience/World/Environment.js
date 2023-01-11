import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r146/build/three.module.js'
import Experience from "../Experience";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug


        //Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setHemisphereLight()
        this.setSpotLight()
    }

    setHemisphereLight()
    {   
        this.hemisphereLight = new THREE.HemisphereLight('#ffffff', '#ffffff', 5)

        this.scene.add(this.hemisphereLight)

        //Debug
        if(this.debug.active)
        {
            this.debugFolder.addColor(this.hemisphereLight,'color').name('sky color')
            this.debugFolder.addColor(this.hemisphereLight,'groundColor').name('ground color')
        }
    }

    setSpotLight()
    {   
        this.spotLight = new THREE.SpotLight('#ffffff', 12, 20, Math.PI * 0.1, 0.25, 1)
        this.spotLight.position.set(2, 8, 4)
        this.scene.add(this.spotLight)

        //Debug
        if(this.debug.active)
        {
            this.debugFolder.addColor(this.spotLight,'color').name('spotlight color') 
            this.debugFolder.add(this.spotLight, 'intensity').min(0).max(100).step(0.01)
        }
    }

    lightMode()
    {
        this.hemisphereLight.color = new THREE.Color('#ff0000')
        this.hemisphereLight.groundColor = new THREE.Color('#ff3396')
        this.spotLight.color = new THREE.Color('#ff00d0')
    }

    darkMode()
    {
        this.hemisphereLight.color = new THREE.Color('#6c009e')
        this.hemisphereLight.groundColor = new THREE.Color('#7b1109')
        this.spotLight.color = new THREE.Color('#0c0014')
    }
}

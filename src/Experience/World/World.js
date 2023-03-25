import Environment from './Environment';
import Mirrors from './Mirrors';
import Objects from './Objects';

export default class World {

    constructor() {
        this.mirrors = new Mirrors()
        this.objects = new Objects()
        this.environment = new Environment()
    }

    lightMode() {
        this.environment.lightMode()
    }

    darkMode() {
        this.environment.darkMode()
    }

    resize() {
        this.mirrors.resize()
    }

    update() {
        if (this.objects) this.objects.update()
    }
}






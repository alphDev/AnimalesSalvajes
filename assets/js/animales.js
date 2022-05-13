//import de la clase padre
import Animal from "./Class.js";

//Son las Subclases de Animal (que es la clase padre)
class Leon extends Animal {
    rugir() {
        return console.log("RAAAWWWW")
    }
}

class Lobo extends Animal {
    aullar() {
        return console.log("AAAAAUUUUUU")
    }
}

class Oso extends Animal { 
    gruñir() {
        return console.log("OOARRRRR")
    }
}

class Serpiente extends Animal {
    sisear() {
        return console.log("SSSSSSSSS!")
    }
}

class Aguila  extends Animal {
    chillar() {
        return console.log("EEEEUUHHH!")
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };

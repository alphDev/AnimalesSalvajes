//Esta es la clase padre Animal, donde se tienen todas las caracteristicas

class Animal {
    #nombre 
    #edad
    #img
    #comentarios
    #sonidos
    #id
    constructor ( nombre, edad, img, comentarios, sonidos, id ) { 
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonidos = sonidos;
        this.#id = id
    }

    get nombre() {
        return this.#nombre;
    };

    get edad(){
        return this.#edad;
    };

    get img(){
        return this.#img;
    };

    set comentarios(nuevo_comentario){
        return this.#comentarios = nuevo_comentario;
    };

    get comentarios(){
        return this.#comentarios
    }

    get sonidos(){
        return this.#sonidos 
    };

    get id() {
        return this.#id
    }

    

}

export default Animal;
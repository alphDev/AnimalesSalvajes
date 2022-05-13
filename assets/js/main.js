import consulta from "./consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";


// crear un cache de modulo
// cuando le das click compara el id con el numero de clase 
// trae la informacion a la memoria cache
// renderisa la informacion con el modulo


const FormAnimales = (function() {
    const state = {
        inventario: [],
    };

    // DOMCache

    const animales_div = document.querySelector('#Animales');
    const animales_module = document.querySelector('.modal-body');
    const selectorAnimal = document.getElementById('animal');
    const form = document.querySelector('form');
    let inventarioNum = 0;
    

    // EventListeners
    form.addEventListener("submit", submitHandler)
    selectorAnimal.addEventListener("change", animalHandler)
    $('#exampleModal').on('show.bs.modal', BootstrapModalHandler)
    

    // Functions
    async function init() {
        const datos = await consulta.getDatos();
        state.animales = datos.animales;
    }

    function submitHandler(e) {
        e.preventDefault()
        const animal = getAnimal(form.animal.value)
        const form_data = {
            nombre: form.animal.value,
            edad: form.edad.value,
            comentario: form.comentarios.value,
            imagen: animal.imagen,
            sonido: animal.sonido
        }
        
        const instancia_animal = instanceGenerator(form_data)
        console.log(instancia_animal)
        addToInventory(instancia_animal)
        
    }

    function animalHandler(e) {
        const animal = getAnimal(e.target.value)
        const imgSelector = `/assets/imgs/${animal.imagen}`;
        document.getElementById('preview').style.backgroundImage = `url(${imgSelector})`;

        
    }
    
    function reinicioFormulario(){

        form.animal.value = "Seleccione un animal";
        form.comentarios.value = "";
        document.getElementById('preview').style.backgroundImage = `url(/assets/imgs/lion.svg)`;

    }

    function getAnimal(name) {
        return state.animales.find(animal => animal.name === name)
    }

    function instanceGenerator(form) {
        let instance;
        inventarioNum++;
        let id = `${inventarioNum}`;
        
       
        if (form.nombre === "Leon"){
            instance = new Leon(form.nombre, form.edad, form.imagen, form.comentario, form.sonido, id);

        } else if (form.nombre === "Lobo") {
            instance = new Lobo(form.nombre, form.edad, form.imagen, form.comentario, form.sonido, id);

        } else if (form.nombre === "Oso") {
            instance = new Oso(form.nombre, form.edad, form.imagen, form.comentario, form.sonido, id);

        } else if (form.nombre === "Serpiente") {
            instance = new Serpiente(form.nombre, form.edad, form.imagen, form.comentario, form.sonido, id);

        } else if (form.nombre === "Aguila") {
            instance = new Aguila(form.nombre, form.edad, form.imagen, form.comentario, form.sonido, id);

        }
        return instance

    }
    
    function addToInventory(animal) {
        if (animal === undefined) {
            console.log('No pasa nada mi loco')
            return
        }

        state.inventario.push(animal);
        console.log(state.inventario);
        render()
    }

    function html(animal) {
        return `<div class="px-1 pb-4">
            <div class="bg-dark text-white container">
              <img class="card-img-top animalClick" data-toggle="modal" data-target="#exampleModal" data-index="${animal.id}" height="115" src="/assets/imgs/${animal.img}"/>
              <div>
                <button class="btn btn-secondary w-100"> 
                  <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
        </div>`
    }

    function htmlModule(animal) { 
        return `<div class=" text-white container">
            <img class="card-img-top" src="/assets/imgs/${animal.img}" alt="Card image cap">
                <div class="card-body" style="text-align: center;">
                <b>
                    <p style="margin-bottom: 2px;">${animal.edad}</p>
                    <p>Comentarios</p>
                </b>
                <p>${animal.comentarios}</p>
            </div>`
    }

    function BootstrapModalHandler(e) {
        const index = e.relatedTarget.dataset.index
        const animal = state.inventario.find(animal => animal.id === index)
        const html = htmlModule(animal)
        animales_module.innerHTML = html
    }

    function render() {
        reinicioFormulario()
        const html_animals = state.inventario.map(animal => html(animal))
        console.log(html_animals)
        animales_div.innerHTML = html_animals.join('')
    }

    return { init }
})()

FormAnimales.init()


/*

div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="${p.getImg()}"
                data-toggle="modal" data-target="#exampleModal"
                onclick="modalDetails('${i}')"
              />
              <div>
                <button onclick="playSound('${p.getNombre()}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
    `;

*/


//Modulo para importar los datos tipo JSON

const consulta = (() => {
    const url = "../../animales.json";

    // async function init() {
    //     const data = await getDatos();
    //     console.log(data);
    // }

    const getDatos = async () => {
        const respuesta = await fetch(url);
        return respuesta.json();
    }

    return {
        getDatos,
        //init
    }
})();

export default consulta;
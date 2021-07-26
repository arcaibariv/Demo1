
class recursosML {
    constructor(url){
        this.url =url
    }

    consultaML = async (coda) => {
        try{
            if (coda == "") {
                let response = await fetch(this.url);
                let data = await response.json();
                return data                
            } else {
                let response = await fetch(`${this.url}/${coda}`);
                let data = await response.json();
                return data
            }            
        }
        catch(er){
            console.log(e)
        }
    }
}

async function mostrarCarrusel(objetoConsulta) {
    for (let idx = 0; idx < 3; idx++ ) {
        let contendor = document.getElementById(`carrusel${idx+1}`)
        let data = await objetoConsulta.consultaML("trends/MLM")

        contendor.querySelector("h1").textContent = data[idx].keyword.toUpperCase()
    }
}

async function mostrarArticulosCategorias(objetoConsulta,categoria) {
    let divisor = document.getElementById("articulos")
    let contenedor = document.getElementById("modelo-articulos")
    let fragmento = document.createDocumentFragment();
    let data = await objetoConsulta.consultaML(`sites/MLM/search?category=${categoria}`)
    for (let idx = 0; idx<9; idx++) {
        contenedor.content.querySelector("h5").textContent=data.results[idx].title
        contenedor.content.querySelector("img").setAttribute("src",data.results[idx].thumbnail)
        contenedor.content.querySelector("small").textContent=data.results[idx].price
        contenedor.content.querySelector("p").textContent=data.results[idx].id
        contenedor.content.querySelector("p").setAttribute("href",data.results[idx].permalink)

        let clone = contenedor.content.cloneNode(true)
        fragmento.appendChild(clone)
    }
    divisor.appendChild(fragmento)
}

async function mostrarArticulosBuscar(objetoConsulta,busqueda) {
    let divisor = document.getElementById("articulos")
    let contenedor = document.getElementById("modelo-articulos")
    let fragmento = document.createDocumentFragment();
    let data = await objetoConsulta.consultaML(`sites/MLM/search?q=${busqueda}`)
    if (data.results.length === 0){
        window.alert("Busqueda no válida")
        mostrarArticulosBuscar(objetoConsulta,"MasVendidos")
    } else{
        for (let idx = 0; idx<9; idx++) {
            contenedor.content.querySelector("h5").textContent=data.results[idx].title
            contenedor.content.querySelector("img").setAttribute("src",data.results[idx].thumbnail)
            contenedor.content.querySelector("small").textContent=data.results[idx].price
            contenedor.content.querySelector("p").textContent=data.results[idx].id
            contenedor.content.querySelector("p").setAttribute("href",data.results[idx].permalink)
    
            let clone = contenedor.content.cloneNode(true)
            fragmento.appendChild(clone)
        }
        divisor.appendChild(fragmento)
    
    }
}

async function mostrarOpcionesCategorias(objetoConsulta) {
    try{
        let elegirCategoria = document.getElementById("selectCategoria")
        let data = await objetoConsulta.consultaML("sites/MLM")
        data.categories.forEach(element => {
            let opcion = document.createElement('option',);
            opcion.value = element.id;
            opcion.textContent = `${element.name}`;
            elegirCategoria.appendChild(opcion);
        })

        
    }
    catch(er){
        console.log(er)
    }
}

const seleccionCategoria=document.getElementById("seleccionarCategoria")

seleccionCategoria.onclick = () => {
    let objetoConsulta =new recursosML("https://api.mercadolibre.com")
    let seleccionCategoria = document.getElementById("selectCategoria")
    let indiceSeleccionado = seleccionCategoria.value
    let division = document.getElementById("articulos")
    division.innerHTML=""
    mostrarArticulosCategorias(objetoConsulta,indiceSeleccionado) 
}

const botonBuscar=document.getElementById("botonBuscar")

botonBuscar.onclick = () => {
    let busqueda = document.getElementById("barraBuscar").value
    let objetoConsulta = new recursosML("https://api.mercadolibre.com")
    let division = document.getElementById("articulos")
    division.innerHTML=""
    console.log(busqueda.replace(/ /g,"-"))
    mostrarArticulosBuscar(objetoConsulta,busqueda.replace(/ /g,""))
}



const objetoConsulta = new recursosML("https://api.mercadolibre.com")
mostrarCarrusel(objetoConsulta)
mostrarOpcionesCategorias(objetoConsulta)
document.addEventListener('DOMContentLoaded', () => {
    mostrarArticulosBuscar(objetoConsulta,"MasVendidos")
  })



//https://api.mercadolibre.com/trends/MLM  tendencias
//https://api.mercadolibre.com/sites/MLM/search?q=Motorola%20G6 Busqueda
//https://api.mercadolibre.com/sites/MLM/search?category=MLM1058...' categorias
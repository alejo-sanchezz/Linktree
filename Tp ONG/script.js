function flexToggle(){
let nav= document.querySelector("#FlexNav")
nav.classList.toggle("flexToggle")

let links = document.querySelectorAll(".link")
links.forEach (link => link.classList.toggle("linkToggle"))
}


function abrirModal() {

// Paso 1: usar .createElement("elemento")
const modal = document.createElement("div")

//Paso 2: agregar contenido al Div
modal.innerHTML = `<h2>Con tu donacion nos ayudas a poder seguir ayudando a los proximos animalitos que vengan</h2>
    <p>Nombre</p> <input type="text">
    <p>Apellido</p>
    <input type="text">
    <p>Teléfono</p>
    <input type="tel">
    <p>Cantidad a donar</p>
    <input type="number">
<button onclick="cambiarModal()"> Enviar donacion </button>`

//Paso 3: Crear clase CSS
modal.classList.add("modal")

//Paso 4: Insertarlo en nuestra pagina
document.body.appendChild(modal)
}

function cambiarModal() {
    document.querySelector(".modal").innerHTML=`<h2>Gracias por tu donacion</h2>
    <button onclick="cerrarModal()">Cerrar </button>`

}

function cerrarModal(){

    document.querySelector(".modal").remove()
}
 
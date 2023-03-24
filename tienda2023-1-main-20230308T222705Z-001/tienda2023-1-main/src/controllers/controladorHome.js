import {productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintarProductos.js'


//llamando a la fila
let fila=document.getElementById("fila")

//Pintar los productos de la tienda
pintarProductos(productos)

fila.addEventListener("click",function(evento){

    let datosProductoseleccionado={}
    let target=evento.target.parentElement

    datosProductoseleccionado.foto=target.querySelector("img").src
    datosProductoseleccionado.nombre=target.querySelector("h3").textContent
    datosProductoseleccionado.precio=target.querySelector("h5").textContent
    datosProductoseleccionado.descripcion=target.querySelector(".d-none").textContent
    datosProductoseleccionado.precioCOP=target.querySelector("h2",".d-none").textContent
    datosProductoseleccionado.dolaresUSD=target.querySelector("h1",".d-none").textContent


    

    //usaremos la memoria del pc para guardar este info
    localStorage.setItem("producto",JSON.stringify(datosProductoseleccionado))

    window.location.href="./src/views/ampliarinfo.html"
    
})


let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)


let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precioCOP=document.getElementById("precioCOP")
precioCOP.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let informacion=document.getElementById("informacion")
informacion.textContent=infoProducto.informacion

let vaciar=document.getElementById("empty")
vaciar.textContent=infoProducto.vaciar

let dolares=document.getElementById("botonverDolares")

//precioCOP
let cantidad=document.getElementById("cantidad")
cantidad.addEventListener("change",function(){
    precioCOP.textContent=infoProducto.precioCOP*cantidad.value
})

let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infocarrito!=null){
    carrito=infocarrito
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let botonAgregarproducto=document.getElementById("btnagregarcarrito")


botonAgregarproducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
   
})

vaciar.addEventListener("click",function(){
    carrito=[]
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})

//cantidad de producto ver en dolares
dolares.addEventListener("click",function(){
    precioCOP.textContent="USD"+infoProducto.dolaresUSD

    cantidad.addEventListener("change",function(){
        precioCOP.textContent="USD " +infoProducto.dolaresUSD*cantidad.value
    })
})





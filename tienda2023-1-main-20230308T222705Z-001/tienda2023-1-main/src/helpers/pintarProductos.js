export function pintarProductos(productos){
    
    productos.forEach(function(producto){
   
        //creando columnas para alojar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //crear una tarjeta para almacenar la info del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        //crear un precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="COP"+producto.precio

        //Detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })

        //Descripcion
        let descripcion=document.createElement("h6")
        descripcion.classList.add("text-center","d-none")
        descripcion.textContent=producto.descripcion

        //precioCOP
        let precioCOP=document.createElement("h2")
        precioCOP.classList.add("text-center","fs-4","d-none","text-success")
        precioCOP.textContent=producto.precio 

        let dolaresUSD=document.createElement("h1")
        dolaresUSD.classList.add("text-center","fs-4","text-success","d-none")
        dolaresUSD.textContent=Math.trunc(producto.precio/4800)

    
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precioCOP)
        tarjeta.appendChild(dolaresUSD)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    })
}


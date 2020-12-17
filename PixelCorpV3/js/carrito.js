function actualizarPaquete(boton){
    let divPrecio = boton.parentNode.previousSibling.previousSibling;
    let precio = divPrecio.childNodes[1].textContent.substring(3);
    let divNombre = divPrecio.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    let nombre = divNombre.textContent;
    let nombrePaqueteElegido = document.getElementById("nombre-paquete-elegido");
    let precioPaqueteElegido = document.getElementById("precio-paquete-elegido");
    nombrePaqueteElegido.textContent = nombre;
    precioPaqueteElegido.textContent = "S/ "+precio;
    precioPaqueteElegido.className = "precio";
    calcularPrecioTotal();
}
function agregarAlCarrito(boton){
    let divPrecio = boton.parentNode.previousSibling.previousSibling;
    let precio = divPrecio.textContent.substring(3);
    let nombre = divPrecio.previousSibling.previousSibling.textContent;
    let tablaCarrito = document.getElementById("tabla-carrito");
    htmlProducto = 
    '<tr>'+
    '    <td>'+nombre+'</td>'+
    '    <td class="precio">'+precio+'</td>'+
    '    <td><button type="button" class="btn btn-danger" onclick="eliminarDelCarrito(this)">X</button></td>'+
    '</tr>';
    tablaCarrito.innerHTML += htmlProducto;
    calcularPrecioTotal();
}
function eliminarDelCarrito(boton){
    let fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    calcularPrecioTotal();
}
function calcularPrecioTotal(){
    let precios = document.getElementsByClassName("precio");
    precioTotal=0;
    for( let i=0 ; i < precios.length; i++){
        precioTotal +=  parseFloat(precios[i].textContent.trim().substring(3));
    }
    let compraTotal = document.getElementById("precio-total");
    compraTotal.innerHTML =  "S/ "+precioTotal;
}
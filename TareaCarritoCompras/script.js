function guardarDato(){
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var detalles = document.getElementById("detalles").value;
    var datos = {
        'cantidad': cantidad,
        'precio': precio,
        'detalles': detalles
    };
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("detalles").value = "";
    actualizarDatos();
}
function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    //asdasdasd
    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);
    document.getElementById("cantidad").value = datos.cantidad;
    document.getElementById("precio").value = datos.precio;
    document.getElementById("detalles").value = datos.detalles;
}
function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}
function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            //asdasdasd
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            + '<span class="nom">' + datos.cantidad + '</span>'
            + '<span class="nom">' + datos.precio + '</span>'
            + '<span class="nom">' + datos.detalles + '</span>'
            + '<span class="nom">' + (datos.precio * datos.cantidad) + '</span>' + '</li><br>';
            //al parecer, no funciona usando ${...} porque no he usado `...`
        }
    }
    document.getElementById('compra').innerHTML = registro;
}

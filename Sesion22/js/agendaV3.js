function guardarDato(){
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var correo = document.getElementById("correo").value;
    var datos = {
        'movil': movil,
        'correo': correo
    };
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("correo").value = "";
    actualizarDatos();
}
function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    //asdasdasd
    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);
    document.getElementById("movil").value = datos.movil;
    document.getElementById("correo").value = datos.correo;
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
            + '<span class="nom">' + datos.movil + '</span>'
            + '<span class="nom">' + datos.correo + '</span>' +'</li><br>';
            //al parecer, no funciona usando ${...} porque no he usado `...`
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}
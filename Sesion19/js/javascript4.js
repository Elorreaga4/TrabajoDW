function resta(x, y){
    var rest = x - y;
    document.write("<h2>La resta es "+ rest +"</h2>");
}
function suma(a, b){
    var sum = a + b;
    document.getElementById("sumar").innerHTML = "La suma es " + sum;
}
function excribir(){
    valor = document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML =' '+valor;
}
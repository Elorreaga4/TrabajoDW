function mostrarDia(){
    var numero_dia = document.getElementById("numero_dia").value;
    numero_dia = parseInt(numero_dia);
    switch(numero_dia){
        case 1:
            document.getElementById("resultado_dia").innerHTML = "El día es: Lunes";
        break;
        case 2:
            document.getElementById("resultado_dia").innerHTML = "El día es: Martes";
        break;
        case 3:
            document.getElementById("resultado_dia").innerHTML = "El día es: Miercoles";
        break;
        case 4:
            document.getElementById("resultado_dia").innerHTML = "El día es: Jueves";
        break;
        case 5:
            document.getElementById("resultado_dia").innerHTML = "El día es: Viernes";
        break;
        case 6:
            document.getElementById("resultado_dia").innerHTML = "El día es: Sabado";
        break;
        case 7:
            document.getElementById("resultado_dia").innerHTML = "El día es: Domingo";
        break;
        default:
            document.getElementById("resultado_dia").innerHTML = "No existe este día";
    }
}
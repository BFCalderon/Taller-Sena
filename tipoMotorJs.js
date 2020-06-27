function TipoMotor(){
    let motorType = prompt("Ingrese el numero que corresponda al tipo de bomba que necesita"+
    "\n 1 -> Bomba de agua" +
    "\n 2 -> Bomba de gasolina" +
    "\n 3 -> Bomba de hormigón" +
    "\n 4 -> Bomba de pasta alimenticia"
    )
    switch (motorType){
        case "1":
            alert("La bomba es una bomba de agua")
        break;
        case "2":
            alert("La bomba es una bomba de gasolina")
        break;
        case "3":
            alert("La bomba es una bomba de hormigón")
        break;
        case "4":
            alert("La bomba es una bomba de pasta alimenticia")
        break;
        default:
            alert("No existe un valor válido para tipo de bomba")
        break;
    }
}

TipoMotor()
var cost = prompt("Ingrese el valor neto del producto sin impuestos")
var productType = prompt("Ingrese el tipo de producto siendo validos unicamente los numeros 1, 2, 3");

obtenerImporteConImpuestos(cost, productType)

function obtenerImporteConImpuestos(cost, productType){
    switch (productType) {
    case "1":
        alert("Precio sin impuesto: "+cost+"\nPrecio con impuesto: "+Math.round(cost*(1+0.21)*100)/100)
    break;
    case "2":
        alert("Precio sin impuesto: "+cost+"\nPrecio con impuesto: "+Math.round(cost*(1+0.1)*100)/100)
    break;
    case "3":
        alert("Precio sin impuesto: "+cost+"\nPrecio con impuesto: "+Math.round(cost*(1+0.05)*100)/100)
    break;
    default:
        alert("El valor no pudo ser calculado, refresque la página (F5)")
    break;
    }
}

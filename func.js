let precioBase = parseInt(prompt("Ingrese precio del juego"))
let continuar = parseInt(prompt("Desea continuar? SI/NO"))


while(continuar == 'si'){
    if(!isNaN(precioBase) && precioBase != null && precioBase !=""){
        break
    }else{
        alert("No es un numero")
        continue
    }
}

function sumaImp(precioBase){
    return (precioBase * 1.74)
}

console.log("El precio más impuestos es de $" + sumaImp(precioBase))
alert("El precio más impuestos es de $" + sumaImp(precioBase))

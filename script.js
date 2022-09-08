// TODO: Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

let nombre = prompt("Buenas, ¿Como te llamas?");

if (nombre = "lady" || nombre == "Lady" || nombre == "leidy" || nombre == "Leidy") {
    alert("Hola Lady, feliz cumple (disculpa si es atrasado :p), espero te guste este pequeño programa y que cumplas muchos años mas y que esa guitarra siga afinada :p (solo con tu nombre sale este mensaje shh jaja)")
}

alert(`Hola ${nombre} en el programa se te pediran dos numeros, porfavor introducelos y se te mostrara en pantalla los numeros impares que existen entre ellos`)

function pedirNumero(lugar) {
    let value = prompt(`Porfavor ${nombre} introduce tu ${lugar} numero`);
    value = parseInt(value);
    return value; 
}

let value1 = pedirNumero("primer");
let value2 = pedirNumero("segundo");

function evaluarNumero(valor, lugar) {
    while (isNaN(valor) ) {
        valor = pedirNumero(lugar);
            if (!(isNaN(valor))) {
                break;
            }
    }
    return valor;
}

value1 = evaluarNumero(value1, "primer");
value2 = evaluarNumero(value2, "segundo");

while (value1 > value2) {
    alert("Asegurate que el primer numero sea menor al segundo");
    value1 = pedirNumero("primer");
    value2 = pedirNumero("segundo");
    value1 = evaluarNumero(value1, "primer");
    value2 = evaluarNumero(value2, "segundo");
        if (value1 < value2) {
            break;
        }
}

document.write(`Los numeros impares que existen entre el: <b>${value1}</b> y el <b>${value2}</b> son:<br>`)

for(let i = value1; i <= value2; i++) {
    if ((i % 2) === 0) {
        continue;
    }
    document.write(i + "<br>"); 
}

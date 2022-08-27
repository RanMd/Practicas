//TODO: Un programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

function numMayor(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
        if(num1 > num2 ) {
            alert(`Tu primer numero: ${num1} es mayor a tu segundo numero: ${num2}`)
            return true;
        } else if (num2 > num1 ) {
            alert(`Tu primer numero: ${num1} es menor a tu segundo numero: ${num2}`)
            return true;
        } else if (num2 === num1 ) {
            alert(`EL numero ${num2} y el numero ${num1} son iguales`)
            return true;
        } else {
            alert("Lo que introduciste no es un numero, o no introdujiste nada, vuelve a intentarlo")
            return false;
        }
}
let funcion = numMayor(prompt("Introduce un numero"),prompt("Introduce otro"));

let count = 0;
bucle: while (funcion == false) {
    let funcion2 = numMayor(prompt("Introduce un numero"),prompt("Introduce otro"));
    count++;
        if (funcion2 == true) {
            break bucle;
        }
bucle2: while (count == 5) {
            let aceptacion = prompt("Introduce un numero o introducete un pepino puto, entendido?");
                    if (aceptacion == "okey" || aceptacion == "ok") {
                    break bucle2;
                     } else {
                    aceptacion;
                    }
        }
}


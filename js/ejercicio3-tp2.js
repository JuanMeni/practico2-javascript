// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let resultado = "";
do {
    let frase = prompt("Escriba una frase");
    if (resultado == "") {
        resultado = resultado + frase;
    }
    else {
        resultado = resultado + "-" + frase;
    }
} while (confirm("Desea seguir?"));
document.write(resultado);
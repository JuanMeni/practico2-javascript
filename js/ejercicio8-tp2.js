/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = prompt("Introduzca un numero.")

if(Number(numero) == numero){
    if(numero >= 2 && numero <= 50){
        for(let indice = 1; indice <= numero; indice ++){
            for(let x = 0; x < indice; x++){
                document.write(indice);
            }document.write("<br>");
        }
    }
}
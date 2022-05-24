// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

do{
  let numero = parseInt(prompt("Introduzca un numero"));
    if(Number.isNaN(numero) == true){
        alert(numero + "No es un numero.");
    }
    else{
        suma = suma + numero;
    }

}while(confirm("Quiere ingresar otro numero?")==true);
document.write("La suma es " + suma);
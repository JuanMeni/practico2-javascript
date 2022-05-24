// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto= prompt("Introduzca un texto");
let i = 0;
while(i < texto.length){
 
 if (texto.charAt(i)=='a' || texto.charAt(i)=='e'|| texto.charAt(i)=='i' || texto.charAt(i)=='o' || texto.charAt(i)=='u')
 {
    document.write("El texto tiene su vocal en la posicion "+ (i+1));
    i = texto.length;
 }
 i++;
}  
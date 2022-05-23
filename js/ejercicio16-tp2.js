// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese un texto.");

let texto2 = "";

for(let i= 0; i < texto.length; i++){
    texto2 = texto.charAt(i)+ texto2
}

document.write(texto2);
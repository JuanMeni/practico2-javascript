// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Introduzca el numero de filas."));
let columnas = parseInt(prompt("Introduzca el numero de columnas."));
let resultado = filas * columnas;

document.write("<table border>");

for(let i = 0; i < filas; i ++){
    document.write("<tr>");
    for(let x = 0; x < columnas; x ++){
       document.write("<td>");
       document.write(resultado);
       resultado --;
       document.write("</td>")
    }
    document.write("</tr>");  
}
document.write("</table>");

// otra forma de hacerlo (seria lo ideal ya que esta mas completa)
// pero se usa style.css para los bordes

// document.write(`<table> <tbody>`);
// // dibujo las filas y celdas
// for(let indiceFilas = 0; indiceFilas < filas; indiceFilas ++){
//     // aca se dibuja las filas
//     document.write("<tr>")
//     // ahora dibujo las celdas
//     for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna ++){
//         document.write(`<td>${resultado}</td>`);
//         resultado --;
//     }
//     document.write("</tr>")
// }
// document.write(`</table></tbody>`);

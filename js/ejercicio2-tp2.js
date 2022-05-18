// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let nota = prompt("Ingrese su nota: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10");

// switch (nota) {
//   case "0":
//   case "1":
//   case "2":
//     alert("Su nota es muy insuficiente.");
//     break;
//   case "3":
//   case "4":
//     alert("Su nota es insuficiente.");
//     break;
//   case "5":
//   case "6":
//     alert("Su nota es sufciente.");
//   case "7":
//     alert("Su nota es un bien.");
//     break;
//   case "8":
//   case "9":
//     alert("Su nota es notable.");
//     break;
//   case "10":
//     alert("Su nota es sobresaliente.");
//     break;
//   default:
//     document.write("Ingreso un numero erroneo.");
// }

if(Number(nota) == nota){
    switch (nota) {
        case "0":
        case "1":
        case "2":
          alert("Su nota es muy insuficiente.");
          break;
        case "3":
        case "4":
          alert("Su nota es insuficiente.");
          break;
        case "5":
        case "6":
          alert("Su nota es sufciente.");
        case "7":
          alert("Su nota es un bien.");
          break;
        case "8":
        case "9":
          alert("Su nota es notable.");
          break;
        case "10":
          alert("Su nota es sobresaliente.");
          break;
        default:
          document.write("Ingreso un numero erroneo.");
      }
}
else if(nota != undefined){
    document.write("Introduzca un numero valido.")
}
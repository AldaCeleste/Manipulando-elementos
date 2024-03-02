//2* Micro desafio
/*
Crear un archivo JavaScript: /public/js//moviesList.js, y vincularlo con el archivo:
/views//moviesList.ejs.
● Desde el archivo /public/js/moviesList.js, capturar los siguientes elementos: <body>
y <h1>, ubicados en el archivo /views//moviesList.ejs.
● Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”. Si la
respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f, y
la clase: fondoMoviesList.
● Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”.
● Agregar a la etiqueta <h1> los siguientes estilos:
○ Color de la fuente: white.
○ Color de fondo: teal.
○ Relleno: 20px.
 */

let cuerpo = document.querySelector('body');
let titulo = document.querySelector('h1');
console.log(titulo)


// ● Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”
let modoOscuro = prompt("¿Desea modo oscuro?");

// Si la respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f, yla clase: fondoMoviesList.

if (modoOscuro) {
   cuerpo.style.backgroundColor='#7f7f7f'
   cuerpo.classList.add('fondoMoviesList')
};
// Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS”.
titulo.innerText='LISTADO DE PELICULAS';

// Agregar a la etiqueta <h1> los siguientes estilos:
// ○ Color de la fuente: white.
// ○ Color de fondo: teal.
// ○ Relleno: 20px.
titulo.style.color ='white'
titulo.style.backgroundColor= 'teal'
titulo.padding= '20px'




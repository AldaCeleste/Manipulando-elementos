// 3* Microdesafio
/*
Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
/views//moviesAdd.ejs.
● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
*/ 


const titulo = document.querySelector('h1');
console.log(titulo)
titulo.innerText='AGREGAR PELÍCULAS'

// Agregar a la sección la clase: “fondoCRUD”.
let section = document.querySelector('section');
section.classList.add('fondoCRUD')

//Agregar al artículo la clase: “fondoTransparente”.
let article = document.querySelector('article');
article.classList.add('fondoTransparente')

// 1* micro desafio
// Capturar los elementos del archivo index.ejs
let main = document.querySelector('main');
let subTitulo = document.querySelector('h2');
let anchor = document.querySelectorAll('h2 a');
let parrafos = document.querySelectorAll('section p');



// Indicar al usuario que ingrese su nombre mediante prompt
let nombre = prompt("Ingrese su nombre");

// Agregar "Invitado" si el usuario no ingresó su nombre
if (!nombre) {
    subTitulo.innerText += " Invitado";
} else {
    subTitulo.innerText += " " + nombre;
}

// Agregar estilo uppercase al <h2>
subTitulo.style.textTransform = "uppercase";

// Agregar estilo de color a los enlaces dentro de <h2>
anchor.forEach(a => {
    a.style.color = "#E51B3E";
});

// Preguntar al usuario si desea colocar un fondo de pantalla mediante confirm
let deseaFondo = confirm("¿Desea colocar un fondo de pantalla?");

//Si el usuario confirma, agregar la clase "fondo" al body
if (deseaFondo) {
    document.body.classList.add("fondo");
}

//A todos los párrafos que fueron capturados, asignar a los pares la clase:“descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.

parrafos.forEach((parrafo, index) => {
    if (index % 2 === 0) {
        parrafo.classList.add("destacadoPar");
    } else {
        parrafo.classList.add("destacadoImpar");
    }
});

// Hacer visible el <main> aplicando el estilo display: block
document.querySelector('.container').style.display='block';

// 2* micro desafio





    
const wrapper = document.querySelector(".wrapper"); //llama al selector
const header = wrapper.querySelector("header");

//funcion de mover con las propiedades de movimiento del mouse en los ejex X e Y.
function move({ movementX: ejeX, movementY: ejeY }) {
    //devuelve los valores finales de las propiedades CSS del elemento actual.
    let extractData = window.getComputedStyle(wrapper);

    //convierte un tipo de dato String a Integer (número).
    //es decir me extrae el valor numero de la propiedad left o top de la clase wrapper y los convierte en número.
    let leftData = parseInt(extractData.left);
    let topData = parseInt(extractData.top);

    //esto me va sumar los valores de parseInt con el movimiento
    //es decir cada vez que me mueva en el eje x o y le va sumar o restar tanto left como top
    wrapper.style.left = `${leftData+ejeX}px`;
    wrapper.style.top = `${topData+ejeY}px`;
}
//cada vez que se le de click al header le agrega la clase 'active' y llama a la funcion 'move'.
header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", move);
});
//al dejar de dar click remueve la clase 'active' y llama a la funcion 'move'.
document.addEventListener("mouseup", () => {
    header.classList.remove("active"); 
    header.removeEventListener("mousemove", move);
});

//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});

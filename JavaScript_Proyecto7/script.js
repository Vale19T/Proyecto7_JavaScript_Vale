//Forma de declarar variables en una forma mas rapida
let hr = mn = sg = ms = "0" + 0, iniciarTiempo;

//El boton inciar se asocia con la parte de iniciar
const botonIniciar = document.querySelector(".iniciar");
//El boton detener se asocia con la parte de detener
const botonDetener = document.querySelector(".detener");
//El boton reiniciar se asocia con la parte de reiniciar
const botonReiniciar = document.querySelector(".reiniciar");

botonIniciar.addEventListener("click", iniciar);
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", reiniciar);

//Crear la funcion iniciar
function iniciar(){
    //Traer todo lo asociado con el botonIniciar y opacara el boton dando a entender que esta en uso
    botonIniciar.classList.add("on");

    //Cuando inicie el tiempo empiecen a correr los milisegundos
    iniciarTiempo = setInterval(() => {
        ms++;
        //Concatenarle un 0 a la izquierda si los numeros son menores a 10
        ms = ms < 10 ? "0" + ms : ms;
        //Condicion para que cuando los milisegundos lleguen a 100 cambien el segundero
        if (ms == 100){
            sg++;
            sg = sg < 10 ? "0" + sg : sg;
            //Los milisegundos inician en cero nuevamente
            ms = "0" + 0;
        }
        if (sg == 60){
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            //Los segundos inician en cero nuevamente
            sg = "0" + 0;
        }
        if (mn == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }
        ingresarValor();

    }, 10);
}

function detener(){
    botonIniciar.classList.remove("on");
    //Limpiar el intervalo de refresco
    clearInterval(iniciarTiempo);
}
function reiniciar(){
    botonIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    //Dejar todo el cero
    hr = mn = sg = ms = "0" + 0;
    ingresarValor();
}
function ingresarValor(){
    //Inserta en el Html lo que tiene el milisegundo
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}
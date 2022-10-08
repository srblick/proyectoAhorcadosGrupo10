String.prototype.replaceAt=function(index, character){ 
    return this.substring(0, index) + character 
    + this.substring(index+character.length); 
} 

//Array de palabras
const palabras = ['facultad','programacion','juegos','paginas'];

//Asiganamos una palabra aleatoria
let palabra = palabras[Math.floor(Math.random()*(palabras.length))];
//Contador de fallos
let contadorFallos = 0;
//La transformamos en guiones
let guiones = palabra.replace(/./g, "_ ");
alert(palabra);
document.querySelector("#completador").innerHTML = guiones;

//Revisamos la letra ingresa
document.querySelector('#evaluar').addEventListener('click', () => 
{
    const letra = document.querySelector('#letra').value;
    //Contador de fallos
    let fallo = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            //Reemplazamos las letras correctas
            guiones = guiones.replaceAt(i*2, letra);
            fallo = false;
        }
    }

    //Control de fallo o acierto
    if(fallo){
        contadorFallos++;
        if(contadorFallos == 5){
            alert("Has Perdido");
        }
    }
    else{
        if(guiones.indexOf('_')<0){
            alert('GANASTE');
        }
    }

    document.querySelector("#completador").innerHTML = guiones;
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const Max = 100;
const Min = 1;


let numero;

do
{
    numeroUsuario("Ingrese un numero entre 1 - 100 para empezar el juego");
    mostrarResultado(numeroAleatorio, numero);

}while(numeroAleatorio != numero);



function numeroUsuario(string)
{
    let validacion;
    do{
        numero = pedirDato(string);
        validacion = validacionNumerica(numero,Min,Max);
    
    }while(validacion != true);
    
}
function pedirDato(string){
    let dato;

    dato = prompt(string);

    return dato;
}
function validacionNumerica(numero, rangoMin, rangoMax){

    let retorno = false;

    if(!isNaN(numero)  && numero != "" && numero>= rangoMin && numero<= rangoMax )
    {
        retorno = true;
    }

    return retorno;   
}

function mostrarResultado(numeroAleatorio,numero)
{
    if(numeroAleatorio == numero)
    {   
        console.log("Felicitaciones has ganado!!" + "Tu numero: " + numero);
    }else if(numeroAleatorio > numero)
        {
            console.log("El numero ingresado es menor que el numero aleatorio");
        }else{
            console.log("El numero ingresado es mayor que el numero aleatorio");
        }
}

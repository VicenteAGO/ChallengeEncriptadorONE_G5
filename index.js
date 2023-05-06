/*Conectamos los botones con nuestro HTML con el JS */
const botonUno = document.getElementById("encriptar");
const botonDos = document.getElementById("desencriptar");
const botonTres = document.getElementById("copiar");
const botonCuatro = document.getElementById("invertir");
const botonCinco = document.getElementById("revertir");

/*Escuchamos los eventos de los botones y agregamos una funcion anonima para la encriptacion */
botonUno.addEventListener("click", () => {
    contenido  = document.getElementById("texto1");
    let texto = contenido.value;
    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    console.log(textoCifrado);
/*Seleccionamos el lugar donde insertaremos nuestro elemento con el texto cifrado */
    let textArea = document.querySelector("#texto2");
/*Insertamos el elemento con el texto cifrado */
    textArea.innerHTML=`<textarea id="texto2">${textoCifrado}</textarea>`;
    contenido.value = "";
})

/*Escuchamos los eventos de los botones y agregamos una funcion anonima para la desencriptacion */
botonDos.addEventListener("click", () => {
    contenido = document.getElementById("texto1");
    let texto = contenido.value;
    let textoDesifrado = texto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    console.log(textoDesifrado);
/*Seleccionamos el lugar donde insertaremos nuestro elemento con el texto desifrado */
    let textArea = document.querySelector("#texto2");
/*Insertamos el elemento con el texto desifrado */
    textArea.innerHTML=`<textarea id ="texto2">${textoDesifrado}</textarea>`;
    contenido.value = "";
})

/*Escucamos el evento de los botones y agregamos la funcion para el copiado */
botonTres.addEventListener("click", () => {
    let textArea = document.querySelector("#texto2 textarea");
    textArea.select();
/*Esta api hace te permite copiar el valor al interactuar con el navegador y el portapapeles del sistema*/
    navigator.clipboard.writeText(textArea.value);
})

botonCuatro.addEventListener("click", () => {
    contenido = document.getElementById("texto1");
    let texto = contenido.value;
    let textoInvertido = texto.split("").reverse().join("");
    console.log(textoInvertido);
    /*Seleccionamos el lugar donde insertaremos nuestro elemento con el texto invertido */
    let textArea = document.querySelector("#texto2");
    /*Insertamos el elemento con el texto invertido */
    textArea.innerHTML=`<textarea id ="texto2">${textoInvertido}</textarea>`;
    contenido.value = "";
})

botonCinco.addEventListener("click", () => {
    contenido = document.getElementById("texto1");
    let texto = contenido.value;
    let textoRevertido = texto.split("").reverse().join("");
    console.log(textoRevertido);
    /*Seleccionamos el lugar donde insertaremos nuestro elemento con el texto invertido */
    let textArea = document.querySelector("#texto2");
    /*Insertamos el elemento con el texto invertido */
    textArea.innerHTML=`<textarea id ="texto2">${textoRevertido}</textarea>`;
    contenido.value = "";
})
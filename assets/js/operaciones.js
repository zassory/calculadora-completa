

export const sumar = ( num1 , num2 ) => {
    return parseInt(num1) + parseInt(num2);
}

export const restar = ( num1 , num2 ) => {
    return parseInt(num1) - parseInt(num2);
}

export const multiplicar = ( num1 , num2 ) => {
    return parseInt(num1) * parseInt(num2);
}

export const dividir = ( num1 , num2 ) => {
    return parseInt(num1) / parseInt(num2);
}

export const limpiar = () => {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}

export const mensajeResultado = (html, resultado) => {
    html.innerHTML = resultado;
    html.style.color = "red";
    html.style.fontFamily = "2rem";
    html.style.fontWeight = "700";
}


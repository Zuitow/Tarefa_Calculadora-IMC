// Resultado abaixo de 17 - Muito abaixo do peso;<br>
//     Resultado entre 17 e 18,19 - Abaixo do peso;<br>
//         Resultado entre 18,5 e 24,99 - Peso ideal;<br>
//             Resultado entre 25 e 29,99 - Sobrepeso;<br>
//                 Resultado entre 30 e 34,9 - Obesidade grau I;<br>
//                     Resultado entre 35 e 39,9 - Obesidade grau II (severa);<br>
//                         Resultado acima de 40 - Obesidade grau III (mórbida);<br></br>


var altura;
var peso;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);
    resultado = document.getElementById("resultado");

    console.log(imc);

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br/> Cuidado vc está muito abaixo do peso!";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!"; 
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você esta no peso Ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/> Você está sobrepeso!";
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, Obesidade Grau I!";
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+ imc.toFixed(2)  +"<br/> CUIDADO, obesidade grau II!";
    } else if (imc >= 40 ) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade Grau III!";
    }
document.getElementById("peso").value = "";
document.getElementById("altura").value = "";

}

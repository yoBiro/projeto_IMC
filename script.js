import { calculoImc, classificacaoImc } from "./functions.js";

let trs = document.querySelectorAll('tbody tr');

for (let i = 0; i < trs.length; i++) {
    let filho = trs[i].children;

    let altura = parseFloat(filho[2].textContent);
    console.log(altura);

    let peso = parseFloat(filho[3].textContent);
    console.log(peso);

    let imc = calculoImc(peso, altura);

    console.log(imc);
    filho[4].textContent = imc.toFixed(2);
    filho[5].textContent = classificacaoImc(imc);
}
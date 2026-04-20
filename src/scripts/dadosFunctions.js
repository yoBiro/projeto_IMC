import { calculoImc, classificacaoImc } from "./imcFunctions.js";

export function atualizarTabela(calculoImc, classificacaoImc) {
}
export async function inserirDados(trs) {
    let promise = await fetch('http://127.0.0.1:5500/src/json/database.json');
    let pessoas = await promise.json();
    console.log(pessoas)

    for (let i = 0; i < trs.length; i++) {
        let filho = trs[i].children
        filho = Array.from(filho)

        filho[0].textContent = pessoas[i].nome;
        filho[1].textContent = pessoas[i].idade;
        filho[2].textContent = pessoas[i].altura;
        filho[3].textContent = pessoas[i].peso;
    }

    return trs
}

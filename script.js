import { calculoImc, classificacaoImc } from "./src/scripts/imcFunctions.js";
import { inserirDados, atualizarTabela } from "./src/scripts/dadosFunctions.js";
import { cores } from "./src/scripts/coresFunctions.js";
import { filtroPesquisa } from "./src/scripts/filtroFunctions.js";

let trs = document.querySelectorAll('tbody tr');
trs = await inserirDados(trs);
filtroPesquisa();

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

cores(trs);
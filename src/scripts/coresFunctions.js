export function cores(trs) {
    trs.forEach(tr => {
        let filhos = tr.children
        let status = filhos[5]
        if(status.textContent == 'Obesidade grau III'){
            status.style.backgroundColor = 'red'
            status.style.border = 'dashed'
        } else if(status.textContent == 'Abaixo do peso'){
            status.style.backgroundColor = 'red'
            status.style.border = 'dashed'
        } else if(status.textContent == 'Peso normal'){
            status.style.backgroundColor = 'green'
        } else{ 
            status.style.backgroundColor = 'gray'
            status.style.borderColor = 'orange'
        }
    })
}
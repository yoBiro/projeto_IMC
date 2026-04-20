export function filtroPesquisa() {
    let input = document.querySelector('.entrada')
    input.addEventListener('input', () => {
        let texto = input.value.toLowerCase()

        trs.forEach(tr => {
            let classificacao = tr.children[5].textContent.toLowerCase()

            if (classificacao.includes(texto)) {
                tr.style.display = 'table-row'
            } else {
                tr.style.display = 'none'
            }
        })
    })
}
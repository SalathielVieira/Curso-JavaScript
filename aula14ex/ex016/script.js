function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length === 0 || fim.value.length === 0) {
        
        res.innerHTML = `Impossível contar! \u{1F44E}`

    } else if (passo.value.length === 0 || Number(passo.value) == 0) {
            alert(`\u{26D4}  Passo Inválido! Considerando PASSO 1`)
            passo.value = 1
            res.innerHTML = 'Contando: <br/>'

            if (Number(inicio.value) > Number(fim.value)){
                for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            } else {
                for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            }    
    }     
    else {
        res.innerHTML = 'Contando: <br/>'

        if (Number(inicio.value) > Number(fim.value)){
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                    res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
    
}
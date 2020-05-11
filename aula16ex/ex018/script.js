let num = document.querySelector('input#txtn')
let svet = document.querySelector('select#advetor')
let res = document.querySelector('div#res')
let vetor = []

function NumeroOk (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function ListaOk (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (NumeroOk(num.value) && !ListaOk(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        svet.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`\u{26D4} Valor inválido ou já encontrado na lista.`)
    }
    num.value = '' //Deixa vazia a caixa de digitação do número
    num.focus() //Coloca o foco na caixa de digitação de número após inserir ou após outra atividade
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert(`\u{26D4} Adicione valores antes de finalizar!`)
    } else {
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior){
                maior = vetor[pos]}
            if (vetor[pos] < menor){
                menor = vetor[pos]}
        }

        media = soma / total
        
        res.innerHTML = '' //Linha de comando desnecessário, como observado na minha resolução abaixo.
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}


/*  MINHA RESOLUÇÃO
FALTA A VALIDAÇÃO DE VALORES IGUAIS NO VETOR E A DEFINIÇÃO DO MAIOR VALOR NO VETOR
let vetor = []

function sortfunc(a,b){
    return (a - b)
}

function adicionar () {
    let num = document.getElementById('txtn')
    let svet = document.getElementById('advetor')
    let res = document.querySelector('div#res')

    res.innerHTML = ""

    if (num.value < 1 || num.value > 100 || num.value.length == 0 || num.value == vetor.indexOf(num.value)) {
        alert(`\u{26D4} Valor inválido ou já encontrado na lista!`)
    } else {
        let v = Number(num.value)
        vetor.push(v)
        let item = document.createElement('option')
        item.text = `Vetor ${v} adicionado.`
        item.value = `vet${item}`
        svet.appendChild(item)
    }
    vetor.sort(sortfunc)
}

function finalizar () {
    let res = document.querySelector('div#res')
    let tam = Number(vetor.length)
    let soma = 0
    let media = 0
    
    if (vetor == 0) {
        alert(`\u{26D4} Adicione valores antes de finalizar!`)
    } else {
    
    for (let v = 0; v < vetor.length; v++) {
        soma += vetor[v]
    }

    media = soma / tam

    res.innerHTML += vetor
    res.innerHTML += `<p>Ao todo temos ${tam} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${vetor[1]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${vetor[0]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
*/
//linha 4 - estando fora da função, toda vez que clicar a "memória" mantém o mesmo número sorteado até um Chute acertar (mas então é necessário trocar a frase da linha 13 para apenas "ERROU!!!")

function Chutar() {
    var numeroSecreto = parseInt(Math.random() * 11); 
    var chute = parseInt (document.getElementById("valor").value)
    var elementoResultado = document.getElementById("resultado")

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "***PARABÉNS*** Número: " + numeroSecreto
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!"
    } else {
        elementoResultado.innerHTML = "ERROU! O número secreto era " + numeroSecreto
    }
    document.getElementById("valor").value = ""
    valor.value = ''
    valor.focus()
}
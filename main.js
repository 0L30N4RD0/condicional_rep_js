function calcular() {
    var compra = Number(document.getElementById("compra").value)
    var desconto = 0

    if (compra > 500) {
        desconto = compra * 0.10
    }
    else if (compra > 100) {
        desconto = compra * 0.05
    }
    else {
        desconto = 0
    }

    var valorFinal = compra - desconto

    document.getElementById("resultado").innerText =
        "Valor da compra: R$ " + compra.toFixed(2) +
        "\nDesconto: R$ " + desconto.toFixed(2) +
        "\nValor final: R$ " + valorFinal.toFixed(2)
}

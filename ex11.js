function folhapagamentovariavel() {
    let salario = Number(prompt("Informe seu salário:"));
    let taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let liquido = salario - desconto;

    console.log("Salário:", salario);
    console.log("Taxa aplicada:", taxa * 100 + "%");
    console.log("Desconto:", desconto);
    console.log("Salário líquido:", liquido);

}
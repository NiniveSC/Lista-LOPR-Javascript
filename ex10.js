function folhapagamentosimples() {
    let nome = prompt("Informe seu nome:");
    let bruto = Number(prompt("Informe seu salário:"));

    let inss = bruto * 0.08;
    let liquido = bruto - inss;

    console.log("Nome:", nome);
    console.log("Salário bruto:", bruto);
    console.log("Desconto INSS:", inss);
    console.log("Salário líquido:", liquido);

}
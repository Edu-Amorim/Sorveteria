const vendas = [];
let quantidadeDeVendasDoDia = 0;
let somaDosValoresDoDia = 0;
let valorMedioDosPedidos = 0;

function pedido (vendaDoDia, nome, valor, sabor, data) {
    this.vendaDoDia = vendaDoDia;
    this.nome = nome;
    this.valor = valor;
    this.sabor = sabor;
    this.data = new Date().toUTCString();
}

let vender = (nome, valor, sabor) => {
    quantidadeDeVendasDoDia++;
    vendas.push(new pedido(quantidadeDeVendasDoDia, nome, valor, sabor));
    somaDosValoresDoDia += valor;
    valorMedioDosPedidos = somaDosValoresDoDia/quantidadeDeVendasDoDia;
}

let relatorio = () => {
    let vendasOrdenadasPorValor = vendas.sort(function (a, b) {return a.valor - b.valor;});
    let pedidoMaisCaro = vendasOrdenadasPorValor[vendasOrdenadasPorValor.length -1];
    let pedidoMaisBarato = vendasOrdenadasPorValor[0];
    
    console.log(`Olá, hoje nós vendemos ${quantidadeDeVendasDoDia} sorvetes, somando R$${somaDosValoresDoDia}. O preço médio de cada pedido foi ${valorMedioDosPedidos}.`);
    console.log("\nPara uma análise um pouco mais detalhada, segue outras informações:");
    console.log("O pedido mais caro foi: \n");
    console.log(pedidoMaisCaro)
    console.log("O pedido mais barato foi: \n")
    console.log(pedidoMaisBarato)
    console.log("\nAqui vão todos os pedidos do dia: \n");
    console.log(vendas.sort(function (a, b) {return a.vendaDoDia - b.vendaDoDia;}))
}

vender("Eduardo", 4, "chocolate belga");
vender("Rafael", 10, "banana");
vender("Ju", 2.50, "morango");

relatorio();
let somaDosValoresDoDia = 0;
let quantidadeDeVendasDoDia = 0;
let valorMedioDosPedidos = (_somaDosValoresDoDia, _quantidadeDeVendasDoDia) => _somaDosValoresDoDia/_quantidadeDeVendasDoDia;

const vendas = [];
const meusVendedores = [];

function meuVendedor (vendedor, rg, anoNascimento, dataContratacao, quantoVendeu = 0) {
    this.vendedor = vendedor;
    this.rg = rg;
    this.anoNascimento = anoNascimento;
    this.dataContratacao = new Date().toUTCString();
    this.quantoVendeu = quantoVendeu;
}

let contratarVendedor = (vendedor, rg, anoNascimento) => {
    meusVendedores.push(new meuVendedor(vendedor, rg, anoNascimento));
}

contratarVendedor('Lobão', 6125615, 1980)
contratarVendedor('Dimas', 4242122, 1982)
contratarVendedor('Massao', 23213123, 1990)

function pedido (vendaDoDia, vendedor, cliente, valor, sabor, data) {
    this.vendaDoDia = vendaDoDia;
    this.vendedor = vendedor;
    this.cliente = cliente;
    this.valor = valor;
    this.sabor = sabor;
    this.data = new Date().toUTCString();
}

let vender = (vendedor, cliente, valor, sabor) => {
    quantidadeDeVendasDoDia++;
    vendas.push(new pedido(quantidadeDeVendasDoDia, vendedor, cliente, valor, sabor));
    somaDosValoresDoDia += valor;

    for (let i in meusVendedores) {
        if (meusVendedores[i].vendedor === vendedor) {
            meusVendedores[i].quantoVendeu += valor;
        }
    }
}

let relatorio = () => {
    let pedidoMaisCaro = vendas.reduce((prev, current) => (prev.valor > current.valor) ? prev : current);
    let pedidoMaisBarato = vendas.reduce((prev, current) => (prev.valor < current.valor) ? prev : current);
    let melhorVendedor = meusVendedores.reduce((prev, current) => (prev.quantoVendeu > current.quantoVendeu) ? prev : current);
    console.log(`Olá, hoje nós vendemos ${quantidadeDeVendasDoDia} sorvetes, somando R$${somaDosValoresDoDia}. O preço médio de cada pedido foi ${valorMedioDosPedidos(somaDosValoresDoDia, quantidadeDeVendasDoDia)}.`);
    console.log("\nPara uma análise um pouco mais detalhada, segue outras informações:");
    console.log("\nO pedido mais caro foi:");
    console.log(pedidoMaisCaro)
    console.log("\nO pedido mais barato foi:")
    console.log(pedidoMaisBarato)
    console.log("\nO vendedor que mais vendeu foi o")
    console.log(melhorVendedor)
    console.log("\nAqui vão todos os pedidos do dia: \n");
    console.log(vendas)
}

vender("Lobão", "Eduardo", 4, "chocolate belga");
vender("Dimas", "Rafael", 10, "banana");
vender("Massao", "Ju", 2.50, "morango");
vender("Lobão", "Fabiana", 5, "chocolate meio amargo");
vender("Dimas", "Lígia", 7, "frutas vermelhas");
vender("Massao", "Papeleo", 9.50, "morango");
vender("Lobão", "João", 3.5, "chocolate belga");
vender("Dimas", "Rafael", 10, "banana");
vender("Massao", "Bruno", 12.50, "morango");

relatorio();
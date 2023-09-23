const db = require("./config/db")
const EnderecoService = require("./services/EnderecoService")
const ClienteService = require("./services/ClienteService")
const FornecedorService = require("./services/FornecedorService")
const ProdutoEstoqueService = require("./services/ProdutoEstoqueService")
const ProdutoService = require("./services/ProdutoService")
const ProdutoCategoriaService = require("./services/ProdutoCategoriaService")

const clientId = 1
const enderecoService = new EnderecoService()
// enderecoService.findAddressByClientId(clientId)

const clienteService = new ClienteService()
// clienteService.findAllClients()

const fornecedorService = new FornecedorService()

const produtoEstoqueService = new ProdutoEstoqueService()

const produtoService = new ProdutoService()

const produtoCategoriaService = new ProdutoCategoriaService()

clienteService.findByCpf('857.272.210-65', function (clienteEncontrado) {
    if (clienteEncontrado) {
        console.log('Cliente encontrado:', clienteEncontrado);
    } else {
        console.log('Cliente não encontrado');
    }
});

fornecedorService.findByCnpj('50.057.775/0001-71', function (fornecedorEncontrado) {
    if (fornecedorEncontrado) {
        console.log('Fornecedor encontrado:', fornecedorEncontrado);
    } else {
        console.log('Fornecedor não encontrado');
    }
});

produtoEstoqueService.findById('1, 2, 3, 4, 5', function (produtoEstoqueEncontrado) {
    if (produtoEstoqueEncontrado) {
        console.log('Produto Estoque encontrado:', produtoEstoqueEncontrado);
    } else {
        console.log('Produto Estoque não encontrado');
    }
});

produtoService.findById('1, 2, 3, 4, 5', function (produtoEncontrado) {
    if (produtoEncontrado) {
        console.log('Produto encontrado:', produtoEncontrado);
    } else {
        console.log('Produto não encontrado');
    }
});
/*
produtoCategoriaService.findById('1, 2, 3, 4, 5', function (produtoCategoriaEncontrado) {
    if (produtoCategoriaEncontrado) {
        console.log('Produto Categoria encontrado:', produtoCategoriaEncontrado);
    } else {
        console.log('Produto Categoria não encontrado');
    }
});
*/
db.end()
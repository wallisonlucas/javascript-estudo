import express from 'express'
import cors from 'cors'
import { cadastrarCliente, listarClientes, deletarCliente, exibirCliente, editarCliente } from './services/ClienteService.js'
import { cadastrarCategoria, listarCategorias, deletarCategoria } from './services/CategoriaServices.js'
import { cadastrarProduto, listarProdutos, deletarProduto } from './services/ProdutoService.js'
import { cadastrarFornecedor, listarFornecedores, deletarFornecedor } from "./services/FornecedorService.js"
import fileUpload from 'express-fileupload'

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

app.use(fileUpload())
app.use('/uploads', express.static('./uploads'))

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
  responce.json(result)
})

app.get('/cliente', async function (request, responce) {
  const clientes = await listarClientes()
  responce.json(clientes)
})

app.delete('/cliente/:id', async function (request, responce) {
  const id = request.params.id
  const clientes = await deletarCliente(id)
  responce.send(clientes)
})

app.get('/cliente/:id', async function (request, responce) {
  const id = request.params.id
  const cliente = await exibirCliente(id)
  responce.send(cliente)
})

app.put('/cliente/:id', async function (request, responce) {
  const id = request.params.id
  const cliente = request.body
  const result = await editarCliente(id, cliente)
  responce.json(result)
})

app.post('/fornecedor/cadastrar', async function (request, responce) {
  const fornecedor = request.body
  const result = await cadastrarFornecedor(fornecedor)
  responce.json(result)
})

app.get('/fornecedor', async function (request, responce) {
  const fornecedores = await listarFornecedores()
  responce.json(fornecedores)
})

app.delete('/fornecedor/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarFornecedor(id)
  responce.send(result)
})

app.post('/categoria/cadastrar', async function (request, responce) {
  const id = request.body
  const result = await cadastrarCategoria(id)
  responce.json(result)
})

app.get('/categoria', async function (request, responce) {
  const categorias = await listarCategorias()
  responce.json(categorias)
})

app.post('/produto/cadastrar', async function (request, responce) {
  const produto = request.body
  const { imagem } = request.files
  const result = await cadastrarProduto(produto, imagem)
  responce.json(result)
})

app.get('/produto', async function (request, responce) {
  const produtos = await listarProdutos()
  responce.json (produtos)
})

app.delete('/produto/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarProduto(id)
  responce.send(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)
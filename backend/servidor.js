import express from 'express'
import cors from 'cors'
import {cadastrarCliente} from "./services/ClienteService.js"

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

app.get('/', function (request, responce) {
  responce.send('Hello World')
})

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
    responce.json(result)
  })

console.log(`Servidor up http://localhost:${porta}`);
app.listen(porta)
import express from 'express'
import {cadastrarCliente} from "./services/ClienteService.js"
import {listarClientes} from "./services/ClienteService.js"

const router = express.Router()


router.post('/cliente/cadastrar', async function (request, responce) {
    const cliente = request.body
    const result = await cadastrarCliente(cliente)
    responce.json(result)
})

router.get('/cliente', async function (request, responce) {
    const clientes = await listarClientes()
    responce.json(clientes)
})

export default router
<template>
  <h3>Cadastro Loja Frango</h3>
  <p>
    {{ notificacao }}
  </p>
  <label>Nome</label><br>
  <input name="nome" v-model="cliente.nome"/><br>

  <label>E-mail</label><br>
  <input name="email" v-model="cliente.email"/><br>

  <label>CPF</label><br>
  <input name="cpf" v-model="cliente.cpf"/><br>

  <label>CEP</label><br>
  <input name="cep" v-model="cliente.cep" v-on:blur="buscarCep()"/><br>

  <label>Endereco</label><br>
  <input name="endereco" v-model="cliente.endereco"/><br>

  <label>UF</label><br>
  <input name="uf" v-model="cliente.uf"/><br>

  <label>Complemento</label><br>
  <input name="complemento" v-model="cliente.complemento"/><br>

  <button @click="cadastrar()">Cadastrar</button>
</template>

<script>

import axios from 'axios'

// https://brasilapi.com.br/api/cep/v1
const brasilApi = axios.create({
    baseURL: "https://brasilapi.com.br/api",
    headers: {
        'Content-Type': 'application/json'
    }
})
const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
  name: "CadastrarCliente",
  data(){
    return {
      cliente: {
      nome: null,
      email: null,
      cpf: null,
      cep: null,
      endereco: null,
      uf: null,
      complemento: null
    },
      notificacao: null
    }
  },
  methods: {
    async cadastrar(){
      const responce = await minhaApi.post("/cliente/cadastrar", this.cliente)
      this.notificacao = responce.data
      console.log(responce.data);
    },
    async buscarCep(){
        console.log(this.cliente.cep);
        const responce = await brasilApi.get(`/cep/v1/${this.cliente.cep}`)
        console.log(responce.data);

        this.cliente.uf = responce.data.state

        const rua = responce.data.street == null ? "" : responce.data.street + ","

        const bairro = responce.data.neighborhood == null ? "" : responce.data.neighborhood + ","

        this.cliente.endereco = `${rua} ${bairro} ${responce.data.city}`

        
       } 
  }
}
</script>
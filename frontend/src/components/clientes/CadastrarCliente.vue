<template>
  <h3>Cadastro Loja Frango</h3>
  <p>
    {{ notificacao }}
  </p>
  <label>Nome</label>
  <input name="nome" v-model="cliente.nome"/>

  <label>E-mail</label>
  <input name="email" v-model="cliente.email"/>

  <label>CPF</label>
  <input name="cpf" v-model="cliente.cpf"/>

  <label>CEP</label>
  <input name="cep" v-model="cliente.cep" v-on:blur="buscarCep()"/>

  <label>Endereco</label>
  <input name="endereco" v-model="cliente.endereco"/>

  <label>UF</label>
  <input name="uf" v-model="cliente.uf"/>

  <label>Complemento</label>
  <input name="complemento" v-model="cliente.complemento"/>

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
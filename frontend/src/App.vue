<template>
  <div class="formularioClientes">
    <CadastrarCliente />
  </div>

  <div class="listagemClientes">
    <ListarCliente />
  </div>

  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>

</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
</script>

<style>
html {
  font-family: Arial;
}

.formularioClientes,
.listagemClientes {
  padding: 10px;
  border: 1px solid rgb(108, 106, 106);
  float: left;
}

.formularioClientes {
  width: 25%;
  background: #efeeee;
}

.formularioClientes input {
  width: 80%;
  display: block;
  margin-right: 5px;
  text-transform: uppercase;
}

.formularioClientes label {
  width: 80%;
  display: block;
  margin-right: 5px;
}

.formularioClientes button {
  background-color: aqua;
  border: none;
  float: right;
  width: 92px;
  height: 26px;
}

.listagemClientes {
  width: 50%;
  margin-left: 10px;
}
</style>
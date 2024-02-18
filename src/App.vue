<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

const founds = ref(10000)
const produtos = ref([
  {
    nome: 'Farm',
    quantidade: 10,
    preco: 99,
    desejaComprar: 1,
    imagem: '../src/assets/lorem_ipsum.jpg',
    id: 1
  },
  {
    nome: 'Have',
    quantidade: 30,
    preco: 24,
    desejaComprar: 1,
    imagem: '../src/assets/lorem_ipsum.jpg',
    id: 2
  },
  {
    nome: 'Leader',
    quantidade: 32,
    preco: 32,
    desejaComprar: 1,
    imagem: '../src/assets/lorem_ipsum.jpg',
    id: 3
  },
  {
    nome: 'Went',
    quantidade: 53,
    preco: 53,
    desejaComprar: 1,
    imagem: '../src/assets/lorem_ipsum.jpg',
    id: 4
  }
])

function maxAction(id) {
  const produto = produtos.value.find(produto => produto.id == id)
  
  produto.desejaComprar = produto.quantidade
}

function buyAction(parameterProduto) {
  if(parameterProduto.quantidade == 0) {
    alert("Produto esgotado!")
  } else if(parameterProduto.desejaComprar > parameterProduto.quantidade || parameterProduto.desejaComprar < 0) {
    alert("Quantidade inválida!")
  }else {
    const produto = produtos.value.find(produto => produto.id == parameterProduto.id)

    founds.value = founds.value - parameterProduto.desejaComprar * parameterProduto.preco
    produto.quantidade = produto.quantidade - parameterProduto.desejaComprar
    produto.desejaComprar = 1
  }
}
</script>

<template>
  <Navbar :founds="founds" />
  <RouterView :produtos="produtos"
  @maxAction="maxAction" 
  @buyAction="buyAction"/>
</template>
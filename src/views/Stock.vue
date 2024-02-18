<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['produtos'])

const produtos = ref(props.produtos)
</script>

<template>
  <main class="container">
    <h3 class="mt-5 mb-3">Stock</h3>
    <div class="row">
      <div class="col-md-6 mb-4" v-for="produto in produtos" :key="produto.nome">
        <div id="grade">
          <div class="p-4 gradeNome">
            {{ produto.nome }}
            <span class="text-bg-success p-2 rounded-1 ms-1"> ${{ produto.preco }} </span>
          </div>
          <div class="row p-2">
            <div class="col-6 ps-4 gradeQuantidade">Quantidade: {{ produto.quantidade }}</div>
            <div class="col-6">Preço: ${{ produto.preco }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#grade {
  border: 1px solid #ddd;
  font-size: large;
}

.gradeNome {
  border-bottom: 1px solid #ddd;
}

.gradeQuantidade {
  border-right: 1px solid #ddd;
}
</style>

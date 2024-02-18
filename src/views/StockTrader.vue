<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps(['produtos'])

const produtos = ref(props.produtos)

function directStore(id) {
  router.push(`StockTrader/${id}`)
}
</script>

<template>
  <main class="container">
    <h3 class="mt-5 mb-3">Stock</h3>
    <div class="row">
      <div class="col-md-6 mb-4" v-for="produto in produtos" :key="produto.nome">
        <div id="grade">
          <div class="p-4 gradeNome" @click="directStore(produto.id)">
            {{ produto.nome }}
            <span class="text-bg-success p-2 rounded-1 ms-1"> ${{ produto.preco }} </span>
          </div>
          <div class="row p-2">
            <div class="col-4 ps-4">
              <input type="number" v-model="produto.desejaComprar" class="form-control">
            </div>
            <div class="col-3 col-md-4 gradeColMeio">${{ produto.preco }}</div>
            <div class="col-5 col-md-4 gradeButtons">
              <button class="btn" @click="$emit('maxAction', produto.id)">Max</button>
              <button class="btn btn-primary" @click="$emit('buyAction', produto)">Buy</button>
            </div>
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
  cursor: pointer;
}

.gradeColMeio {
  border-left: 1px solid #DDD;
  border-right: 1px solid #DDD;
  display: grid;
  place-items: center;
}

.gradeButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

button {
  border: 1px solid #DDD;
}
</style>
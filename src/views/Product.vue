<script setup>
import { ref, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['produtos'])

const route = useRoute()
const router = useRouter()

if(route.params.id > props.produtos.length) {
    router.push('/Error')
}

const produto = ref(props.produtos.find(produto => produto.id == route.params.id))
</script>

<template>
    <main class="container mt-5">
        <h3 class="mb-3">Product</h3>
        <div class="alinhar mb-5 d-grid d-md-block">
            <div class="row">
                <div class="gradeImage col-md-6 d-grid">
                    <img :src="produto.imagem" alt="ProductImage">
                </div>
                <div class="col-md-6">
                    <h4 class="mt-md-5 mt-4 mb-4 ms-4">{{ produto.nome }}</h4>
                    <div>
                        <span class="text-bg-success p-2 rounded-1 ms-4">
                            ${{ produto.preco }}
                        </span>
                    </div>
                    <p class="ms-4 mt-5">Quantidade: {{ produto.quantidade }}</p>
                    <div class="comprar d-flex mb-5">
                        <input type="number" class="form-control w-50 ms-4"
                        v-model="produto.desejaComprar">
                        <div class="me-md-4 d-flex gap-3">
                            <button class="btn" @click="$emit('maxAction', produto.id)">Max</button>
                            <button class="btn btn-primary"
                            @click="$emit('buyAction', produto)">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.alinhar {
    place-items: center;
}

.row{
    border: 1px solid #DDD;
    width: 99vw;
}

.gradeImage {
    height: 45vh;
    place-items: center;
    border-bottom: 1px solid #DDD;
}

img {
    height: 40vh;
}

.comprar {
    justify-content: space-between;
    margin-top: 4rem;
}

button {
    border: 1px solid #DDD;
}

@media (min-width: 769px){
    .row {
        width: auto;
    }
    .gradeImage {
        border: 0;
        border-right: 1px solid #DDD;
    }

    .comprar {
        margin-top: 8rem;
    }
}
</style>
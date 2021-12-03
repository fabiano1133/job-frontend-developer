<template>
  <section>
    <div v-if="products" class="produto">
      <ul class="fotos" v-if="products.image">
        <!-- <li v-for="(image, index) in products.image" :key="index"> -->
        <img :src="products.image" alt="" /><img />
        <!-- </li> -->
      </ul>
      <div class="info">
        <h1 class="titulo">{{ products.title }}</h1>
        <p class="descricao">Descrição: {{ products.description }}</p>
        <p class="preco">{{ products.price | numeroPreco }}</p>
        <button class="btn-atendimento" @click="addToCart()">Comprar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { fakeStoreApi } from "../services/index.js";

export default {
  name: "Products",
  props: ["id"],
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProducts() {
      fakeStoreApi.get(`/products/${this.id}`).then((r) => {
        this.products = r.data;
        console.log(r);
      });
    },
    addToCart() {
      this.$store.dispatch("addProductCart", {
        produtc: this.produtc,
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style src="./style-product-single.scss" lang="scss" scoped>
</style>
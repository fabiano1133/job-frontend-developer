<template>
  <section class="products-container">
    <div v-if="products" class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'products', params: { id: product.id } }">
          <img :src="product.image" alt="" /><img />
          <h2 class="title">{{ product.title }}</h2>
          <p class="price">{{ product.price | numeroPreco }}</p>
          <p class="description">{{ product.description }}</p>
          <p class="category">Categoria: {{ product.category }}</p>
        </router-link>
        <button class="btn-atendimento">Add</button>
      </div>
    </div>
  </section>
</template>

<script>
import { fakeStoreApi } from "../services/index.js";

export default {
  name: "ListProducts",
  components: {},
  data() {
    return {
      products: null,
    };
  },

  methods: {
    getProducts() {
      fakeStoreApi.get("/products/category/jewelery").then((r) => {
        this.products = r.data;
      });
    },
  },

  watch: {
    url() {
      this.getProducts();
    },
  },

  created() {
    this.getProducts();
  },
};
</script>

<style src="./style-show-products.scss" lang="scss" scoped>
</style>
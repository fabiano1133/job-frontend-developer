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
        <button class="btn-atendimento" @click="addItem()">Add</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductList",
  components: {},
  data() {
    return {
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$router.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      console.log(queryString);

      return "products?_limit=10" + queryString;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addItem() {
      this.cart.push(this.$store.state.products);
    },
  },

  watch: {
    url() {
      this.getProducts();
    },
  },

  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style src="./style-show-products.scss" lang="scss" scoped>
</style>
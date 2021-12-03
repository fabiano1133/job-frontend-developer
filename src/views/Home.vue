<template>
  <section>
    <div class="title">
      <h1>Nossos Produtos</h1>
    </div>
    <ProductList />
  </section>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
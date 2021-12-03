<template>
  <section>
    <div class="title">
      <h1>Nossos Produtos</h1>
    </div>
    <ListProducts />
  </section>
</template>

<script>
import ListProducts from "../components/ListProducts.vue";

export default {
  name: "Home",
  components: {
    ListProducts,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
<template>
  <section>
    <!-- <img src="../../public/img/bkg-eletronics.png" alt="background site" /> -->
    <div class="title">
      <h1>Eletrônicos</h1>
    </div>
    <ListCategories />
  </section>
</template>

<script>
import ListCategories from "../components/ListCategoriesElectronics.vue";

export default {
  name: "Electronics",
  components: {
    ListCategories,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
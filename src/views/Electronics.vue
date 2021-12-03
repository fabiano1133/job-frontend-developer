<template>
  <section>
    <!-- <img src="../../public/img/bkg-eletronics.png" alt="background site" /> -->
    <div class="title">
      <h1>Eletrônicos</h1>
    </div>
    <ListCategoriesElectronics />
  </section>
</template>

<script>
import ListCategoriesElectronics from "../components/ListCategoriesElectronics.vue";

export default {
  name: "Electronics",
  components: {
    ListCategoriesElectronics,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
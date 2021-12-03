<template>
  <section>
    <!-- <img src="../../public/img/bkg-eletronics.png" alt="background site" /> -->
    <div class="title">
      <h1>Roupas Masculinas</h1>
    </div>
    <ListCategoriesMensClothing />
  </section>
</template>

<script>
import ListCategoriesMensClothing from "../components/ListCategoriesMensClothing.vue";

export default {
  name: "MensClothing",
  components: {
    ListCategoriesMensClothing,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
<template>
  <section>
    <!-- <img src="../../public/img/bkg-eletronics.png" alt="background site" /> -->
    <div class="title">
      <h1>Roupas Femininas</h1>
    </div>
    <ListCategoriesWomensClothing />
  </section>
</template>

<script>
import ListCategoriesWomensClothing from "../components/ListCategoriesWomensClothing.vue";

export default {
  name: "Eletronics",
  components: {
    ListCategoriesWomensClothing,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
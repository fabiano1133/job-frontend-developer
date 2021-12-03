<template>
  <section>
    <!-- <img src="../../public/img/bkg-eletronics.png" alt="background site" /> -->
    <div class="title">
      <h1>Jóias</h1>
    </div>
    <ListCategoriesJewelery />
  </section>
</template>

<script>
import ListCategoriesJewelery from "../components/ListCategoriesJewelery.vue";

export default {
  name: "Jewelery",
  components: {
    ListCategoriesJewelery,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>
<template>
  <Slide right>
    <router-link class="menu" to="/">Home</router-link>
    <router-link class="menu" to="/electronics">Eletrônicos</router-link>
    <router-link class="menu" to="/jewelery">Jóias</router-link>
    <router-link class="menu" to="/mensclothing">Roupas Masculinas</router-link>
    <router-link class="menu" to="/womensclothing"
      >Roupas Femininas</router-link
    >
    <input name="busca" type="text" id="busca" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="buscarProdutos"
    />
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "MenuMobile",
  components: {
    Slide,
  },
};
</script>

<style scoped>
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.8em;
  color: #fff;
}
</style>
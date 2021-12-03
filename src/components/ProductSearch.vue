<template>
  <form>
    <input name="busca" type="text" id="busca" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  name: "BuscarProdutos",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

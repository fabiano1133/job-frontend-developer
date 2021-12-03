<template>
  <div class="cart">
    {{ this.$store.state.cart }}
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style>
.cart {
  height: 50px;
  width: 50px;
  background-color: orange;
  color: #000;
}
</style>
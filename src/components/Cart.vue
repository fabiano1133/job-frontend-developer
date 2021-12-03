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

@media screen and (max-width:500px) {
  .cart {
    margin: 0 auto;
  }
}

.cart {
  background-image: url("../../public/img/iconmonstr-shopping-cart-3.svg");
  background-repeat: no-repeat;
  height:50px;
  width:50px;
  color: #fff;
  cursor: pointer;
}
</style>
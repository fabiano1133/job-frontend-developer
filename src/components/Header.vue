<template>
  <header>
    <MobileMenu v-if="mobileView" />
    <nav>
      <router-link to="/" class="logo">
        <img src="../../public/img/logo2.png" alt="Logo site" />
      </router-link>

      <div id="menu" v-if="!mobileView">
        <router-link class="menu" to="/">Home</router-link>
        <router-link class="menu" to="/electronics">Eletrônicos</router-link>
        <router-link class="menu" to="/jewelery">Jóias</router-link>
        <router-link class="menu" to="/mensclothing"
          >Roupas Masculinas</router-link
        >
        <router-link class="menu" to="/womensclothing"
          >Roupas Femininas</router-link
        >
      </div>
      <Cart />
      <!-- <span v-if="!mobileView" class="carrinho"> Carrinho: {{$store.state.cart}}</span> -->
      <ProductSearch v-if="!mobileView" />
    </nav>
  </header>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";
import ProductSearch from "../components/ProductSearch.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "Header",
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },

  components: {
    MobileMenu,
    ProductSearch,
    Cart,
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
  },
};
</script>

<style scoped>
.logo {
  padding: 10px;
}

.logo img {
  width: 90px;
}
header {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
}
.carrinho {
  color: #000;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

@media screen and (max-width: 500px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  }
}

.toggle {
  width: 40px;
}

#menuMobile {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
</style>

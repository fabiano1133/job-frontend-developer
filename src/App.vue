<template>
  <div id="app">
  <Header/>
    <main>
      <router-view />
    </main>
    <Footer/>
    </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Header, Footer,
  },
  data() {
    return {
      
    }
  }
}

</script>



<style>
   * {
    box-sizing: border-box;
  }

  body, ul, li, h1, h2, p {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 35%, rgba(0,212,255,1) 100%);
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .menu {
    color: #000;
    margin-left: 60px;
    font-weight: bold;
  }

  .menu:hover {
    color: #87f;
    transition: 0.2s;
  }

  .btn-atendimento {
    display: block;
    padding: 10px 30px;
    background-color: #87f;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30,60,90,0.2);
    transition: all 0.2s;
    border: none;
    cursor: pointer;
  }

  .btn-atendimento:hover {
    background-color: #65d;
    transform: scale(1.1);
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  .open {
    transform: translateX(300px)
  }
</style>

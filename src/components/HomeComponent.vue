<template>
  <div class="home">
    <NavBar />
    <div class="border">
      <span></span>
    </div>
    <section class="intro">
      <IntroComponent />
    </section>
    <section class="products">
      <ProductsComponent />
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </div>
</template>
<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import IntroComponent from "../components/HomeComponents/IntroComponent.vue";
import ProductsComponent from "../components/HomeComponents/ProductsComponent.vue";
import NavBar from "../components/NavBar.vue";
</script>
<style lang="scss">
@import "../sass/global.scss";
.home {
  display: flex;
  flex-direction: column;
  .border {
    background-color: $black-shade-1;
    position: relative;
    z-index: 1;
    span {
      opacity: 0.2;
      height: 1px;
      background-color: $white;
      margin: 0 100px;
      display: flex;
    }
  }
  section.intro,
  section.footer {
    background-color: $black-shade-1;
    padding: 0 100px;
  }

  section.products {
    padding: 0 100px;
  }
}
</style>

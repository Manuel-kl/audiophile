<template>
  <div class="home">
    <NavBar />

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

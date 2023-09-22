<template>
  <nav class="navbar">
    <div class="left">
      <h1>audiophile</h1>
    </div>
    <div class="center">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/headphones">Headphones</router-link>
        </li>
        <li>
          <router-link to="/speakers">Speakers</router-link>
        </li>
        <li>
          <router-link to="/earphones">Earphones</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>
          <router-link to="">
            <cart-svg />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="border">
    <span></span>
  </div>
</template>
<script setup>
import CartSvg from "@/assets/svgs/CartSvg.vue";
</script>
<style lang="scss" scoped>
@import "../sass/global.scss";

nav.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 35px 100px;
  background-color: $black-shade-2;

  .left {
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: $white;
    }
  }

  .center {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      gap: 34px;

      li {
        font-size: 0.875rem;
        font-weight: 700;
        color: $white;
        text-transform: uppercase;

        a {
          text-decoration: none;
          color: $white;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
        cursor: pointer;
          z-index: 1;
        }
      }
    }
  }
}
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
</style>
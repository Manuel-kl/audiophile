<template>
  <div class="product-links">
    <div class="product">
      <img src="../../assets/images/headphones-intro.png" alt="headphones" />
      <OvalShadow class="shadow" />
      <div class="product-info">
        <h2>HEADPHONES</h2>
        <router-link to="/headphones">
          <button>
            SHOP
            <GreaterSign />
          </button>
        </router-link>
      </div>
    </div>
    <div class="product">
      <img src="../../assets/images/speaker-intro.png" alt="speakers" />
      <OvalShadow class="shadow" />
      <div class="product-info">
        <h2>SPEAKERS</h2>
        <router-link to="/speakers">
          <button>
            SHOP
            <GreaterSign />
          </button>
        </router-link>
      </div>
    </div>
    <div class="product">
      <img src="../../assets/images/earphones-intro.png" alt="earphones" />
      <OvalShadow class="shadow" />
      <div class="product-info">
        <h2>EARPHONES</h2>
        <router-link to="/earphones">
          <button>
            SHOP
            <GreaterSign />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import GreaterSign from "@/assets/svgs/GreaterSign.vue";
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
div.product-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 350px;
    height: 204px;
    flex-shrink: 0;
    background: $light-gray;
    position: relative;

    img {
      position: absolute;
      top: -80px;
    }

    .shadow {
      position: absolute;
      top: 30px;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      gap: 20px;

      h2 {
        color: $black;
        text-align: center;
        font-family: $manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }
      a {
        text-decoration: none;
        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: $black;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          gap: 7px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<template>
  <div class="products-links">
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
.products-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50;
    gap: 100px;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    max-width: 350px;
    height: 204px;
    flex-shrink: 0;
    background: $light-gray;
    position: relative;
    flex: 1;

    @media (max-width: 768px) {
      width: 100%;
      background: $light-gray;
      display: flex;
      flex-direction: column;
      padding-bottom: 40px;
    }

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
      margin-top: 100px;
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
        }

        &:hover {
          button {
            color: $primary-color;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
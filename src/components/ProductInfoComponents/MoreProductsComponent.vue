<template>
  <div class="more-products">
    <h2>YOU MAY ALSO LIKE</h2>
    <div class="first">
      <div class="product">
        <div class="img">
          <img src="../../assets/images/headphones-more-1.png" alt="" />
        </div>
        <div class="info">
          <h3>XX99 MARK I</h3>
          <router-link to="/xx99-mark-one-headphones">
            SEE PRODUCT
          </router-link>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <img src="../../assets/images/XX59-more.png" alt="" />
        </div>
        <div class="info">
          <h3>XX59</h3>
          <router-link to="/xx59-headphones"> SEE PRODUCT </router-link>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <img src="../../assets/images/speaker-more-1.png" alt="" />
        </div>
        <div class="info">
          <h3>ZX9 SPEAKER</h3>
          <router-link to="/zx9-speaker"> SEE PRODUCT </router-link>
        </div>
      </div>
    </div>
    <div class="other-links">
      <ProductLinksComponent />
    </div>
  </div>
</template>
<script setup>
import ProductLinksComponent from "../Banners/ProductLinksComponent.vue";
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.more-products {
  display: flex;
  flex-direction: column;
  h2 {
    color: $black;
    font-family: $manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.143px;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 50px;

    @media (max-width: 768px) {
      font-size: 24px;
      padding-bottom: 25px;
    }

    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
  .first {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 100px;
    }
    .img {
      border-radius: 8px;
      background: $light-gray;
      flex-shrink: 0;
      height: 318px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        height: 240px;
      }

      img {
        object-fit: cover;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      padding-top: 25px;

      h3 {
        color: $black;
        text-align: center;
        font-family: $manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.714px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (max-width: 375px) {
          font-size: 18px;
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 160px;
        height: 48px;
        flex-shrink: 0;
        background-color: $primary-color;
        color: $white;
        font-family: $manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;

        &:hover {
          background-color: $secondary-color;
        }

        @media (max-width: 768px) {
          font-size: 12px;
        }

        @media (max-width: 375px) {
          font-size: 11px;
        }
      }
    }
  }
  .other-links {
    padding-top: 150px;
  }
}
</style>
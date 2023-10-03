<template>
  <div class="intro">
    <div class="left">
      <h4>NEW PRODUCT</h4>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <router-link to="/xx99-mark-one-headphones">
        <button>SEE PRODUCT</button>
      </router-link>
    </div>
    <div class="right">
      <img src="../../assets/images/intro-headphones.png" alt="headphones" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 50px 0;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 20px;
    position: relative;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    h4 {
      opacity: 0.4964;
      color: $white;
      font-family: $manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 10px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        letter-spacing: 5px;
      }
    }

    h1 {
      color: $white;
      font-family: $manrope;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 56px;
      }

      @media (max-width: 475px) {
        font-size: 36px;
      }
    }

    p {
      opacity: 0.75;
      color: $white;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      width: 349px;

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 475px) {
        font-size: 14px;
      }
    }

    a {
      background: $primary-color;
      width: 160px;
      display: flex;
      justify-content: center;
      text-decoration: none;

      button {
        background: $primary-color;
        padding: 15px;
        flex-shrink: 0;
        border: none;
        color: $white;
        font-family: $manrope;
        cursor: pointer;
        color: #fff;
        font-family: $manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      &:hover {
        background: $secondary-color;

        button {
          background: $secondary-color;
        }
      }
    }
  }

  .right {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
    }

    img {
      height: 640px;
      flex-shrink: 0;
      position: absolute;
      top: 0;
      right: 0;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        margin: auto;
      }
    }
  }
}
</style>
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
  padding: 100px 0 200px;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 50%;

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
    img {
      width: 708.8px;
      flex-shrink: 0;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
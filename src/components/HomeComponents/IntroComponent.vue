<template>
  <div class="intro">
    <div class="left">
      <h4>NEW PRODUCT</h4>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button>SEE PRODUCT</button>
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

    button {
      background: $primary-color;
      width: 160px;
      height: 48px;
      flex-shrink: 0;
      border: none;
      color: $white;
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
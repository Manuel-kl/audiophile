<template>
  <div class="description">
    <div class="left">
      <h1>
        <br />
        Bringing you the <span> best </span> audio gear
      </h1>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="right">
      <img src="../../assets/images/audio-gear.png" alt="" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.description {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 100px 100px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      color: $black;
      max-width: 445px;
      font-family: $manrope;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      line-height: 44px;
      letter-spacing: 1.429px;
      text-transform: uppercase;

      span {
        color: $primary-color;
      }
    }

    p {
      max-width: 445px;
      color: $black;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
    }
  }

  .right {
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 8px;
    }
  }
}
</style>
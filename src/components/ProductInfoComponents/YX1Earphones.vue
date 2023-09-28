<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <p @click="goBack" class="back-link">Go Back</p>
    </section>
    <section class="intro">
      <div class="img">
        <img
          src="../../assets/images/yx1-earphones-s.png"
          alt="yx1-earphones"
        />
      </div>
      <div class="info">
        <h1>
          YX1 <br />
          EARPHONES
        </h1>
        <p class="description">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <p class="price">$ 599</p>
        <div class="add-cart">
          <div class="input">
            <span>-</span>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value="1"
              min="1"
            />
            <span>+</span>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="left">
        <h2>FEATURES</h2>
        <p>
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With improved ergonomics designed for full day wearing,
          these revolutionary earphones have been finely crafted to provide you
          with the perfect fit, delivering complete comfort all day long while
          enjoying exceptional noise isolation and truly immersive sound.
          <br />
          <br />
          The YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and voice assistants built into both earbuds. The new
          7-hour battery life can be extended up to 28 hours with the charging
          case, giving you uninterrupted play time. Exquisite craftsmanship with
          a splash resistant design now available in an all new white and grey
          color scheme as well as the popular classic black.
        </p>
      </div>
      <div class="right">
        <h2>IN THE BOX</h2>
        <p><span>2X</span> Earphone Unit</p>
        <p><span>6X</span> Multi-size Earplugs</p>
        <p><span>1X</span> User Manual</p>
        <p><span>1X</span> USB-C Charging Cable</p>
        <p><span>1X</span> Travel Pouch</p>
      </div>
    </section>
    <section class="images">
      <div class="left">
        <img
          src="../../assets/images/yx1-earphones-1.png"
          alt="yx1-earphones"
        />
        <img
          src="../../assets/images/yx1-earphones-2.png"
          alt="yx1-earphones"
        />
      </div>
      <div class="right">
        <img
          src="../../assets/images/yx1-earphones-3.png"
          alt="yx1-earphones"
        />
      </div>
    </section>
    <section class="recommendations">
      <more-products-component />
    </section>
    <section class="more-info">
      <audio-phile-description />
    </section>
    <section class="footer">
      <footer-component />
    </section>
  </div>
</template>
        <script setup>
import NavBar from "../NavBar.vue";
import FooterComponent from "../FooterComponent.vue";
import MoreProductsComponent from "./MoreProductsComponent.vue";
import AudioPhileDescription from "../Banners/AudioPhileDescription.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";
.product-info {
  display: flex;
  flex-direction: column;

  section.back {
    padding: 50px 100px;

    .back-link {
      opacity: 0.5;
      color: $black;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      text-decoration: none;
      cursor: pointer;
      width: fit-content;

      &:hover {
        color: $primary-color;
      }
    }
  }

  section.intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;
    flex-wrap: wrap;

    .img {
      border-radius: 8px;
      background: $light-gray;
      width: 540px;
      height: 560px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 45%;

      img {
        flex-shrink: 0;
        margin: auto;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex-basis: 45%;
      gap: 24px;

      h2 {
        color: $primary-color;
        font-family: $manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 10px;
        text-transform: uppercase;
      }

      h1 {
        color: $black;
        font-family: $manrope;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.429px;
        text-transform: uppercase;
      }

      p.description {
        max-width: 445px;
        opacity: 0.5;
        color: $black;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
      p.price {
        color: $black;
        font-family: $manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }
      .add-cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        .input {
          width: 120px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background: $light-gray;

          span {
            opacity: 0.25;
            width: 16px;
            color: $black;
            text-align: center;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1px;
          }
          input {
            color: $black;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1px;
            text-align: center;
            width: 30px;
            padding: 8px;
            background: $light-gray;
            border: none;
            outline: none;
          }
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
        button {
          width: 160px;
          height: 48px;
          flex-shrink: 0;
          color: $white;
          text-align: center;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          background-color: $primary-color;
          cursor: pointer;
        }
      }
    }
  }
  section.features {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
    flex-wrap: wrap;
    gap: 24px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      flex-basis: 45%;

      h2 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;
      }
      p {
        opacity: 0.5;
        max-width: 635px;
        color: $black;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 45%;

      h2 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;
        margin-bottom: 32px;
      }
      p {
        color: $black;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;

        span {
          color: $primary-color;
          font-family: $manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          margin-right: 8px;
        }
      }
    }
  }
  section.images {
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    flex-wrap: wrap;
    gap: 24px;
    height: 600px;
    margin: auto;
    .left {
      display: flex;
      flex-direction: column;
      flex-direction: column;
      gap: 24px;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .right {
      img {
        object-fit: cover;
        border-radius: 8px;
        width: 100%;
      }
    }
  }
  section.recommendations {
    padding: 100px;
  }
  section.footer {
    background-color: $black;
    padding: 0 100px;
  }
}
</style>
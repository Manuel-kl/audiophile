<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <p @click="goBack" class="back-link">Go Back</p>
    </section>
    <section class="intro">
      <div class="img">
        <img src="../../assets/images/xx99.png" alt="xx99-headphones" />
      </div>
      <div class="info">
        <h2>NEW PRODUCT</h2>
        <h1>
          XX99 Mark II <br />
          Headphones
        </h1>
        <p class="description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p class="price">$ 2,999</p>
        <div class="add-cart">
          <div class="quantity">
            <button @click="decreaseQuantity">-</button>
            <p>{{ quantity }}</p>
            <button @click="increaseQuantity">+</button>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="left">
        <h2>FEATURES</h2>
        <p>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
          <br />
          <br />
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5.0 compliant connectivity and 17
          hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div class="right">
        <h2>IN THE BOX</h2>
        <p><span>1X</span> Headphone Unit</p>
        <p><span>2X</span> Replacement Earcups</p>
        <p><span>1X</span> User Manual</p>
        <p><span>1X</span> 3.5mm 5m Audio Cable</p>
        <p><span>1X</span> Travel Bag</p>
      </div>
    </section>
    <section class="images">
      <div class="left">
        <img src="../../assets/images/xx99-one.png" alt="xx99-headphones" />
        <img src="../../assets/images/xx99-two.png" alt="xx99-headphones" />
      </div>
      <div class="right">
        <img src="../../assets/images/xx99-three.png" alt="xx99-headphones" />
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
import { ref } from "vue";
const quantity = ref(1);

const increaseQuantity = () => {
  return quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value != 0 || !quantity.value < 0) {
    return quantity.value--;
  }
};

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

    @media (max-width: 1024px) {
      padding: 25px 50px;
    }

    @media (max-width: 375px) {
      padding: 24px;
    }

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 100px;
    gap: 50px;

    @media (max-width: 1024px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      gap: 25px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 375px) {
      padding: 0 24px;
    }

    .img {
      border-radius: 8px;
      background: $light-gray;
      max-width: 540px;
      height: 560px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }

      img {
        width: 349.238px;
        height: 386px;
        flex-shrink: 0;
        margin: auto;

        @media (max-width: 768px) {
          width: 181px;
          height: 201px;
          flex-shrink: 0;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 24px;

      @media (max-width: 768px) {
        gap: 16px;
      }

      h2 {
        color: $primary-color;
        font-family: $manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 10px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 12px;
          letter-spacing: 8px;
        }
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

        @media (max-width: 768px) {
          font-size: 32px;
          line-height: 36px;
          letter-spacing: 1.143px;
        }

        @media (max-width: 375px) {
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.857px;
        }
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

        @media (max-width: 768px) {
          font-size: 13px;
          line-height: 22px;
        }
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

        @media (max-width: 768px) {
          font-size: 15px;
          letter-spacing: 1.071px;
        }
      }
      .add-cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        @media (max-width: 768px) {
          gap: 8px;
        }

        @media (max-width: 576px) {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }

        .quantity {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: $light-gray;
          height: 42px;

          @media (max-width: 425px) {
            gap: 8px;
          }

          button {
            width: 42px;
            height: 42px;
            border-radius: 8px;
            background: $light-gray;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $black;
            font-family: $manrope;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            opacity: 0.25;
            line-height: 25px;

            &:hover {
              opacity: 1;
              background: $light-gray;
            }
          }

          p {
            color: $black;
            font-family: $manrope;
            font-style: normal;
            font-weight: 700;
            line-height: 35px;
            text-align: center;
            font-size: 13px;
            letter-spacing: 1px;
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

          &:hover {
            background-color: $secondary-color;
          }

          @media (max-width: 768px) {
            width: 120px;
            height: 40px;
            font-size: 11px;
          }
        }
      }
    }
  }
  section.features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 100px;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 1024px) {
      padding: 100px 50px 50px 50px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    @media (max-width: 576px) {
      padding: 100px 24px 50px 24px;
    }

    .left {
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (max-width: 768px) {
        gap: 16px;
      }

      h2 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 25px;
          line-height: 28px;
          letter-spacing: 0.893px;
        }
      }
      p {
        opacity: 0.5;
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

        @media (max-width: 768px) {
          font-size: 25px;
          line-height: 28px;
          letter-spacing: 0.893px;
          margin-bottom: 16px;
        }
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

          @media (max-width: 768px) {
            font-size: 13px;
            line-height: 22px;
          }
        }

        @media (max-width: 768px) {
          font-size: 13px;
          line-height: 22px;
        }
      }
    }
  }
  section.images {
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    gap: 24px;
    margin: auto;

    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 0 24px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
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
    padding: 50px 100px;

    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 50px 24px;
    }

    @media (max-width: 375px) {
      padding: 24px;
    }
  }
  section.more-info {
    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 50px 24px;
    }

    @media (max-width: 375px) {
      padding: 24px;
    }
  }
  section.footer {
    background-color: $black;
    padding: 0 100px;

    @media (max-width: 1024px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      padding: 0 24px;
    }

    @media (max-width: 375px) {
      padding: 0 24px;
    }
  }
}
</style>
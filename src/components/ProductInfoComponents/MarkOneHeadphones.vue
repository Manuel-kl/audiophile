<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <p @click="goBack" class="back-link">Go Back</p>
    </section>
    <section class="intro">
      <div class="img">
        <img
          src="../../assets/images/xx99-mark-one.png"
          alt="xx99-mark-one-headphones"
        />
      </div>
      <div class="info">
        <h2>NEW PRODUCT</h2>
        <h1>
          XX99 Mark I <br />
          Headphones
        </h1>
        <p class="description">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <p class="price">$ 1,750</p>
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
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
          <br />
          <br />
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </p>
      </div>
      <div class="right">
        <h2>IN THE BOX</h2>
        <p><span>1X</span> Headphone Unit</p>
        <p><span>2X</span> Replacement Earcups</p>
        <p><span>1X</span> User Manual</p>
        <p><span>1X</span> 3.5mm 5m Audio Cable</p>
      </div>
    </section>
    <section class="images">
      <div class="left">
        <img
          src="../../assets/images/mark-one-images-2.png"
          alt="xx99-mark-one-headphones"
        />
        <img
          src="../../assets/images/mark-one-images-1.png"
          alt="xx99-mark-one-headphones"
        />
      </div>
      <div class="right">
        <img
          src="../../assets/images/mark-one-images-3.png"
          alt="xx99-mark-one-headphones"
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

        .input {
          width: 120px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background: $light-gray;

          @media (max-width: 768px) {
            width: 100px;
            height: 40px;
          }

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

            @media (max-width: 768px) {
              font-size: 11px;
            }
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

            @media (max-width: 768px) {
              font-size: 11px;
            }
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
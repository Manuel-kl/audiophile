<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <p @click="goBack" class="back-link">Go Back</p>
    </section>
    <section class="intro">
      <div class="img">
        <img src="../../assets/images/XX59.png" alt="xx59-headphones" />
      </div>
      <div class="info">
        <h1>
          XX59 <br />
          HEADPHONES
        </h1>
        <p class="description">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <p class="price">$ 899</p>
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
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
          <br />
          <br />
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
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
          src="../../assets/images/XX59-images-1.png"
          alt="xx59-headphones"
        />
        <img
          src="../../assets/images/XX59-images-2.png"
          alt="xx59-headphones"
        />
      </div>
      <div class="right">
        <img
          src="../../assets/images/XX59-images-3.png"
          alt="xx59-headphones"
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
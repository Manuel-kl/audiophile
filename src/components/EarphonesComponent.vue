<template>
  <div class="headphones-wrapper">
    <NavBar />
    <section class="intro">
      <h1>EARPHONES</h1>
    </section>
    <section class="headphones">
      <div class="headphone">
        <div class="img">
          <img src="../assets/images/earphones-1.png" alt="" />
        </div>
        <div class="details">
          <h2>NEW PRODUCT</h2>
          <h1>
            YX1 <br />
            WIRELESS EARPHONES
          </h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <router-link to="/yx1-earphones">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="other-products">
      <product-links-component />
    </section>
    <section class="more">
      <audio-phile-description />
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </div>
</template>
  <script setup>
import productLinksComponent from "../components/Banners/ProductLinksComponent.vue";
import audioPhileDescription from "../components/Banners/AudioPhileDescription.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";
</script>
  <style lang="scss" scoped>
@import "../sass/global.scss";
.headphones-wrapper {
  display: flex;
  flex-direction: column;

  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $black;
    padding: 50px 0;

    @media (max-width: 768px) {
      padding: 25px 0;
    }

    h1 {
      color: $white;
      text-align: center;
      font-family: $manrope;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 1.429px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 32px;
      }
    }
  }

  section.headphones {
    display: flex;
    flex-direction: column;
    padding: 100px;
    gap: 100px;

    @media (max-width: 1200px) {
      padding: 50px;
      gap: 50px;
    }

    @media (max-width: 768px) {
      padding: 100px 25px;
      gap: 100px;
    }

    .headphone {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: center;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      .img {
        border-radius: 8px;
        background: $light-gray;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 452px;
        flex-shrink: 0;

        @media (max-width: 768px) {
          width: 100%;
          height: 352px;
        }

        img {
          width: 349.238px;
          flex-shrink: 0;
          margin: auto;

          @media (max-width: 768px) {
            width: 220px;
            height: 243px;
            flex-shrink: 0;
          }
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 32px;

        @media (max-width: 768px) {
          align-items: center;
          text-align: center;
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
          }
        }

        p {
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
          }
        }
        a {
          width: 160px;
          height: 48px;
          flex-shrink: 0;
          background: #d87d4a;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          button {
            background: #d87d4a;
            border: none;
            color: $white;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;

            @media (max-width: 768px) {
              font-size: 12px;
            }
          }

          &:hover {
            background: #fbaf85;

            button {
              background: #fbaf85;
            }
          }
        }
      }
    }

    .headphone-two {
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
  section.other-products {
    padding: 100px;

    @media (max-width: 1200px) {
      padding: 50px;
    }
    @media (max-width: 375px) {
      padding: 25px;
    }
  }
  section.more {
    @media (max-width: 1200px) {
      padding: 50px;
    }
    @media (max-width: 375px) {
      padding: 25px;
    }
  }

  section.footer {
    background-color: $black-shade-1;
    padding: 0 100px;

    @media (max-width: 1200px) {
      padding: 0 50px;
    }

    @media (max-width: 375px) {
      padding: 0 25px;
    }
  }
}
</style>
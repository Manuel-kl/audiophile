<template>
  <div class="headphones-wrapper">
    <NavBar />
    <section class="intro">
      <h1>HEADPHONES</h1>
    </section>
    <section class="headphones">
      <div class="headphone">
        <div class="img">
          <img src="../assets/images/headphones-1.png" alt="" />
        </div>
        <div class="details">
          <h2>NEW PRODUCT</h2>
          <h1>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <router-link to="/xx99II-headphones">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
      <div class="headphone headphone-two">
        <div class="details">
          <h1>
            XX99 MARK I <br />
            HEADPHONES
          </h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <router-link to="/xx99-mark-one-headphones">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
        <div class="img">
          <img src="../assets/images/headphones-2.png" alt="" />
        </div>
      </div>
      <div class="headphone">
        <div class="img">
          <img src="../assets/images/headphone-3.png" alt="" />
        </div>
        <div class="details">
          <h2>NEW PRODUCT</h2>
          <h1>
            XX59 <br />
            HEADPHONES
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <router-link to="/xx59-headphones">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="other-products">
      <product-links-component />
    </section>
    <section class="more">
      <audio-phil-description />
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </div>
</template>
<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";
import AudioPhilDescription from "../components/Banners/AudioPhileDescription.vue";
import ProductLinksComponent from "../components/Banners/ProductLinksComponent.vue";
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px;

    @media (max-width: 1200px) {
      padding: 50px;
    }

    @media (max-width: 576px) {
      padding: 25px;
    }
  }
  section.more {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 25px;
      justify-content: center;
    }
  }

  section.footer {
    background-color: $black-shade-1;
    padding: 0 100px;

    @media (max-width: 1200px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
}
</style>
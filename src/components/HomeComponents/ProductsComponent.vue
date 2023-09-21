<template>
  <div class="products">
    <div class="products-intro">
      <div class="product">
        <img src="../../assets/images/headphones-intro.png" alt="headphones" />
        <OvalShadow class="shadow" />
        <div class="product-info">
          <h2>HEADPHONES</h2>
          <router-link to="">
            <button>
              SHOP
              <GreaterSign />
            </button>
          </router-link>
        </div>
      </div>
      <div class="product">
        <img src="../../assets/images/speaker-intro.png" alt="speakers" />
        <OvalShadow class="shadow" />
        <div class="product-info">
          <h2>SPEAKERS</h2>
          <router-link to="">
            <button>
              SHOP
              <GreaterSign />
            </button>
          </router-link>
        </div>
      </div>
      <div class="product">
        <img src="../../assets/images/earphones-intro.png" alt="earphones" />
        <OvalShadow class="shadow" />
        <div class="product-info">
          <h2>EARPHONES</h2>
          <router-link to="">
            <button>
              SHOP
              <GreaterSign />
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="product-details">
      <div class="product-first">
        <img src="../../assets/images/zx9-speaker.png" alt="" />
        <div class="right">
          <h1>
            ZX9 <br />
            SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <router-link to="">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
      <div class="product-two">
        <div class="info">
          <h1>ZX7 SPEAKER</h1>
          <router-link to="">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
        <img src="../../assets/images/zx7-speaker.png" alt="" />
      </div>
      <div class="product-three">
        <img src="../../assets/images/yx1-earphones.png" alt="" />
        <div class="info">
          <h1>YX1 EARPHONES</h1>
          <router-link to="">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
      <div class="product-four">
        <div class="left">
          <h1>
            <br />
            Bringing you the <span> best </span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div class="right">
          <img src="../../assets/images/audio-gear.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GreaterSign from "@/assets/svgs/GreaterSign.vue";
import OvalShadow from "@/assets/svgs/OvalShadow.vue";
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.products {
  display: flex;
  flex-direction: column;

  .products-intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0;
    padding: 40px 0;

    .product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: 350px;
      height: 204px;
      flex-shrink: 0;
      background: $light-gray;
      position: relative;

      img {
        position: absolute;
        top: -80px;
      }

      .shadow {
        position: absolute;
        top: 30px;
      }

      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 20px;

        h2 {
          color: $black;
          text-align: center;
          font-family: $manrope;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.286px;
          text-transform: uppercase;
        }
        a {
          text-decoration: none;
          button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: $black;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: none;
            gap: 7px;
          }
        }
      }
    }
  }

  .product-details {
    display: flex;
    flex-direction: column;

    .product-first {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      border-radius: 8px;
      background: $primary-color;
      height: 560px;
      margin-bottom: 40px;

      img {
        flex-shrink: 0;
        display: flex;
        margin: 0 auto;
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: auto;

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
          background: $black;
          width: 160px;
          height: 48px;
          flex-shrink: 0;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          button {
            background-color: $black;
            color: $white;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
    .product-two {
      width: 100%;
      margin-bottom: 40px;
      position: relative;

      img {
        width: 100%;
        border-radius: 8px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50px;
        gap: 20px;

        h1 {
          color: $black;
          font-family: $manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        a {
          font-family: $manrope;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid $black;
          width: 160px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          button {
            color: $black;
            letter-spacing: 1px;
            font-size: 13px;
            border: none;
            cursor: pointer;
            background: transparent;
          }
        }
      }
    }

    .product-three {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 100px;

      img {
        flex-basis: 49%;
        border-radius: 8px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        border-radius: 8px;
        flex-basis: 49%;
        background: $light-gray;

        h1 {
          color: $black;
          font-family: $manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        a {
          font-family: $manrope;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid $black;
          width: 160px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          button {
            color: $black;
            letter-spacing: 1px;
            font-size: 13px;
            border: none;
            cursor: pointer;
            background: transparent;
          }
        }
      }
    }

    .product-four {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;

      .left {
        display: flex;
        flex-direction: column;
        gap: 24px;

        h1 {
          color: $black;
          width: 445px;
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
          width: 445px;
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
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
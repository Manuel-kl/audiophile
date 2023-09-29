<template>
  <div class="products">
    <div class="products-intro">
      <div class="product">
        <img src="../../assets/images/headphones-intro.png" alt="headphones" />
        <OvalShadow class="shadow" />
        <div class="product-info">
          <h2>HEADPHONES</h2>
          <router-link to="/headphones">
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
          <router-link to="/speakers">
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
          <router-link to="/earphones">
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
          <router-link to="/zx9-speaker">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
      </div>
      <div class="product-two">
        <div class="info">
          <h1>ZX7 SPEAKER</h1>
          <router-link to="/zx7-speaker">
            <button>SEE PRODUCT</button>
          </router-link>
        </div>
        <img src="../../assets/images/zx7-speaker.png" alt="" />
      </div>
      <div class="product-three">
        <img src="../../assets/images/yx1-earphones.png" alt="" />
        <div class="info">
          <h1>YX1 EARPHONES</h1>
          <router-link to="/yx1-earphones">
            <button>SEE PRODUCT</button>
          </router-link>
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
    align-items: center;
    margin: 100px 0;
    padding: 40px 0;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 50;
      gap: 100px;
    }

    .product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      max-width: 350px;
      height: 204px;
      flex-shrink: 0;
      background: $light-gray;
      position: relative;
      flex: 1;

      @media (max-width: 768px) {
        width: 100%;
        background: $light-gray;
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
      }

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
        margin-top: 100px;
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

          &:hover {
            button {
              color: $primary-color;
              cursor: pointer;
            }
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
      height: 460px;
      margin-bottom: 40px;

      @media (max-width: 1024px) {
        height: 400px;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        padding: 20px;
        margin-bottom: 100px;
      }

      img {
        flex-shrink: 0;
        display: flex;
        margin: 0 auto;
        width: 370px;
        flex-shrink: 0;

        @media (max-width: 1024px) {
          width: 300px;
        }

        @media (max-width: 500px) {
          width: 172.248px;
          height: 207px;
          flex-shrink: 0;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: auto;

        @media (max-width: 768px) {
          align-items: center;
          text-align: center;
          margin-top: 24px;
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

          @media (max-width: 1024px) {
            font-size: 45px;
          }
        }

        p {
          opacity: 0.75;
          color: $white;
          font-family: $manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 25px;
          max-width: 349px;

          @media (max-width: 1024px) {
            max-width: 300px;
          }

          @media (max-width: 768px) {
            max-width: 500px;
          }
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

          &:hover {
            background: #4c4c4c;
            button {
              background: #4c4c4c;
            }
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
        height: 350px;
        object-fit: cover;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 125px;
        left: 50px;
        gap: 20px;

        @media (max-width: 768px) {
          left: 20px;
        }

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

          &:hover {
            background: $black;
            button {
              background: $black;
              color: $white;
            }
          }
        }
      }
    }

    .product-three {
      display: flex;
      flex-direction: row;
      margin-bottom: 100px;
      gap: 24px;

      @media (max-width: 675px) {
        flex-direction: column;
        gap: 40px;
      }

      img {
        border-radius: 8px;
        width: 50%;
        height: 250px;
        object-fit: cover;

        @media (max-width: 675px) {
          width: 100%;
          height: 300px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        border-radius: 8px;
        background: $light-gray;
        flex: 1;

        @media (max-width: 675px) {
          padding: 20px;
        }

        h1 {
          color: $black;
          font-family: $manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;

          @media (max-width: 675px) {
            text-align: center;
          }
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

          &:hover {
            background: $black;
            button {
              background: $black;
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
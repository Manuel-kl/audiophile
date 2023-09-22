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
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise cancellation
              feature.
            </p>
            <router-link to="">
              <button>SEE PRODUCT</button>
            </router-link>
          </div>
        </div>
      </section>
      <section class="other-products">
        <div class="product">
          <img src="../assets/images/headphones-intro.png" alt="headphones" />
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
          <img src="../assets/images/speaker-intro.png" alt="speakers" />
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
          <img src="../assets/images/earphones-intro.png" alt="earphones" />
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
      </section>
      <section class="more">
        <div class="left">
          <h1>
            <br />
            Bringing you the <span> best </span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </p>
        </div>
        <div class="right">
          <img src="../assets/images/audio-gear.png" alt="" />
        </div>
      </section>
      <section class="footer">
        <FooterComponent />
      </section>
    </div>
  </template>
  <script setup>
  import GreaterSign from "../assets/svgs/GreaterSign.vue";
  import OvalShadow from "../assets/svgs/OvalShadow.vue";
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
      }
    }
  
    section.headphones {
      display: flex;
      flex-direction: column;
      padding: 100px;
      gap: 100px;
  
      .headphone {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;
  
        .img {
          border-radius: 8px;
          background: $light-gray;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 540px;
          height: 560px;
          flex-shrink: 0;
  
          img {
            width: 349.238px;
            flex-shrink: 0;
            margin: auto;
          }
        }
  
        .details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 32px;
  
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
  
          p {
            max-width: 445px;
            opacity: 0.5;
            color: $black;
            font-family: $manrope;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
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
            }
          }
        }
      }
    }
    section.other-products {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 100px;
  
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
            cursor: pointer;
              gap: 7px;
            }
          }
        }
      }
    }
    section.more {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 100px 100px 100px;
  
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
  
    section.footer {
      background-color: $black-shade-1;
      padding: 0 100px;
    }
  }
  </style>
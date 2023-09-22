<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <router-link to="/headphones" class="back-link">
        <p>Go Back</p>
      </router-link>
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
        <div class="content">
          <h2>IN THE BOX</h2>
          <p><span>1X</span> Headphone Unit</p>
          <p><span>2X</span> Replacement Earcups</p>
          <p><span>1X</span> User Manual</p>
          <p><span>1X</span> 3.5mm 5m Audio Cable</p>
          <p><span>1X</span> Travel Bag</p>
        </div>
      </div>
    </section>
    <section class="footer">
      <footer-component />
    </section>
  </div>
</template>
<script setup>
import NavBar from "../NavBar.vue";
import FooterComponent from "../FooterComponent.vue";
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
    }
  }

  section.intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;

    .img {
      border-radius: 8px;
      background: $light-gray;
      width: 540px;
      height: 560px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 349.238px;
        height: 386px;
        flex-shrink: 0;
        margin: auto;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
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

    .left {
      display: flex;
      flex-direction: column;
      gap: 24px;

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
      justify-content: center;

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
    }
  }
  section.footer {
    background-color: $black;
    padding: 0 100px;
  }
}
</style>
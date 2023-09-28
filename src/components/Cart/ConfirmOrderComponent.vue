<template>
  <div class="order">
    <div class="img">
      <img src="../../assets/images/check-sign.svg" alt="" />
    </div>
    <div class="header">
      <h2>THANK YOU FOR YOUR ORDER</h2>
      <p>You will receive an email confirmation shortly</p>
    </div>
    <div class="summary">
      <div class="left">
        <div class="product">
          <div class="img">
            <img src="../../assets/images/cart-image-1.png" alt="" />
          </div>
          <div class="info">
            <h3>XX99 MARK II</h3>
            <p>$2,999</p>
          </div>
          <div class="quantity">
            <p>x1</p>
          </div>
        </div>
        <div class="other">
          <p>and 2 other item(s)</p>
        </div>
      </div>
      <div class="right">
        <h4>GRAND TOTAL</h4>
        <p>$5,446</p>
      </div>
    </div>
    <div class="home">
      <router-link to="/">
        <button>BACK TO HOME</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.order {
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 450px;
  background-color: $white;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .img {
    display: flex;
    margin-bottom: 40px;

    img {
      width: 64px;
      height: 64px;
      flex-shrink: 0;
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
    gap: 16px;

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
      color: $black;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.5;
    }
  }
  .summary {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    border-radius: 8px;
    background: $light-gray;
    gap: 25px;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 25px;

      .product {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding-bottom: 5px;

        .img {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          img {
            width: 28px;
            height: 32px;
            flex-shrink: 0;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          h3 {
            color: $black;
            font-family: $manrope;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
          }
          p {
            color: $black;
            font-family: $manrope;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            opacity: 0.5;
          }
        }
        .quantity {
          color: $black;
          text-align: right;
          font-family: $manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          opacity: 0.5;
        }
      }
      .other {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 7px;
        border-top: 1px solid rgba($black, 0.08);

        p {
          color: $black;
          font-family: $manrope;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.214px;
          opacity: 0.5;
        }
      }
    }

    .right {
      border-radius: 0px 8px 8px 0px;
      background: $black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      h4 {
        color: $white;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
      }

      p {
        color: $white;
        text-align: right;
        font-family: $manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }

  .home {
    padding: 15px 0px;
    a {
      background-color: $primary-color;
      width: 100%;
      padding: 12px 0px;
      display: flex;
      text-decoration: none;

      button {
        background-color: $primary-color;
        border: none;
        margin: auto;
        color: $white;
        text-align: center;
        font-family: $manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
      }

      &:hover {
        background-color: $secondary-color;
        button {
          background-color: $secondary-color;
        }
      }
    }
  }
}
</style>
<template>
  <div class="checkout-wrapper">
    <div class="cart">
      <h3>CART (3)</h3>
      <button>Remove all</button>
    </div>
    <div class="products">
      <div class="product">
        <div class="left">
          <div class="img">
            <img src="../../assets/images/cart-image-1.png" alt="" />
          </div>
          <div class="info">
            <h4>XX99 MK II</h4>
            <p class="price">$2,999</p>
          </div>
        </div>
        <div class="quantity">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div class="product">
        <div class="left">
          <div class="img">
            <img src="../../assets/images/cart-image-2.png" alt="" />
          </div>
          <div class="info">
            <h4>XX59</h4>
            <p class="price">$899</p>
          </div>
        </div>
        <div class="quantity">
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
      </div>
      <div class="product">
        <div class="left">
          <div class="img">
            <img src="../../assets/images/cart-image-3.png" alt="" />
          </div>
          <div class="info">
            <h4>YX1</h4>
            <p class="price">$599</p>
          </div>
        </div>
        <div class="quantity">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div class="total">
        <h3>TOTAL</h3>
        <p>$5,396</p>
      </div>
    </div>
    <div class="checkout">
      <button @click="goToCheckout">CHECKOUT</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToCheckout = () => {
  router.push("/checkout");
};
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";

.checkout-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 341px;
  flex-shrink: 0;
  border-radius: 8px;
  background: $white;
  padding: 24px;
  position: absolute;
  right: 100px;
  top: 132px;

  .cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: $black;
      font-family: $manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }

    button {
      opacity: 0.5;
      color: $black;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      text-decoration-line: underline;
      cursor: pointer;
      border: none;
      background: none;

      &:hover {
        color: $primary-color;
        opacity: 1;
      }
    }
  }

  .products {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .product {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;

        .img {
          border-radius: 8px;
          background: $light-gray;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          display: flex;

          img {
            margin: auto;
          }
        }

        .info {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          h4 {
            color: $black;
            font-family: $manrope;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
          }

          .price {
            color: $black;
            font-family: $manrope;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            opacity: 0.5;
          }
        }
      }

      .quantity {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        background: $light-gray;

        button {
          width: 32px;
          height: 32px;
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
        }

        p {
          color: $black;
          font-family: $manrope;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          text-align: center;
          font-size: 13px;
          letter-spacing: 1px;
        }
      }
    }
  }

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    h3 {
      color: $black;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.5;
    }

    p {
      color: $black;
      font-family: $manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
  }

  .checkout {
    button {
      background-color: $primary-color;
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
      width: 100%;
      height: 48px;
      cursor: pointer;

      &:hover {
        background-color: $secondary-color;
      }
    }
  }
}
</style>
<template>
  <div class="checkout-wrapper">
    <div class="nav-bar">
      <nav-bar />
    </div>
    <div class="back">
      <h1 @click="goBack">Go back</h1>
    </div>
    <section class="checkout">
      <div class="checkout">
        <h3>CHECKOUT</h3>
        <div class="billing-details">
          <h4>BILLING DETAILS</h4>
          <div class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Alexei Ward" />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="alexei@mail.com" />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+1 202-555-0136" />
            </div>
          </div>
        </div>
        <div class="shipping-info">
          <h4>SHIPPING INFO</h4>
          <div class="form">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div class="form-group">
              <label for="zip">ZIP</label>
              <input type="text" id="zip" placeholder="10001" />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" placeholder="New York" />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" placeholder="United States" />
            </div>
          </div>
        </div>
        <div class="payment-details">
          <div class="payment-method">
            <h4>Payment Method</h4>
            <div class="options">
              <div class="option">
                <input type="radio" id="e-money" name="payment" checked />
                <label for="e-money">e-Money</label>
              </div>
              <div class="option">
                <input type="radio" id="cash" name="payment" />
                <label for="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
          <div class="selected-options">
            <div class="e-money" v-if="eMoney">
              <div class="form-group">
                <label for="e-name">e-Money Number</label>
                <input type="text" id="e-name" placeholder="238521993" />
              </div>
              <div class="form-group">
                <label for="e-pin">e-Money PIN</label>
                <input type="text" id="e-pin" placeholder="6891" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <h3>SUMMARY</h3>
        <div class="products">
          <div class="product">
            <div class="left">
              <img src="../../assets/images/cart-image-1.png" alt="" />
              <div class="info">
                <h4>XX99 MK II</h4>
                <p class="price">$2,999</p>
              </div>
            </div>
            <div class="right">
              <p>x1</p>
            </div>
          </div>
          <div class="product">
            <div class="left">
              <img src="../../assets/images/cart-image-2.png" alt="" />
              <div class="info">
                <h4>XX59</h4>
                <p class="price">$899</p>
              </div>
            </div>
            <div class="right">
              <p>x2</p>
            </div>
          </div>
          <div class="product">
            <div class="left">
              <img src="../../assets/images/cart-image-3.png" alt="" />
              <div class="info">
                <h4>YX1</h4>
                <p class="price">$599</p>
              </div>
            </div>
            <div class="right">
              <p>x1</p>
            </div>
          </div>
        </div>
        <div class="summary-total">
          <div class="total">
            <p>TOTAL</p>
            <p class="price">$5,296</p>
          </div>
          <div class="shipping">
            <p>SHIPPING</p>
            <p class="price">$50</p>
          </div>
          <div class="vat">
            <p>VAT (INCLUDED)</p>
            <p class="price">$1,079</p>
          </div>
          <div class="grand-total">
            <p>GRAND TOTAL</p>
            <p class="price">$5,446</p>
          </div>
          <button class="btn">CONTINUE & PAY</button>
        </div>
      </div>
    </section>
    <div class="footer">
      <footer-component />
    </div>
  </div>
</template>
<script setup>
import NavBar from "../NavBar.vue";
import FooterComponent from "../FooterComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.checkout-wrapper {
  .back {
    background: $light-gray;
    padding: 30px 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      color: $black;
      font-family: $manrope;
      cursor: pointer;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
    }
  }
  section.checkout {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0 100px;
    background: $light-gray;

    div.checkout {
      display: flex;
      flex-direction: column;
      gap: 56px;
      flex-basis: 65%;
      padding: 58px 40px 0px 40px;
      background: $white;
      border-radius: 8px;

      h3 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;
      }

      .billing-details,
      .shipping-info {
        display: flex;
        flex-direction: column;
        gap: 24px;

        h4 {
          color: $primary-color;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0.929px;
          text-transform: uppercase;
        }

        .form {
          display: inline-flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 24px;

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;

            label {
              color: $black;
              font-family: $manrope;
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.214px;
            }

            input {
              border-radius: 8px;
              border: 1px solid #cfcfcf;
              background: $white;
              width: 300px;
              flex-shrink: 0;
              outline: none;
              padding: 16px 24px;

              &::placeholder {
                color: $black;
                font-family: $manrope;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.25px;
                opacity: 0.4;
              }
            }
          }
        }
      }
      .payment-details {
        display: flex;
        flex-direction: column;
        .payment-method {
          display: grid;
          grid-template-columns: 1fr 1fr;

          h4 {
            color: $primary-color;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0.929px;
            text-transform: uppercase;
          }

          .options {
            display: flex;
            flex-direction: column;
            gap: 24px;

            .option {
              width: 300px;
              padding: 24px;
              flex-shrink: 0;
              border-radius: 8px;
              border: 1px solid $primary-color;
              background: $white;
              display: flex;
              justify-content: flex-start;
              gap: 24px;
              align-items: center;

              label {
                color: $black;
                font-family: $manrope;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.25px;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    background-color: $black-shade-1;
    padding: 0 100px;
  }
}
</style>

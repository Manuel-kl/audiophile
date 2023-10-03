<template>
  <div class="checkout-wrapper">
    <NavBar />
    <section class="back">
      <p @click="goBack" class="back-link">Go Back</p>
    </section>
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
              <div
                class="option"
                @click="selectEMoney"
                :class="{ optionSelected: ePayment }"
              >
                <UnselectedRadioSvg v-if="!ePayment" />
                <SelectedRadioSvg v-if="ePayment" class="selectedRadio" />
                <p id="e-money">e-Money</p>
              </div>
              <div
                class="option"
                @click="selectCash"
                :class="{ optionSelected: cashPayment }"
              >
                <UnselectedRadioSvg v-if="!cashPayment" />
                <SelectedRadioSvg v-if="cashPayment" class="selectedRadio" />
                <p class="cash">Cash on Delivery</p>
              </div>
            </div>
          </div>
          <div class="selected-options">
            <div class="e-money" v-if="eMoney">
              <div class="form-group" :class="selected">
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
              <div class="img">
                <img src="../../assets/images/cart-image-1.png" alt="" />
              </div>
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
              <div class="img">
                <img src="../../assets/images/cart-image-2.png" alt="" />
              </div>
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
              <div class="img">
                <img src="../../assets/images/cart-image-3.png" alt="" />
              </div>
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
            <p class="ww">TOTAL</p>
            <p class="price">$5,296</p>
          </div>
          <div class="shipping">
            <p class="ww">SHIPPING</p>
            <p class="price">$50</p>
          </div>
          <div class="vat">
            <p class="ww">VAT (INCLUDED)</p>
            <p class="price">$1,079</p>
          </div>
          <div class="grand-total">
            <p class="ww">GRAND TOTAL</p>
            <p class="total">$5,446</p>
          </div>
          <button class="btn" @click="makeOrder">CONTINUE & PAY</button>
        </div>
      </div>
    </section>
    <section class="order-confirmation" v-if="showOrder">
      <div class="bg"></div>
      <div class="order-component">
        <confirm-order-component v-click-outside="hideOrder" />
      </div>
    </section>
    <div class="footer">
      <footer-component />
    </div>
  </div>
</template>
<script setup>
import ConfirmOrderComponent from "../Cart/ConfirmOrderComponent.vue";
import NavBar from "../NavBar.vue";
import FooterComponent from "../FooterComponent.vue";
import UnselectedRadioSvg from "../../assets/svgs/UnselectedRadioSvg.vue";
import SelectedRadioSvg from "../../assets/svgs/SelectedRadioSvg.vue";

import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const cashPayment = ref(false);
const ePayment = ref(true);
const eMoney = ref(true);
const selected = ref(false);
const showOrder = ref(false);

const selectEMoney = () => {
  ePayment.value = true;
  cashPayment.value = false;
  eMoney.value = true;
  selected.value = true;
};

const selectCash = () => {
  cashPayment.value = true;
  ePayment.value = false;
  eMoney.value = false;
  selected.value = false;
};

const makeOrder = () => {
  showOrder.value = true;
  scrollTop();
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const hideOrder = () => {
  showOrder.value = false;
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      const excludedElement = document.querySelector(".btn");
      if (
        !(
          el === event.target ||
          el.contains(event.target) ||
          (event.targe !== null && excludedElement.contains(event.target))
        )
      ) {
        binding.value(event);
      }
    };
    document.body.addEventListener("click", el.__ClickOutsideHandler__);
  },

  unmounted(el) {
    document.body.removeEventListener("click", el.__ClickOutsideHandler__);
  },
};
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.checkout-wrapper {
  display: flex;
  flex-direction: column;
  section.back {
    padding: 25px 100px;

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
  section.checkout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    padding: 25px 100px 58px 100px;
    background: $light-gray;

    @media (max-width: 1074px) {
      padding: 25px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    div.checkout {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 20px;
      background: $white;
      border-radius: 8px;

      @media (max-width: 768px) {
        padding: 20px 24px;
      }

      @media (max-width: 375px) {
        padding: 20px 16px;
      }

      h3 {
        color: $black;
        font-family: $manrope;
        font-size: 24px;
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
          gap: 16px;

          @media (max-width: 768px) {
            justify-content: space-between;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;

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
              width: 200px;
              flex-shrink: 0;
              outline: none;
              padding: 16px 24px;
              position: relative;

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

              &:focus-visible {
                border: 1px solid $primary-color;
              }

              @media (max-width: 768px) {
                width: max-content;
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
          padding-bottom: 44px;

          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }

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
              display: flex;
              justify-content: flex-start;
              gap: 24px;
              align-items: center;
              border: 1px solid #cfcfcf;
              color: $black;
              font-family: $manrope;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.25px;
              padding: 16px;
              flex-shrink: 0;
              border-radius: 8px;
              background: $white;

              &:hover {
                border: 1px solid $primary-color;
                cursor: pointer;
              }

              .selectedRadio {
                padding: 5px;
                border: 1px solid $primary-color;
                border-radius: 50%;
              }
            }
            .optionSelected {
              border: 1px solid $primary-color;
            }
          }
        }
        .selected-options {
          padding-bottom: 44px;
          .e-money {
            display: flex;
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
      }
    }

    div.summary {
      display: flex;
      flex-direction: column;
      gap: 24px;
      border-radius: 8px;
      background: $white;
      padding: 23px;
      height: fit-content;

      h3 {
        color: $black;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }

      .products {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 24px;

          .left {
            display: flex;
            flex-direction: row;
            gap: 24px;

            .img {
              border-radius: 8px;
              background: $light-gray;
              width: 54px;
              height: 54px;
              flex-shrink: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .info {
              display: flex;
              flex-direction: column;
              gap: 8px;

              h4 {
                color: $black;
                font-family: $manrope;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                line-height: 25px;
              }

              .price {
                color: $black;
                font-family: $manrope;
                font-size: 11px;
                font-style: normal;
                font-weight: 700;
                line-height: 25px;
              }
            }
          }

          .right {
            display: flex;
            flex-direction: row;
            gap: 24px;

            p {
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
        }
      }

      .summary-total {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .total,
        .shipping,
        .vat,
        .grand-total {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 24px;

          p.ww {
            color: $black;
            font-family: $manrope;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            opacity: 0.5;
          }

          p.price {
            color: $black;
            text-align: right;
            font-family: $manrope;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
          }

          p.total {
            color: $primary-color;
            text-align: right;
            font-family: $manrope;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
          }
        }

        .btn {
          background: $primary-color;
          color: $white;
          font-family: $manrope;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          padding: 12px 24px;
          width: 100%;
          border: none;
          outline: none;
          cursor: pointer;

          &:hover {
            background-color: $secondary-color;
          }
        }
      }
    }
  }
  section.order-confirmation {
    .bg {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba($black, 0.4);
      z-index: 1;
      top: 0;
    }

    @media (max-width: 600px) {
    }

    .order-component {
      position: absolute;
      top: 100px;
      z-index: 4;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .footer {
    background-color: $black-shade-1;
    padding: 0 100px;
  }
}
</style>

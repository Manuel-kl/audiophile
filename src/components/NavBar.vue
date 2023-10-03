<template>
  <nav class="navbar">
    <div class="lg">
      <div class="left">
        <h1>audiophile</h1>
      </div>
      <div class="center">
        <ul>
          <li>
            <router-link to="/" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/headphones" active-class="active"
              >Headphones</router-link
            >
          </li>
          <li>
            <router-link to="/speakers" active-class="active"
              >Speakers</router-link
            >
          </li>
          <li>
            <router-link to="/earphones" active-class="active"
              >Earphones</router-link
            >
          </li>
        </ul>
      </div>
      <div class="right">
        <div @click="toggleCart">
          <cart-svg />
        </div>
      </div>
    </div>
    <div class="sm">
      <div class="left">
        <div class="bg" v-if="showNav"></div>
        <div class="menu">
          <HamburgerMenuSvg @click="toggleMenu" class="menu-icon" />
          <ul v-if="showNav" v-click-outside="closeNav">
            <li>
              <router-link to="/" active-class="active">Home</router-link>
            </li>
            <li>
              <router-link to="/headphones" active-class="active"
                >Headphones</router-link
              >
            </li>
            <li>
              <router-link to="/speakers" active-class="active"
                >Speakers</router-link
              >
            </li>
            <li>
              <router-link to="/earphones" active-class="active"
                >Earphones</router-link
              >
            </li>
          </ul>
        </div>
        <h1>audiophile</h1>
      </div>
      <div class="sm-right">
        <div @click="toggleCart">
          <cart-svg />
        </div>
      </div>
    </div>
  </nav>
  <div class="view-cart" v-if="showCart">
    <div class="bg"></div>
    <div class="cc">
      <CartComponent v-click-outside="hideCart" />
    </div>
  </div>
  <div class="border">
    <span></span>
  </div>
</template>

<script setup>
import CartSvg from "@/assets/svgs/CartSvg.vue";
import CartComponent from "@/components/Cart/CartComponent.vue";
import HamburgerMenuSvg from "@/assets/svgs/HamburgerMenuSvg.vue";
import { ref } from "vue";

const showCart = ref(false);
const showNav = ref(false);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const toggleMenu = () => {
  showNav.value = !showNav.value;
};

const hideCart = () => {
  if (showCart.value == true) {
    showCart.value = false;
  }
};

const closeNav = () => {
  if (showNav.value == true) {
    showNav.value = false;
  }
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      const excludedElement = document.querySelector(".right");
      const excludedElement2 = document.querySelector(".sm-right");
      const excludedElement3 = document.querySelector(".menu-icon");
      if (
        !(
          el === event.target ||
          el.contains(event.target) ||
          (event.targe !== null && excludedElement.contains(event.target)) ||
          (event.targe !== null && excludedElement2.contains(event.target)) ||
          (event.targe !== null && excludedElement3.contains(event.target))
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
<style lang="scss" >
@import "../sass/global.scss";

nav.navbar {
  svg {
    cursor: pointer;
    position: relative;
    z-index: 4;

    &:hover {
      path,
      rect {
        fill: $primary-color;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../sass/global.scss";

nav.navbar {
  .lg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 35px 100px;
    background-color: $black-shade-2;
    z-index: 4;
    .left {
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: $white;
        position: relative;
        z-index: 4;

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }
      }
    }

    .center {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        gap: 34px;

        li {
          a {
            text-decoration: none;
            color: $white;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
            cursor: pointer;
            z-index: 1;

            &:hover {
              color: $primary-color;
            }

            &.active {
              color: $primary-color;
            }
          }
        }
      }
    }

    .right {
      cursor: pointer;
      z-index: 4;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }
  .sm {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 100px;
    background-color: $black-shade-2;
    z-index: 4;
    position: relative;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;

      .bg {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba($black, 0.6);
        z-index: 1;
        top: 0;
        left: 0;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: $white;
        z-index: 4;
      }

      .menu {
        position: relative;
        display: flex;
        z-index: 4;

        svg {
          z-index: 4;

          cursor: pointer;
          &:hover {
            path {
              fill: $primary-color;
            }
          }
        }

        ul {
          position: absolute;
          top: 30px;
          left: 0;
          background-color: $black-shade-2;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          list-style: none;
          z-index: 5;
          border-radius: 7px;
          li {
            z-index: 5;
            position: relative;
            a {
              text-decoration: none;
              color: $white;
              font-family: $manrope;
              font-size: 13px;
              font-style: normal;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: 2px;
              text-transform: uppercase;
              position: relative;
              cursor: pointer;
              z-index: 1;

              &:hover {
                color: $primary-color;
              }

              &.active {
                color: $primary-color;
              }
            }
          }
        }
      }
    }
    .right {
      cursor: pointer;
    }

    @media (max-width: 1024px) {
      display: flex;
      padding: 35px 50px;
    }

    @media (max-width: 375px) {
      padding: 35px 20px;
    }
  }
}
.border {
  background-color: $black-shade-1;
  position: relative;
  z-index: 1;
  span {
    opacity: 0.2;
    height: 1px;
    background-color: $white;
    margin: 0 100px;
    display: flex;

    @media (max-width: 1024px) {
      margin: 0 50px;
    }

    @media (max-width: 375px) {
      margin: 0 20px;
    }
  }
}
.view-cart {
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

  .cc {
    position: relative;
    width: 100%;
    z-index: 2;
    height: 100%;
  }
}
</style>
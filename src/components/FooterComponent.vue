<template>
  <footer>
    <div class="links">
      <div class="left">
        <h4>audiophile</h4>
      </div>
      <div class="right">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/headphones">Headphones</router-link>
          </li>
          <li>
            <router-link to="/speakers">Speakers</router-link>
          </li>
          <li>
            <router-link to="/earphones">Earphones</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="description">
      <div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div class="social-links">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
    <div class="copyrights">
      <p>© {{ year }} Audiophile. All rights reserved</p>
    </div>
  </footer>
</template>
<script setup>
import Facebook from "../assets/svgs/Facebook.vue";
import Instagram from "../assets/svgs/Instagram.vue";
import Twitter from "../assets/svgs/Twitter.vue";

import { computed } from "vue";

const year = computed(() => new Date().getFullYear());
</script>
<style lang="scss">
@import "../sass/global.scss";
.social-links {
  svg {
    cursor: pointer;
    &:hover {
      path {
        fill: $primary-color;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../sass/global.scss";
footer {
  display: flex;
  flex-direction: column;
  padding: 35px 0px;

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 24px;
    }

    .left {
      h4 {
        font-size: 1.5rem;
        font-weight: 700;
        color: $white;
      }
    }

    .right {
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 24px;

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 16px;
        }

        li {
          a {
            color: $white;
            font-family: $manrope;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;

            &:hover {
              color: $primary-color;
            }
          }
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
      gap: 24px;
    }

    p {
      opacity: 0.5;
      color: $white;
      font-family: $manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      max-width: 540px;

      @media (max-width: 768px) {
        text-align: center;
        width: 100%;
      }
    }

    .social-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;

      svg {
        cursor: pointer;

        &:hover {
          path {
            fill: $primary-color;
          }
        }
      }
    }
  }

  .copyrights {
    padding-top: 30px;
    opacity: 0.5;
    color: $white;
    font-family: $manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
}
</style>
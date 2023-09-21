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
            <router-link to="">Headphones</router-link>
          </li>
          <li>
            <router-link to="">Speakers</router-link>
          </li>
          <li>
            <router-link to="">Earphones</router-link>
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
      <p>© 2021 Audiophile. All rights reserved</p>
    </div>
  </footer>
</template>
<script setup>
import Facebook from "../assets/svgs/Facebook.vue";
import Instagram from "../assets/svgs/Instagram.vue";
import Twitter from "../assets/svgs/Twitter.vue";
</script>
<style lang="scss" scoped>
@import "../sass/global.scss";
footer {
  display: flex;
}
</style>
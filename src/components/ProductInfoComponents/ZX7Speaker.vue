<template>
  <div class="product-info">
    <nav-bar />
    <section class="back">
      <router-link to="/speakers" class="back-link">
        <p>Go Back</p>
      </router-link>
    </section>
    <section class="intro">
      <div class="img">
        <img src="../../assets/images/zx7-speaker-z.png" alt="zx7-speaker" />
      </div>
      <div class="info">
        <h1>
          ZX7 <br />
          SPEAKER
        </h1>
        <p class="description">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
        </p>
        <p class="price">$ 3,500</p>
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
          Reap the advantages of a flat diaphragm tweeter cone. This provides a
          fast response rate and excellent high frequencies that lower tiered
          bookshelf speakers cannot provide. The woofers are made from aluminum
          that produces a unique and clear sound. XLR inputs allow you to
          connect to a mixer for more advanced usage.
          <br />
          <br />
          The ZX7 speaker is the perfect blend of stylish design and high
          performance. It houses an encased MDF wooden enclosure which minimises
          acoustic resonance. Dual connectivity allows pairing through bluetooth
          or traditional optical and RCA input. Switch input sources and control
          volume at your finger tips with the included wireless remote. This
          versatile speaker is equipped to deliver an authentic listening
          experience.
        </p>
      </div>
      <div class="right">
        <h2>IN THE BOX</h2>
        <p><span>2X</span> Speaker Unit</p>
        <p><span>2X</span> Speaker Cloth Panel</p>
        <p><span>1X</span> User Manual</p>
        <p><span>1X</span> 3.5mm 7.5m Audio Cable</p>
        <p><span>1X</span> 7.5m Optical Cable</p>
      </div>
    </section>
    <section class="images">
      <div class="left">
        <img src="../../assets/images/zx7-speaker-1.png" alt="zx7-speaker" />
        <img src="../../assets/images/zx7-speaker-2.png" alt="zx7-speaker" />
      </div>
      <div class="right">
        <img src="../../assets/images/zx7-speaker-3.png" alt="zx7-speaker" />
      </div>
    </section>
    <section class="recommendations">
      <more-products-component />
    </section>
    <section class="more-info">
      <audio-phile-description />
    </section>
    <section class="footer">
      <footer-component />
    </section>
  </div>
</template>
      <script setup>
import NavBar from "../NavBar.vue";
import FooterComponent from "../FooterComponent.vue";
import MoreProductsComponent from "./MoreProductsComponent.vue";
import AudioPhileDescription from "../Banners/AudioPhileDescription.vue";
</script>
<style lang="scss" scoped>
@import "../../sass/global.scss";
.product-info {
  display: flex;
  flex-direction: column;

  section.back {
    padding: 50px 100px;

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

  section.intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 100px;
    gap: 50px;

    @media (max-width: 1024px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      gap: 25px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 375px) {
      padding: 0 24px;
    }

    .img {
      border-radius: 8px;
      background: $light-gray;
      max-width: 540px;
      height: 560px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }

      img {
        width: 349.238px;
        height: 386px;
        flex-shrink: 0;
        margin: auto;

        @media (max-width: 768px) {
          width: 181px;
          height: 201px;
          flex-shrink: 0;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 24px;

      @media (max-width: 768px) {
        gap: 16px;
      }

      h2 {
        color: $primary-color;
        font-family: $manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 10px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 12px;
          letter-spacing: 8px;
        }
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

        @media (max-width: 768px) {
          font-size: 32px;
          line-height: 36px;
          letter-spacing: 1.143px;
        }

        @media (max-width: 375px) {
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.857px;
        }
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

        @media (max-width: 768px) {
          font-size: 13px;
          line-height: 22px;
        }
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

        @media (max-width: 768px) {
          font-size: 15px;
          letter-spacing: 1.071px;
        }
      }
      .add-cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        @media (max-width: 768px) {
          gap: 8px;
        }

        @media (max-width: 576px) {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }

        .input {
          width: 120px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background: $light-gray;

          @media (max-width: 768px) {
            width: 100px;
            height: 40px;
          }

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

            @media (max-width: 768px) {
              font-size: 11px;
            }
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

            @media (max-width: 768px) {
              font-size: 11px;
            }
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

          &:hover {
            background-color: $secondary-color;
          }

          @media (max-width: 768px) {
            width: 120px;
            height: 40px;
            font-size: 11px;
          }
        }
      }
    }
  }
  section.features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 100px;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 1024px) {
      padding: 100px 50px 50px 50px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    @media (max-width: 576px) {
      padding: 100px 24px 50px 24px;
    }

    .left {
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (max-width: 768px) {
        gap: 16px;
      }

      h2 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 25px;
          line-height: 28px;
          letter-spacing: 0.893px;
        }
      }
      p {
        opacity: 0.5;
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

      h2 {
        color: $black;
        font-family: $manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.143px;
        text-transform: uppercase;
        margin-bottom: 32px;

        @media (max-width: 768px) {
          font-size: 25px;
          line-height: 28px;
          letter-spacing: 0.893px;
          margin-bottom: 16px;
        }
      }
      p {
        color: $black;
        font-family: $manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;

        span {
          color: $primary-color;
          font-family: $manrope;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          margin-right: 8px;

          @media (max-width: 768px) {
            font-size: 13px;
            line-height: 22px;
          }
        }

        @media (max-width: 768px) {
          font-size: 13px;
          line-height: 22px;
        }
      }
    }
  }
  section.images {
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    gap: 24px;
    margin: auto;

    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 0 24px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
    .left {
      display: flex;
      flex-direction: column;
      flex-direction: column;
      gap: 24px;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .right {
      img {
        object-fit: cover;
        border-radius: 8px;
        width: 100%;
      }
    }
  }
  section.recommendations {
    padding: 50px 100px;

    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 50px 24px;
    }

    @media (max-width: 375px) {
      padding: 24px;
    }
  }
  section.more-info {
    @media (max-width: 1024px) {
      padding: 50px;
    }

    @media (max-width: 768px) {
      padding: 50px 24px;
    }

    @media (max-width: 375px) {
      padding: 24px;
    }
  }
  section.footer {
    background-color: $black;
    padding: 0 100px;

    @media (max-width: 1024px) {
      padding: 0 50px;
    }

    @media (max-width: 768px) {
      padding: 0 24px;
    }

    @media (max-width: 375px) {
      padding: 0 24px;
    }
  }
}
</style>
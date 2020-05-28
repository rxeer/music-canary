<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-blocks">
        <div class="col-lg-4 col-sm-6 footer-block">
          <p class="title">Site Stats</p>
          <ul class="footer-list">
            <li>
              Total Loops:
              <b>155809</b>
            </li>
            <li>
              Total Acapellas:
              <b>9848</b>
            </li>
            <li>
              Total Tracks:
              <b>121724</b>
            </li>
            <li>
              Total Users:
              <b>34</b>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-6 footer-block">
          <p class="title">Help & Info</p>
          <ul class="footer-list">
            <li>
              <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
            </li>
            <li>
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/contact-us">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-6 footer-block">
          <p class="title">Social Networks</p>
          <ul class="footer-list">
            <li>
              <a href="#">Join Us On Youtube</a>
            </li>
            <li>
              <a href="#">Join Us On Instagram</a>
            </li>
            <li>
              <a href="#">Join Us On Soundcloud</a>
            </li>
            <li>
              <a href="#">Join Us On Vimeo</a>
            </li>
          </ul>
        </div>
      </div>

      <p class="copyright">
        <small>Copyright © {{currentYear}}</small>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
const currentDate: Date = new Date();

export default {
  data() {
    return {
      currentYear: currentDate.getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_vars.scss";

.footer {
  background: #333;
  color: #fff;
  padding: 2rem 2rem 1rem;

  .copyright {
    text-align: center;
  }

  .title {
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 600;
  }

  .footer-blocks {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);

    .footer-block {
      &:not(:last-child) {
        border-right: 1px solid #fff;

        @media (max-width: $bt-md-vp) {
          border: 0;
        }
      }
    }
  }

  .footer-list {
    padding: 0;
    margin: 0;
    list-style: none;

    & > li {
      margin-bottom: 3px;
      font-size: 0.9rem;

      b {
        font-weight: 600;
      }

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
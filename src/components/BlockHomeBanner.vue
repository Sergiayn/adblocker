<script>
import {defineComponent} from 'vue'
import BlockLinkApp from "@/components/BlockLinkApp"

import banner_iphone_en from "@/assets/img/lang/en/banner_iphone.png"
import banner_iphone_es from "@/assets/img/lang/es/banner_iphone.png"

export default defineComponent({
  name: "BlockHomeBanner",
  data() {
    const bg = {
      banner_iphone: {en: banner_iphone_en, es: banner_iphone_es},
    }

    return {bg}
  },
  components: {
    BlockLinkApp
  }
})
</script>

<template>
  <div class="main-top">
    <div class="main-top-bg">
      <div class="container">
        <div :style="{ backgroundImage: 'url(' + bg.banner_iphone[$i18n.locale] + ')' }"
            class="banner">
          <h2>{{ $t("block_home_banner.title") }}</h2>
          <h4>{{ $t("block_home_banner.desc") }}</h4>
          <block-link-app></block-link-app>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.main-top
  background-color: #C0C0C049

.main-top-bg
  background-repeat: no-repeat
  background-size: 100% 100%

.banner
  background-position: 90% 50%
  background-repeat: no-repeat
  background-size: 230px
  color: white
  padding: 205px 0 250px

  h2
    font-family: 'Open Sans', sans-serif
    font-size: 45px
    font-weight: 700
    margin-bottom: 17px
    max-width: 740px
    line-height: 54px

  h4
    font-family: 'Open Sans', sans-serif
    font-size: 28px
    font-weight: 400
    margin-bottom: 64px
    max-width: 690px

  .desc
    display: block
    font-size: 28px
    font-weight: 600
    margin-top: 35px

@media (min-width: 1200px)
  .main-top-bg
    background-image: url("@/assets/img/bg/main_bg_xl.png")

@media (max-width: 1200px)
  .main-top-bg
    background-image: url("@/assets/img/bg/main_bg_lg.png")

  .banner
    background-size: 190px
    padding: 180px 0

    h2
      font-size: 40px
      max-width: 550px

    h4
      font-size: 30px
      margin-bottom: 60px

    .desc
      font-size: 24px
      margin-top: 20px

@media (max-width: 992px)
  .main-top-bg
    background-image: url("@/assets/img/bg/main_bg_md.png")

@media (max-width: 768px)
  .main-top-bg
    background-image: url("@/assets/img/bg/main_bg_sm.png")

  .banner
    background-size: 160px
    padding: 165px 0

    h2
      font-size: 36px
      line-height: 1.4
      max-width: 460px

    h4
      font-size: 26px
      margin-bottom: 56px

    .desc
      font-size: 20px
      margin-top: 25px

  .banner
    background-position: bottom center
    background-size: 125px
    padding: 125px 0 310px
    text-align: center

    h2
      font-size: 24px
      max-width: 230px
      margin: 0 auto 25px

    h4
      font-size: 20px
      max-width: 280px
      margin: 0 auto 95px

    .desc
      display: none

@media (max-width: 576px)
  .banner
    background-size: 152px 326px
    padding: 60px 0 370px

    h2
      margin-bottom: 20px

    h4
      margin-bottom: 30px
      max-width: none

</style>

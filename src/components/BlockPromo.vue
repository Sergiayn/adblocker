<script>
import {defineComponent} from 'vue'
import img_1_en from "@/assets/img/lang/en/promo/img_1.webp"
import img_2_en from "@/assets/img/lang/en/promo/img_2.webp"
import img_1_es from "@/assets/img/lang/es/promo/img_1.webp"
import img_2_es from "@/assets/img/lang/es/promo/img_2.webp"

export default defineComponent({
    name: "BlockPromo",
    data() {
      const bg = {
        img_1: {en: img_1_en, es: img_1_es},
        img_2: {en: img_2_en, es: img_2_es}
      }

      return {bg}
    }
})
</script>

<template>
    <div class="block-promo" id="block_promo">
        <div class="container">
            <div class="block-promo-inner xl-size">
                <div class="row">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="desc">{{ $t("block_promo.desc") }}</div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 d-md-block d-sm-none">
                        <div :style="{ backgroundImage:
                        'url(' + bg.img_1[$i18n.locale] + '), ' +
                        'url(' + bg.img_2[$i18n.locale] + ')'
                        }"
                            class="img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
.block-promo
  background-repeat: no-repeat
  background-size: 100% 100%
  color: white
  padding: 170px 0

  .desc
    align-items: center
    display: flex
    font-size: 22px
    margin: 0 auto 0 0
    max-width: 430px
    height: 100%
    justify-content: center
    padding: 0 10px
    text-align: inherit

  .img
    background-repeat: no-repeat
    background-size: 38%, 55%
    background-position: left center, 62% 86%
    height: 480px
    width: 100%

@media (min-width: 1200px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_xl.webp")

@media (max-width: 1400px)
    .block-promo
        .img
            background-position: left center, 62% 86%

@media (max-width: 1200px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_lg.webp")

    .desc
      font-size: 18px
      max-width: 320px

    .img
      height: 420px

@media (max-width: 992px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_md.webp")
    .desc
      font-size: 16px

    .img
      background-position: left center, 60% 75%
      height: 390px

@media (max-width: 768px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_sm.webp")
    .desc
      font-size: 14px
      margin: 0 auto 0

    .img
      background-position: left center, 60% 70%

@media (max-width: 576px)
  .block-promo
    .desc
      font-size: 17px
      text-align: center

    .img
      display: none

</style>

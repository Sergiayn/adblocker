<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BlockPromo"
})
</script>

<template>
    <div class="block-promo" id="block_promo">
        <div class="container">
            <div class="block-promo-inner">
                <div class="row">
                    <div class="col-12 col-xl-6 col-lg-6 col-sm-6">
                        <div class="desc">{{ $t("block_promo.desc") }}</div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 col-sm-6">
                        <div class="img"></div>
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
    margin: auto
    max-width: 370px
    height: 100%
    justify-content: center
    padding: 0 10px
    text-align: justify

  .img
    background-repeat: no-repeat
    background-image: url("@/assets/img/bg/promo_img_1.png"), url("@/assets/img/bg/promo_img_2.png")
    background-size: 39%, 55%
    background-position: left center, 62% bottom
    height: 480px
    width: 100%

@media (min-width: 1200px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_xl.png")

@media (max-width: 1200px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_lg.png")

    .desc
      font-size: 18px
      max-width: 320px

    .img
      height: 420px

@media (max-width: 992px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_md.png")

    .img
      background-position: left center, 60% 75%
      height: 390px

@media (max-width: 768px)
  .block-promo
    background-image: url("@/assets/img/bg/promo_main_bg_sm.png")

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

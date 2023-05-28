<script>
import {defineComponent} from 'vue'
import BlockLinkApp from "@/components/BlockLinkApp"
import {Carousel, Slide, Pagination} from 'vue3-carousel'

import img_1_en from "@/assets/img/lang/en/feature/img_1.png"
import img_2_en from "@/assets/img/lang/en/feature/img_2.png"
import slide_1_en from "@/assets/img/lang/en/feature/slide_1.png"
import slide_2_en from "@/assets/img/lang/en/feature/slide_2.png"
import slide_3_en from "@/assets/img/lang/en/feature/slide_3.png"

import img_1_es from "@/assets/img/lang/es/feature/img_1.png"
import img_2_es from "@/assets/img/lang/es/feature/img_2.png"
import slide_1_es from "@/assets/img/lang/es/feature/slide_1.png"
import slide_2_es from "@/assets/img/lang/es/feature/slide_2.png"
import slide_3_es from "@/assets/img/lang/es/feature/slide_3.png"


export default defineComponent({
  name: "BlockFeature",
  data() {
    const features = [{id:1}, {id:2}, {id:3}, {id:4}]
    const slides = [{id:1}, {id:2}, {id:3}]

    const images = {
      img_1: {en: img_1_en, es: img_1_es},
      img_2: {en: img_2_en, es: img_2_es},
      slide_1: {en: slide_1_en, es: slide_1_es},
      slide_2: {en: slide_2_en, es: slide_2_es},
      slide_3: {en: slide_3_en, es: slide_3_es},
    }

    return {features, images, slides, screenWidth: 0}
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => this.updateScreenWidth());
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  components: {
    BlockLinkApp,
    Carousel,
    Slide,
    Pagination
  }
})
</script>

<template>
  <div class="block-features" id="block_features">
    <div class="part_1">
      <div class="container">
        <div class="block-features-inner xl-size">
          <div class="feature-list">
            <ul>
              <li v-for="feature in features" :key="feature.id">
                <img :src="require('@/assets/img/bg/feature/feature_' + feature.id + '.svg')"
                     :alt='$t("block_feature.feature_title_" + feature.id)'>
                <div class="title-item">{{ $t("block_feature.feature_title_" + feature.id) }}</div>
                <div class="brief-item">{{ $t("block_feature.feature_brief_" + feature.id) }}</div>
              </li>
            </ul>
          </div>
          <block-link-app></block-link-app>
        </div>
      </div>
    </div>
    <div class="part_2">
      <div class="container">
        <div class="block-features-inner xl-size">
          <div class="title-block">{{ $t("block_feature.part_2_title") }}</div>
          <div v-if="screenWidth > 576">
            <div class="row">
              <div class="col-6">
                <div class="desc">
                  <div class="desc-inner">
                    <div v-html='$t("block_feature.part_2_desc_left")' class="left"></div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="img"><img class="img-fluid" :src="images.img_1[$i18n.locale]" alt=""></div>
              </div>
              <div class="col-6">
                <div class="img"><img class="img-fluid" :src="images.img_2[$i18n.locale]" alt=""></div>
              </div>
              <div class="col-6">
                <div class="desc">
                  <div class="desc-inner">
                    <div class="right">
                      <p v-for="slide in slides" :key="slide.id">
                        <strong>{{ $t("block_feature.part_2_desc_right_" + slide.id + "_title") }}</strong>
                        &nbsp;
                        <span>{{ $t("block_feature.part_2_desc_right_" + slide.id + "_brief") }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="features-mobile-slider">
              <carousel :items-to-show="1" :autoplay="5000">
                <slide v-for="slide in slides" :key="slide.id">
                  <div class="feature-item">
                    <div class="desc">
                      <strong>{{ $t("block_feature.part_2_desc_right_" + slide.id + "_title") }}</strong>
                      {{ $t("block_feature.part_2_desc_right_" + slide.id + "_brief") }}
                    </div>
                    <div class="img">
                      <img :src="images['slide_' + slide.id][$i18n.locale]"
                           :alt='$t("block_feature.part_2_desc_right_" + slide.id + "_title")'
                           class="img-fluid">
                    </div>
                  </div>
                </slide>
                <template #addons>
                  <pagination/>
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.block-features-inner
  text-align: center

  > .title-block
    font-size: 30px
    font-weight: 600

  .slick-dots
    bottom: 0

.block-features
  .part_1
    background: linear-gradient(180deg, rgba(192, 192, 192, 0.29) 72.92%, rgba(239, 239, 239, 0) 100%)
    padding: 80px 0 0

    .title-block
      font-size: 36px
      font-weight: 700
      padding-bottom: 20px

    .feature-list
      ul
        display: flex
        flex-wrap: wrap
        list-style: none
        padding: 0
        margin-bottom: 30px

      li
        flex: 50%
        padding-bottom: 60px

      img
        height: 80px
        margin-bottom: 10px
        width: 80px

      .title-item
        font-size: 24px
        font-weight: 700

      .brief-item
        font-size: 20px
        margin: auto
        max-width: 475px

    .link_app a
      height: 54px
      margin: 0 8px

  .part_2
    font-size: 20px
    padding: 120px 0 0

    .desc
      height: 100%

    .img
      padding: 40px 0

    .desc-inner
      align-items: center
      display: flex
      flex-wrap: wrap
      height: 100%
      .left, .right
        flex: 100%
        margin: auto
        text-align: left

      .left
        max-width: 430px

        p
          margin-bottom: 30px

@media (max-width: 1200px)
  .block-features
    .part_1
      padding: 50px 0 0

      .title-block
        font-size: 28px

      .feature-list
        ul
          margin-bottom: 40px

        li
          padding: 0 10px 30px

        .title-item
          font-size: 16px

        .brief-item
          font-size: 16px
          max-width: 285px

      .link_app a
        height: 50px
        margin: 0 10px

    .part_2
      font-size: 18px
      padding: 90px 0 0

@media (max-width: 992px)
  .block-features .part_2 .img
    padding: 50px 10px

@media (max-width: 768px)
  .block-features-inner > .title-block
    font-size: 26px

  .block-features .part_1
    .title-block
      font-size: 22px
      padding-bottom: 40px

    .feature-list
      ul
        margin-bottom: 15px

      li
        flex: 100%
        padding-bottom: 40px

      .title-item
        font-size: 17px
        font-weight: 400

      .brief-item
        display: none

    .link_app
      margin: auto
      width: 150px

      a
        display: block
        height: 45px
        margin: 0 0 12px

@media (max-width: 576px)
  .block-features-inner > .title-block
    font-size: 19px
    padding-bottom: 22px

  .block-features .part_2
    padding: 60px 0 0

    .desc
      font-size: 17px
      max-width: 290px
      margin: auto
      min-height: 128px

    .img
      padding: 30px 0 0

      img
        margin: auto
        max-width: 160px

</style>

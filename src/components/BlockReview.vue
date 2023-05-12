<template>
  <div class="block-review" id="block-review">
      <div class="container">
          <div class="block-review-inner">
              <div class="title">{{ $t("block_review.title") }}</div>
              <div class="reviews-desktop" v-if="screenWidth > 576">
                  <div class="review" v-for="(item, index) in items" :key="index">
                      <div class="review-inner">
                          <div class="name">{{item.name}}</div>
                          <div class="marks">
                              <i class="icon ic-star-yellow" v-for="i in item.mark" :key="index + '_' + i + 'f'"></i>
                              <i class="icon ic-star-gray" v-for="i in (5 - item.mark)" :key="index + '_' + i + 'e'"></i>
                          </div>
                          <div class="comment">{{ $t("block_review." + item.text) }}</div>
                      </div>
                  </div>
              </div>
              <div class="reviews-mobile" v-else>
                  <carousel :items-to-show="1" :autoplay="5000">
                      <slide v-for="(item, index) in items" :key="index">
                          <div class="review-inner">
                              <div class="name">{{item.name}}</div>
                              <div class="marks">
                                  <i class="icon ic-star-yellow" v-for="i in item.mark" :key="index + '_' + i + 'f'"></i>
                                  <i class="icon ic-star-gray" v-for="i in (5 - item.mark)" :key="index + '_' + i + 'e'"></i>
                              </div>
                              <div class="comment">{{ $t("block_review." + item.text) }}</div>
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
</template>

<script>
import {ref} from 'vue'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination} from 'vue3-carousel'

export default {
    name: "BlockReview",
    data() {
        const items = ref(
            [
                {name:'Vicki45',text:'comment_1',mark:5},
                {name:'Mark1995',text:'comment_2',mark:4},
                {name:'OrhanVH',text:'comment_3',mark:5},
                {name:'Fgttt',  text:'comment_4',mark:5},
            ]
        )
        return {
            items,
            screenWidth: 0
        }
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
        Carousel,
        Slide,
        Pagination
    },
}


</script>

<style lang="sass">
.block-review-inner
  padding: 100px 0 105px

.block-review
  .title
    font-weight: 600
    font-size: 30px
    text-align: center
    padding-bottom: 25px

  .marks
      i
         background-color: transparent
         background-size: 15px 15px
         height: 18px
         width: 18px

.reviews-desktop
    display: flex
    flex-wrap: wrap

    .review
        flex: 50%

    .review-inner
        background: white
        border-radius: 8px
        box-shadow: -4px 4px 11px rgba(31, 51, 39, 0.21)
        height: 150px
        margin: 15px
        padding: 16px

    .name
        font-size: 17px
        margin-bottom: 5px

    .comment
        font-size: 20px
        font-weight: 500
        padding-top: 5px
        vertical-align: middle

@media (max-width: 1200px)
  .block-review-inner
    padding: 90px 0

  .reviews-desktop
    .title
      padding-bottom: 15px

    .name
      font-size: 15px

    .comment
      font-size: 18px


@media (max-width: 992px)
  .block-review-inner
    overflow-x: scroll

  .reviews-desktop
    width: 800px

    .title
        font-size: 26px
    .comment
        font-size: 16px

@media (max-width: 768px)
    .block-review-inner
        padding: 80px 0
        .title
            font-size: 26px

    .reviews-desktop
        width: 700px

        .name
            font-size: 13px

        .comment
            font-size: 15px
            font-weight: 500


@media (max-width: 576px)
    .block-review-inner
        overflow-x: inherit
        padding: 40px 0
        .title
            font-size: 19px

    .reviews-mobile
        .review-inner
            background: #FFFFFF
            box-shadow: 0 4px 8px rgba(236, 236, 236, 0.9)
            border-radius: 8px
            padding: 8px 16px
            width: 98%

        ol
            margin-bottom: 0

        .name, .marks, .comment
            text-align: left

        .name
            font-size: 13px

        .comment
            font-size: 15px
            font-weight: 500


</style>

<template>
  <div class="block-privacy-middle">
    <div class="container">
      <div class="block-privacy-middle-inner xl-size">
        <h1 class="text-center page-title">{{ $t("menu.privacy") }}</h1>
        <div>
          <div class="rubric">{{ $t("page_privacy.rubric_1") }}</div>
          <div class="rubric">{{ $t("page_privacy.rubric_2") }}</div>
        </div>
        <div class="rubric" v-html='$t("page_privacy.rubric_3")'></div>
        <div class="title">{{ $t("page_privacy.title_1") }}</div>

        <div class="rubric" v-html='$t("page_privacy.rubric_4")'></div>
        <div class="title">{{ $t("page_privacy.title_2") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_5")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_6")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_7")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_8")'></div>

        <div class="title title-2">{{ $t("page_privacy.title_3") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_9")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_10")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_11")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_12")'></div>

        <div class="title">{{ $t("page_privacy.title_4") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_13")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_14")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_15")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_16")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_17")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_18")'></div>

        <div class="title">{{ $t("page_privacy.title_5") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_19")'></div>

        <div class="title">{{ $t("page_privacy.title_6") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_20")'></div>

        <div class="title">{{ $t("page_privacy.title_7") }}</div>
        <div class="rubric" v-html='$t("page_privacy.rubric_21")'></div>
        <div class="rubric" v-html='$t("page_privacy.rubric_22")'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PagePrivacy"
}
</script>

<style scoped lang="sass">
.block-privacy-middle
  font-size: 17px
  padding: 50px 0 24px

  .page-title
    font-size: 28px
    font-weight: 600
    margin-bottom: 40px

  .title
    background: rgba(23, 150, 107, 1)
    color: white
    font-weight: 700
    margin-bottom: 24px
    padding: 6px 8px

    &.title-2
      background: rgba(23, 150, 107, 1)

  .rubric
    margin-bottom: 24px

    p
      margin: 0
      text-indent: 20px

    strong
      display: block
      font-weight: 700

@media (min-width: 1200px)
  .block-privacy-middle .custom-font-size
    font-size: 20px

@media (max-width: 1200px) and (min-width: 991px)
  .block-privacy-middle .custom-font-size
    font-size: 18px

@media (max-width: 1200px)
  .block-privacy-top
    padding: 12px 0

    .img-block
      padding: 55px 0 0
      text-align: center

    .text-block
      font-size: 20px
      padding: 12px 0 0

  .block-privacy-middle
    font-size: 16px

    .title, .rubric
      margin-bottom: 16px

@media (max-width: 768px)
  .block-privacy-middle
    padding-top: 100px

    .page-title
      font-size: 26px

  .block-privacy-middle .page-title
    font-size: 26px

  .block-privacy-top
    padding: 25px 0

    .text-block
      font-size: 18px
      padding: 0

  .block-privacy-middle
    font-size: 18px

@media (max-width: 575px)
  .block-privacy-middle .custom-font-size
    font-size: 14px

  .block-privacy-middle .page-title
    font-size: 18px

  .block-privacy-middle
    padding-top: 60px

  .block-privacy-top
    padding: 10px 0

    .img-block
      padding: 20px 0

    .text-block
      font-size: 14px
      padding: 0

  .block-privacy-middle
    font-size: 15px

    .title, .rubric
      margin-bottom: 10px

</style>

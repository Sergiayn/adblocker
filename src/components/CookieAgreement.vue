<template>
  <div class="blockCookieAgreement" v-if="isVisible">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-12">
          <div class="desc">
            <div class="title">{{ $t("block_cookie.title") }}</div>
            <div class="brief">{{ $t("block_cookie.brief") }}</div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12">
          <div class="controls">
            <button class="btn btn-success" @click="closeModal">{{ $t("block_cookie.btn") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useCookies} from "vue3-cookies"
export default {
    name: "CookieAgreement",
    data() {
      const {cookies} = useCookies()
      let isVisible = ref(false)
      return {
        cookies,
        isVisible
      };
  },
  mounted() {
    if ("1" !== this.cookies.get("coolie_is_accept"))
      this.isVisible = true
  },
  methods: {
    closeModal() {
      this.isVisible = false
      this.cookies.set("coolie_is_accept", "1", '365d')
    }
  }
}
</script>

<style scoped lang="sass">
.blockCookieAgreement
  background: rgba(95, 102, 96, 1)
  bottom: 0
  padding: 24px 0
  position: fixed
  width: 100%

  .desc
    color: white

  .title, .brief
    padding-left: 32px

  .title
    background-image: url("@/assets/img/bg/cookie-img.svg")
    background-repeat: no-repeat
    background-size: 24px 24px
    font-size: 18px
    font-weight: 700
    padding-bottom: 4px

  .brief
    font-size: 14px

  .controls
    display: flex
    align-items: center
    justify-content: center
    height: 100%

  button
    background: #0E523A
    border-color: transparent
    border-radius: 8px

</style>

<template>
    <main-header></main-header>
    <div class="main">
        <RouterView />
    </div>
    <main-footer></main-footer>
    <cookie-agreement></cookie-agreement>
    <count-down @block-count-down="open_modal"></count-down>
</template>

<script>
import CookieAgreement from "@/components/CookieAgreement"
import CountDown from "@/components/BlockCountDown"
import MainFooter from "@/components/MainFooter"
import MainHeader from "@/components/MainHeader"
import {RouterView} from "vue-router"
export default {
  name: 'App',
  components: {
      CookieAgreement,
      CountDown,
      MainFooter,
      MainHeader,
      RouterView
  }
}
</script>

<style lang="sass">
body
    font-family: 'Nunito', sans-serif

.icon
    background-repeat: no-repeat
    background-position: center center
    background-size: 100%
    display: inline-block
    height: 24px
    width: 24px

.ic-star-yellow
    background-image: url("@/assets/img/bg/star-yellow.webp")

.ic-star-gray
    background-image: url("@/assets/img/bg/star-empty.webp")

.carousel__pagination
    padding-left: 0
.carousel .carousel__pagination-button::after
    background: #262626
    border-radius: 50%
    height: 6px
    opacity: .5
    width: 6px
.carousel .carousel__pagination-button--active::after
    opacity: 1

.main
    margin-top: 94px

.bg-gray
    background: linear-gradient(180deg, rgba(192, 192, 192, 0.3) 58.04%, rgba(223, 223, 223, 0) 90.14%)

.xl-size
  max-width: 1116px
  margin: auto

@media (max-width: 768px)
    .main
        margin-top: 62px

@media (max-width: 576px)
    .main
        margin-top: 48px

</style>

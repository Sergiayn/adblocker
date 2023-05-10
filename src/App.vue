<template>
    <main-header></main-header>
    <div class="main">
        <RouterView />
    </div>
    <main-footer></main-footer>
    <cookie-agreement></cookie-agreement>
</template>

<script>
import CookieAgreement from "@/components/CookieAgreement.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
import {RouterView} from "vue-router";
export default {
  name: 'App',
  components: {
      CookieAgreement,
      MainFooter,
      MainHeader,
      RouterView
  }
}
</script>

<style lang="sass">
body
    font-family: 'Nunito', sans-serif

.main
    margin-top: 94px

.bg-gray
    background: linear-gradient(180deg, rgba(192, 192, 192, 0.3) 58.04%, rgba(223, 223, 223, 0) 90.14%)

@media (max-width: 768px)
    .main
        margin-top: 62px

@media (max-width: 576px)
    .main
        margin-top: 48px

</style>

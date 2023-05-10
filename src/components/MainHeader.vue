<template>
  <header>
      <div class="header-bg">
          <div class="container">
              <div v-if="screenWidth > 768" class="header-desktop">
                  <div class="row">
                      <div class="col-xl-3 col-lg-3 col-md-3">
                          <router-link :to="{name:'Home', params:{locale:$i18n.locale}}" class="logo">
                              <img src="@/assets/img/logo.png" class="img-fluid" alt="AdBlocker">
                              <span>AdBlocker</span>
                          </router-link>
                      </div>
                      <div class="col-lg-8 col-md-8">
                          <div class="top-menu">
                              <ul>
                                  <li>
                                      <router-link
                                          :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_features'}">
                                          {{ $t("header.features") }}
                                      </router-link>
                                  </li>
                                  <li>
                                      <router-link
                                          :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_advantages'}"
                                          class="long-a">{{ $t("header.advantages") }}
                                      </router-link>
                                  </li>
                                  <li>
                                      <router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_subscribe'}">
                                          {{ $t("header.subscribe") }}
                                      </router-link>
                                  </li>
                                  <li>
                                      <router-link
                                          :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_our_products'}">
                                          {{ $t("header.our_products") }}
                                      </router-link>
                                  </li>
                                  <li><a href="https://apps.apple.com/us/app/adblocker-protection/id1587657245"
                                         class="download check_download_link">{{ $t("header.download") }}</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-xl-1 col-lg-1 col-md-1">
                          <change-language></change-language>
                      </div>
                  </div>
              </div>
              <div v-else class="header-mobile">
                  <router-link class="logo" :to="{name:'Home', params:{locale:$i18n.locale}}">
                      <img src="@/assets/img/logo.png" class="img-fluid" alt="AdBlocker">
                      <span>AdBlocker</span>
                  </router-link>
                  <div class="mobile-top-menu">
                      <nav class="navbar navbar-dark">
                          <button @click="isOpenMobileMenu = !isOpenMobileMenu"
                                  class="navbar-toggler"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon" :class="{active:isOpenMobileMenu}"></span>
                          </button>
                      </nav>
                  </div>
              </div>
          </div>
          <div v-if="screenWidth <= 768" class="header-mobile-menu">
              <div class="collapse" :class="{show:isOpenMobileMenu}">
                  <div class="container">
                      <ul>
                          <li @click="isOpenMobileMenu = false">
                              <router-link
                                  :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_features'}">
                                  {{ $t("header.features") }}
                              </router-link>
                          </li>
                          <li @click="isOpenMobileMenu = false">
                              <router-link
                                  :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_advantages'}">
                                  {{ $t("header.advantages") }}
                              </router-link>
                          </li>
                          <li @click="isOpenMobileMenu = false">
                              <router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_subscribe'}">
                                  {{ $t("header.subscribe") }}
                              </router-link>
                          </li>
                          <li @click="isOpenMobileMenu = false">
                              <router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_our_products'}">
                                  {{ $t("header.our_products") }}
                              </router-link>
                          </li>
                          <li><a href="https://apps.apple.com/us/app/adblocker-protection/id1587657245"
                                 class="download check_download_link">{{ $t("header.download") }}</a></li>
                      </ul>
                      <change-language @eventSetLocale="isOpenMobileMenu = false"></change-language>
                  </div>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue"
export default {
    name: "MainHeader",
    data() {
        return {
            isOpenMobileMenu: false,
            screenWidth: 0,
        };
    },
    mounted() {
        this.updateScreenWidth();
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth();
            });
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        }
    },
    components: {
        ChangeLanguage
    }
}
</script>

<style lang="sass">
header
    background: #777
    position: fixed
    top: 0
    height: 94px
    width: 100%
    z-index: 10
    a
        color: white
        text-decoration: none
        &:hover
            color: white
    .header-bg
        background: rgba(44, 44, 46, .8)
        height: 100%
        width: 100%

.header-desktop
    padding: 22px 0

    .logo
        display: block
        font-size: 16px
        font-weight: 500
        max-width: 160px

        img
            display: inline-block
            height: 50px
            padding-right: 10px

    .top-menu
        text-align: center
        ul
            display: flex
            display: -webkit-flex
            list-style: none
            justify-content: space-evenly
            margin-bottom: 0
            padding: 0
        li
            display: flex
            display: -webkit-flex
            flex-direction: column
            -webkit-flex-direction: column
            text-align: center
            font-size: 16px
            font-weight: 500
        a
            display: block
            padding: 12px 8px
        .download
            border: 1px solid white
            border-radius: 8px
            padding: 11px 20px

    .change-language
        margin-top: 12px

.header-mobile
    display: table
    padding: 6px 0
    width: 100%
    .logo
        display: table-cell
        font-size: 16px
        font-weight: 500

        img
            display: inline-block
            height: 50px
            padding-right: 10px

    .navbar
        height: 46px
        padding: 0 16px

    button
        border: 0
        padding: 0
        position: absolute
        right: 0
        &:focus
            box-shadow: none
            outline: none

    .navbar-toggler-icon
        background-image: url("@/assets/img/header_menu_btn.svg")
        background-repeat: no-repeat
        background-position: center center
        background-size: auto 15px
        &.active
            background-image: url("@/assets/img/header_menu_btn_active.svg")

    .mobile-top-menu
        display: table-cell
        width: 30%
        vertical-align: top

.header-mobile-menu
    > div
        background-color: #474747
        padding: 24px 0

    ul
        font-size: 17px
        list-style: none
        padding: 0
        text-align: right
    li
        padding: 5px 0

    .change-language
        margin-left: auto
        margin-right: -10px
        .tooltip-lang_content
            right: 9%


@media (max-width: 1200px)
    .header-desktop
        .top-menu
            li
                font-size: 14px
            .download
                padding: 11px
        .change-language
            position: fixed
            .tooltip-lang_icon
                display: none
            .tooltip-lang_content
                margin-left: -42px

@media (max-width: 768px)
    header
        height: 64px

@media (max-width: 576px)
    header
        height: 48px

    .header-mobile
        .logo img
            height: 33px
        .navbar
            height: 35px

    .header-mobile-menu
        .change-language
            .tooltip-lang_content
                right: 2%

</style>

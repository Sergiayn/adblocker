<template>
    <footer id="block_our_products">
        <div class="container">
            <div class="footer-middle xl-size">
                <div class="brief-part" v-if="screenWidth > 767">
                    <div class="title">{{ $t("footer.title_1") }}</div>
                    <div class="brief">{{ $t("footer.brief") }}</div>
                </div>
                <div class="list-products">
                    <div class="title">{{ $t("footer.title_2") }}</div>
                    <ul>
                        <li v-for="app in apps" :key="app.link">
                            <a :href="getBasePath + app.link" target="_blank">
                                <img :src="require('@/assets/img/products/' + app.img)"  :alt="app.name">
                                <span>{{app.name}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="menu">
                    <div class="title">{{ $t("footer.title_3") }}</div>
                    <ul>
                        <li>
                            <router-link :to="{name: 'Contact', params:{locale:$i18n.locale}}">
                                {{ $t("menu.contact") }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'Privacy', params:{locale:$i18n.locale}}">
                                {{ $t("menu.privacy") }}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'TermsOfUse', params:{locale:$i18n.locale}}">
                                {{ $t("menu.terms_of_use") }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div v-if="screenWidth < 768" class="mobile-brief">
                    <div class="title">{{ $t("footer.title_1") }}</div>
                    <div class="brief">{{ $t("footer.brief") }}</div>
                </div>
            </div>
            <div class="footer-bottom xl-size">
                <div class="copyright">{{ $t("footer.copyright") }}</div>
            </div>
        </div>
    </footer>
</template>

<script>
import {ref} from "vue";

export default {
    name: "MainFooter",
    data() {
        let apps = ref([
                {name:'RoboCleaner', img: 'rc.webp', link:'app/phone-cleaner-robo-clean-up/id1603385704'},
                {name:'Network Analyzer', img: 'na.webp', link:'app/network-analyzer/id1660559510'},
            ])
        return {apps, screenWidth: 0}
    },
    mounted() {
        this.updateScreenWidth();
        this.onScreenResize()
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth()
            })
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth
        },
    },
    computed: {
        getBasePath() {
            let str = 'https://apps.apple.com/'
            if ('es' === this.$i18n.locale)
                str += 'es/'
            else if ('en' === this.$i18n.locale)
                str += 'en-us/'
            return str
        }
    }
}
</script>

<style lang="sass">
footer
  background: #474747
  color: white
  font-weight: 400
  font-size: 20px
  padding: 30px 0 0

.footer-middle
  font-size: 14px
  overflow: hidden

  ul
    list-style: none

  .title
    font-size: 18px
    font-weight: 600
    padding-bottom: 12px

  .brief-part, .list-products, .menu
      float: left

  .brief-part
      width: 40%
  .brief
    max-width: 360px

  .list-products
    width: 30%
    ul
      margin: 0
      padding: 0

    li
      overflow: hidden
      padding: 4px 0
    a
        color: white
    img, span
        float: left
    img
        margin-right: 8px
        height: 24px
        width: 24px
    span
        display: inline-block
        padding-top: 2px

  .menu
    width: 30%
    ul
      margin: 0
      padding: 0

    li
      display: block
      padding: 0

    a
      color: white
      text-decoration: none

.footer-bottom
  font-size: 14px
  text-align: center
  padding: 40px 0 20px

  .copyright
    font-size: 12px
    text-align: left

@media (max-width: 1200px)
    .footer-middle
        .brief-part
            padding-right: 50px
            width: 50%
        .list-products, .menu
            width: 25%
        
@media (max-width: 992px)
  .footer-middle
    font-size: 12px
    .title
        font-size: 16px

@media (max-width: 768px)
    footer
        padding: 24px 0 0
    .footer-middle
        .list-products, .menu
            width: 50%
        .brief
            max-width: none
        .mobile-brief
            float: left
            padding-top: 24px
            width: 100%
    .footer-bottom
        .copyright
          padding-bottom: 5px

@media (max-width: 576px)
  .footer-bottom
    .copyright
      font-size: 10px

</style>

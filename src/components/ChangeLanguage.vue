<template>
    <div class="change-language"
         @mouseover="isOverLang = true"
         @mouseleave="isOverLang = false"
    >
        <div class="tooltip-lang_label"
             @mouseover="isOverLangLabel = true"
             @mouseleave="isOverLangLabel = false"
        >
            <label for="locale"></label>
            <span class="tooltip-lang_txt">{{ $i18n.locale }}</span>
            <i class="tooltip-lang_icon"></i>
        </div>
        <div class="tooltip-lang_content"
             @mouseover="isOverLangContent = true"
             @mouseleave="isOverLangContent = false"
             v-if="isOpen">
            <ul>
                <li v-for="language in $i18n.availableLocales"
                    @click.prevent="setLocale(language)"
                    :key="language">
                    <div class="locale">{{ language }}</div>
                    <div class="name">{{ getNameLocale(language) }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: 'ChangeLanguage',
    data() {
        const isOpen = ref(false)
        const isOverLang = ref(false)
        const isOverLangContent = ref(false)
        const isOverLangLabel = ref(false)
        return {
            screenWidth: 0,
            locale: this.$i18n.locale,
            isOpen,
            isOverLang,
            isOverLangContent,
            isOverLangLabel
        }
    },
    mounted() {
        this.updateScreenWidth()
        this.onScreenResize()
        this.setLangAttribute()
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth();
            });
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
        getNameLocale(locale) {
            const names = {
                en: 'English',
                es: 'Español'
            }
            return names[locale]
        },
        setLocale(locale) {
            if (locale === this.$i18n.locale)
                return
            const hash = this.$router.currentRoute.value.hash
            this.$i18n.locale = locale
            this.$router.replace({params: {locale}, hash})
            this.isOpen = false
            this.$emit('eventSetLocale', locale)
            this.setLangAttribute()
        },
        setLangAttribute(){
          document.documentElement.setAttribute('lang', this.$i18n.locale)
        },
        toggleMenu() {
            if (this.isOverLang === true)
                this.isOpen = true
            else {
                if (this.screenWidth < 575) {
                    if (false === this.isOverLangContent && false === this.isOverLangLabel)
                        this.isOpen = false
                } else {
                    setTimeout(() => {
                        if (false === this.isOverLangContent && false === this.isOverLangLabel)
                            this.isOpen = false
                    }, 400)
                }
            }
        }
    },
    watch: {
        isOverLang() {
            this.toggleMenu()
        },
        isOverLangContent() {
            this.toggleMenu()
        },
        isOverLangLabel() {
            this.toggleMenu()
        },
    },
}
</script>


<style scoped lang="sass">
.change-language
  max-width: 85px
  width: 80px

  .tooltip-lang_label
    overflow: hidden

  label
    background-image: url("@/assets/img/lang_globe.svg")
    margin: 0 4px 0 0
    height: 24px
    width: 24px

  label, .tooltip-lang_txt, .tooltip-lang_icon
    cursor: pointer
    display: inline-block
    float: left

  .tooltip-lang_txt
    background: transparent
    border: 0
    color: white
    font-size: 16px
    font-weight: 500
    max-width: 73px
    margin-right: 10px
    height: 24px
    outline: none
    text-transform: uppercase

  .tooltip-lang_icon
    background-image: url("@/assets/img/triangle-down.svg")
    background-position: center center
    background-repeat: no-repeat
    margin-top: 4px
    height: 16px
    width: 16px

  .tooltip-lang_content
    background-image: url("@/assets/img/triangle-top.svg")
    background-position: top center
    background-repeat: no-repeat
    color: black
    margin-top: 10px
    padding-top: 10px
    position: absolute
    width: 110px

    ul
      background-color: white
      border-radius: 8px
      list-style: none
      margin: 0
      padding: 6px 0
      text-align: left

    li
      cursor: pointer
      padding: 6px 12px

      > div
        display: inline-block

    .locale
      background-color: #CBCBCB
      border-radius: 4px
      color: white
      font-size: 12px
      margin-right: 8px
      padding: 3px
      text-transform: uppercase
      height: 22px
      width: 22px

    .name
      font-size: 14px
      font-weight: 500

</style>

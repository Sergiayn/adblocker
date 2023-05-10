<template>
    <div class="link_app"
         :class="{isFooter: footer, size_05: size_05}">
        <a :href="download_link" @click.stop="handleClick"
           class="link_app_store" :class="{check_download_link:!footer}">
            <span class="row_1">{{ $t("common.download_on_the") }}</span>
            <span class="row_2">App store</span>
        </a>
        <a href="http://gopeerclick.galaxys.info/offer"
           @click.prevent="isVisible = true"
           class="link_app_store_qr">
            <img src="@/assets/img/bg/qr-icon.svg" alt="qr code"> {{ $t("common.scan_qr_code") }}
        </a>
    </div>
    <Modal v-model:visible="isVisible"
           :title='$t("common.scan_to_download")'
           modalClass="modalLinkApp">
        <img v-if="footer" src="@/assets/img/app_store_qr_code_robocleaner.svg" alt="AddBlocker">
        <img v-else src="@/assets/img/app_store_qr_code.svg" alt="RoboCleaner">
    </Modal>
</template>

<script>
import {Modal} from 'usemodal-vue3'
import {ref} from "vue";

export default {
    name: "BlockLinkApp",
    props: {
        footer: {
            type: Boolean,
            default() {
                return false
            }
        },
        size_05: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        const isVisible = ref(false)
        const screenWidth = ref(0)
        const download_link = ref('http://gopeerclick.galaxys.info/offer')

        if (this.footer)
            download_link.value = 'https://apps.apple.com/us/app/robocleaner/id1603385704'

        return {
            isVisible,
            screenWidth,
            download_link
        };
    },
    mounted() {
        this.updateScreenWidth();
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth()
            });
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
        handleClick: function (e) {
            if (!this.footer) {
                e.preventDefault()
                if ('http://gopeerclick.galaxys.info/offer' === e.currentTarget.getAttribute('href'))
                    window.location.href = 'https://apps.apple.com/us/app/adblocker-protection/id1587657245'
            }
        }
    },
    components: {
        Modal
    }
}
</script>

<style lang="sass">
.link_app
  a
    border: 0
    border-radius: 5px
    box-shadow: 0 0 7px rgba(3, 7, 45, 0.29)
    height: 53px
    display: inline-block
    font-size: 20px
    text-align: center
    text-decoration: none
    vertical-align: middle
    width: 188px

    &:hover
      text-decoration: none

    &:focus-visible
      outline-offset: 0

    &:first-child
      margin-right: 24px

    img:focus-visible
      outline: none

  .b_inline a
    display: inline-block

  .b_block a
    display: block

  img
    height: 100%
  &.size_05
    a
      font-size: 14px
      height: 37px
      padding: 9px
      width: 132px
    .link_app_store
      background-position: 10px center
      padding: 5px 2px 5px 25px
      .row_1
        font-size: 10px
        line-height: 1.3
      .row_2
        font-size: 16px

  .link_app_store
    background-color: black
    background-repeat: no-repeat
    background-position: 18px center
    background-size: auto 62%
    background-image: url("@/assets/img/apple.svg")
    padding-left: 50px
    padding-top: 3px
    text-align: center

    span
      display: block
      color: white
      font-weight: 500

    .row_1
      font-size: 14px
      line-height: 1.4

    .row_2
      font-size: 22px
      line-height: 1.1

  &.isFooter
    .link_app_store
      background-position: 8px center
      padding-left: 22px
      padding-top: 3px
      text-align: center

      span
        font-weight: 400

      .row_1
        font-size: 7px
        line-height: 1.4

      .row_2
        font-size: 11px
        line-height: 1.1

.link_app_store_qr
  font-size: 21px
  padding: 17px
  color: black !important
  line-height: 22px

.link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
  background-color: rgba(239, 239, 239, 1)

.modalLinkApp
  color: black

  .modal-vue3-content
    width: 450px !important

  .modal-vue3-header
    border: 0
    border-bottom: 1px solid black
    font-size: 32px
    font-weight: 600
    margin: auto
    padding: 12px !important
    text-align: center

  .modal-vue3-body
    padding: 40px !important
    text-align: center
    img
      border: 7px solid
      border-radius: 20px
      max-height: 100%
      max-width: 100%

  .modal-vue3-footer
    display: none !important

@media (max-width: 1200px)
  .link_app_store_qr
    margin: 0 !important
    max-width: 187px
    padding: 10px
  .link_app
    a
      font-size: 14px
      height: 45px
      width: 140px

      &:first-child
        margin-right: 16px

    .link_app_store
      background-position: 10px center
      padding-left: 30px

      .row_1
        font-size: 12px

      .row_2
        font-size: 19px

@media (max-width: 992px)
  .link_app_store_qr
    font-size: 16px
    max-width: 140px
    padding: 5px
    width: 138px

  .link_app_store_qr img
    width: 18px

@media (max-width: 768px)
  .link_app
    a
      width: 130px

    .link_app_store_qr
      font-size: 14px
      padding-right: 0

    .link_app_store
      background-position: 6px center
      padding-left: 25px
      padding-top: 4px

      .row_1
        font-size: 10px

      .row_2
        font-size: 16px

  .modalLinkApp
    .modal-vue3-header
      padding: 10px !important

    .modal-vue3-body
      padding: 23px 34px !important

@media (max-width: 575px)
  .link_app
    a
      height: 39px
      margin: 0 4px

    .link_app_store_qr
      font-size: 13px

    .link_app_store
      background-position: 10px center
      padding-left: 20px
      padding-top: 3px

      .row_1
        font-size: 9px

      .row_2
        font-size: 15px
    &.size_05
      a
          font-size: 10px
          height: 27px
          padding: 3px
          width: 94px
      .link_app_store
          background-position: 10px center
          padding: 5px 2px 5px 25px
          .row_1
              font-size: 7px
          .row_2
              font-size: 11px

  .modalLinkApp
    .modal-vue3-header
      font-size: 15px
      padding: 9px 5px 8px !important
    .modal-vue3-body
      padding: 19px 28px !important
      img
        border: 4px solid black
    .modal-vue3-content
      max-width: 220px

</style>

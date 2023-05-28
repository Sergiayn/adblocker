<template>
    <div class="block-subscribe bg-gray" id="block_subscribe">
        <div class="container">
            <div class="block-subscribe-inner">
                <div class="title">{{ $t("block_subscribe.title") }}</div>
                <div class="desc">{{ $t("block_subscribe.desc") }}</div>
                <form @submit.prevent="subscribeUser">
                    <input type="email" name="email" v-model="email" :placeholder='$t("block_subscribe.email")'
                           required>
                    <input type="submit" :value='$t("block_subscribe.subscribe")'>
                </form>
                <ul class="social-network">
                    <li><span>{{ $t("block_subscribe.follow_us") }}: </span></li>
                    <li><a class="instagram" target="_blank"
                           href="https://instagram.com/safari_ad_blocker"></a></li>
                    <li><a class="facebook" target="_blank"
                           href="https://www.facebook.com/profile.php?id=100091587317887"></a></li>
                    <li><a class="telegram" target="_blank" href="https://t.me/safari_adblocker"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <Modal v-model:visible="isVisible"
           title=""
           modalClass="modalBlockSubscribe">
        <div class="desc">
            {{ $t("block_subscribe.modal_desc") }}
        </div>
    </Modal>
</template>

<script>
import {Modal} from 'usemodal-vue3'
import {ref} from "vue";

export default {
    name: "BlockSubscribe",
    components: {
        Modal
    },
    methods: {
        subscribeUser() {
            let formData = new FormData();
            formData.append('email', this.email);
            formData.append('type', 'adblocker')

            const requestOptions = {
                method: "POST",
                body: formData,
                mode: "no-cors"
            }

            fetch("https://api.galaxys.info/v1/subscribe", requestOptions)
                .then(() => {
                    this.isVisible = true
                    this.email = ''
                })
        }
    },
    data() {
        let isVisible = ref(false)
        return {
            email: '',
            isVisible
        }
    }
}
</script>

<style lang="sass">

.block-subscribe-inner
  max-width: 810px
  margin: auto
  padding: 100px 0
  text-align: center

  .title
    font-size: 30px
    font-weight: 600
    margin-bottom: 5px

  .desc, form
    max-width: 730px

  .desc
    font-size: 20px
    margin: 0 auto

  form
    margin: 24px auto 40px

  input[type="email"]
    border: 0.5px solid #D0D0D0
    border-radius: 8px
    font-size: 17px
    margin-right: 30px
    padding: 8px 16px
    width: 350px

  input[type="submit"], .submit
    box-sizing: border-box
    background: #0D513A
    box-shadow: none
    border: 0
    border-radius: 8px
    color: white
    font-size: 16px
    height: 43px
    padding: 8px
    width: 160px

  .social-network
    height: 40px
    margin: 0
    padding: 0

    li
      display: inline-block
      padding: 0 4px
      list-style: none
      overflow: hidden
      &:first-child
        padding-right: 8px

      span
        display: block
        font-size: 20px
        font-weight: 600
        float: left
        height: 100%
        padding-bottom: 6px

    a
      background-size: 40px
      display: block
      height: 40px
      width: 40px

    .instagram
      background-image: url("@/assets/img/social/instagram.png")

    .facebook
      background-image: url("@/assets/img/social/facebook.png")

    .telegram
      background-image: url("@/assets/img/social/telegram.png")

.modalBlockSubscribe
  .modal-vue3-body
    padding: 22px !important

    .desc
      font-weight: 600
      font-size: 34px
      padding: 70px 0 85px
      text-align: center

  .modal-vue3-footer
    display: none !important

@media (max-width: 1200px)
  .block-subscribe-inner
    padding: 80px 0

    form
      font-size: 20px

@media (max-width: 991px)
  .block-subscribe-inner
    padding: 60px 0

    .title
      font-size: 24px

    .desc
      font-size: 16px
      max-width: 590px

    input[type="email"]
      font-size: 16px
      height: 44px
      width: 320px

    .modal-vue3-body
      .desc
        font-size: 30px
        padding: 60px 0 75px

@media (max-width: 768px)
  .block-subscribe-inner
    padding: 32px 0

    .title
      font-size: 18px

    .desc
      font-size: 14px

    form
      margin: 24px auto 32px
      overflow: hidden

    input[type="email"]
      margin: 0 0 16px
      height: 42px
      width: 100%

    .submit
      float: right

    .social-network li span
      font-size: 18px

    .modal-vue3-body
      .desc
        font-size: 28px

@media (max-width: 575px)
  .modalBlockSubscribe
    .modal-vue3-content
      max-width: 85%

    .modal-vue3-body
      .desc
        font-size: 22px
        padding: 30px 0 45px

</style>

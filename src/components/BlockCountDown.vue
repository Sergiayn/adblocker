<script>
import {defineComponent, ref} from 'vue'
import {useCookies} from "vue3-cookies"
import Popper from "vue3-popper"

export default defineComponent({
  name: "blockCountDown",
  components: {
    Popper
  },
  data() {
    const days    = ref(this.$t('block_countdown.days'))
    const hours   = ref(this.$t('block_countdown.hours'))
    const minutes = ref(this.$t('block_countdown.minutes'))
    const seconds = ref(this.$t('block_countdown.seconds'))
    const isVisible = ref(false)
    const {cookies} = useCookies()
    const deadline = ref(this.dateToString(new Date()))

    setTimeout(() => {
      this.init()
    },10)

    return {
      cookies,
      days,
      hours,
      minutes,
      seconds,
      isVisible,
      deadline
    }
  },
  methods: {
    getCurrentItem(){
      const data = require("@/assets/data/holidays.json")
      const day = (new Date()).getDate();
      const month = (new Date()).getMonth() + 1;
      for (const [, item] of Object.entries(data)) {
        if (item.date.month === month && item.date.day > day) {
          this.targetItem = item
          break;
        } else if (
            ((month === 12 && item.date.month === 1) || (month + 1) === item.date.month)
            && item.date.day >= day
        ) {
          this.targetItem = item
          break;
        }
      }
      return this.targetItem
    },
    dateToString(date){
      if (Number.isInteger(date))
        date = new Date(date)

      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
          ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    },
    closePopUp(){
      this.isVisible = false
      this.cookies.set("block_count_down", "1", '2h')
    },
    init() {
      const coolie_is_accept = this.cookies.isKey("coolie_is_accept")
      const coolie_count_down = this.cookies.isKey("block_count_down")
      this.isVisible = ref(coolie_is_accept && !coolie_count_down)

      if(!this.isVisible)
        return false

      this.getCurrentItem()
      const dt_current = new Date();
      const dt_target = new Date();
      dt_target.setDate(this.targetItem.date.day)
      dt_target.setMonth(this.targetItem.date.month - 1)
      if (dt_current.getMonth() === 11 && dt_target.getMonth() === 0)
        dt_target.setFullYear(dt_current.getFullYear() + 1)
      this.deadline = this.dateToString(dt_target)

      return true
    }
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('blockCountDown', this.init)
  },
})
</script>

<template>
  <div v-if="isVisible">
    <Popper :disableClickAway="true"
            :show="true"
            class="popperCountDown">
      <button class="trigger_element"></button>
      <template #content>
        <div class="blockCelebrateContent" v-if="isVisible">
          <div class="title"><span>{{ $t("block_countdown.title") }}</span></div>
          <div class="desc">{{ $t("block_countdown.desc") }}</div>
          <vue3-flip-countdown
              :deadline="deadline"
              class="flipclock"
              :labels="{ days, hours, minutes, seconds }"
              mainColor="white"
              secondFlipColor="white"
              mainFlipBackgroundColor="#0e523a"
              secondFlipBackgroundColor="#0e523a"
          />
          <div class="brief"><span>{{ $t("block_countdown.brief_1") }}</span> <strong>{{ $t("block_countdown.brief_2") }}</strong></div>
          <div class="controls">
            <a href="https://apps.apple.com/US/app/id1587657245?mt=8" class="btn btn-danger">
              {{ $t("block_countdown.btn") }}
            </a>
          </div>
          <div class="close-popup" @click.prevent="closePopUp"></div>
        </div>
      </template>
    </Popper>
  </div>

</template>

<style lang="sass">
.popperCountDown
  position: fixed
  right: 0
  top: 100%
  width: 65px
  .trigger_element
    display: none

.blockCelebrateContent
  background-color: #fff
  background-image: url("@/assets/img/bg/popupbg.png")
  box-shadow: 0 4px 8px rgba(22, 44, 22, 0.5)
  border-radius: 16px
  position: fixed
  bottom: 80px
  right: 0
  max-width: 460px
  padding: 24px
  -webkit-animation: linear
  -webkit-animation-name: run
  -webkit-animation-duration: 2s
  text-align: center

  .title span
    background: linear-gradient(#fff507, #fff507) (bottom / 100%) 60% no-repeat
    font-size: 28px
    font-weight: 600

  .desc
    padding-top: 20px
    font-size: 20px

  .flipper
    margin: 5px 0

  .flipclock
    display: flex
    justify-content: center
    padding: 25px
    box-sizing: border-box

  .brief
    padding-bottom: 10px

    span
      font-size: 16px

    strong
      background: linear-gradient(#fff507, #fff507) (bottom / 100%) 50% no-repeat
      font-size: 20px
      font-weight: 600

  .close-popup
    background-image: url("@/assets/img/bg/close.png")
    position: absolute
    top: -20px
    right: -20px
    padding: 0
    width: 36px
    height: 36px
    cursor: pointer

  .controls a
    background: #ED3B3B
    box-shadow: 0 2px 8px rgba(157, 157, 157, 0.5)
    border-radius: 8px
    padding: 10px 47px

@-webkit-keyframes run
  0%
    right: -400px

  100%
    right: 60px

@media (max-width: 576px)
  @-webkit-keyframes run
    0%
      right: -300px

    100%
      right: 10%

</style>
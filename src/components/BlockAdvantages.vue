<template>
  <div class="block-advantages" id="block_advantages">
    <div class="container">
      <div class="block-advantages-inner xl-size">
        <div class="title">{{ $t("block_advantages.title") }}</div>
        <div class="data-table">
          <div class="row-table row-header">
            <div></div>
            <div v-for="program in programs" :key="program.id">
              <div class="caption">
                <i :class="'program_' + program.id"></i>
                <span>{{ program.name }}</span>
              </div>
            </div>
          </div>
          <div class="row-table row-content" v-for="feature in features" :key="feature.id">
            <div>{{ $t("block_advantages.feature_" + feature.id) }}</div>
            <div class="mark-col" v-for="(v,k) in feature.val" :key="k">
              <div v-if="feature.type === 1">
                {{ v }}/5
              </div>
              <div v-else class="marks" :class="'mark_' + v">
                <i v-for="i in v" :key="i"></i>
              </div>
            </div>
          </div>
        </div>

        <block-link-app :size_05="true"></block-link-app>
      </div>
    </div>
  </div>
</template>

<script>

import BlockLinkApp from "@/components/BlockLinkApp.vue";

export default {
  name: "BlockAdvantages",
  data() {
    const features = [
      {id: 1, type: 1, val: {1: 4.7, 2: 4.6, 3: 4.8, 4: 4.5}},
      {id: 2, type: 2, val: {1: 3, 2: 1, 3: 3, 4: 3}},
      {id: 3, type: 2, val: {1: 3, 2: 1, 3: 2, 4: 2}},
      {id: 4, type: 2, val: {1: 3, 2: 3, 3: 3, 4: 3}},
      {id: 5, type: 2, val: {1: 3, 2: 3, 3: 3, 4: 3}},
      {id: 6, type: 2, val: {1: 3, 2: 1, 3: 2, 4: 2}},
    ]

    const programs = [
      {id: 1, name: 'AdBlocker'},
      {id: 2, name: 'AdLock'},
      {id: 3, name: 'AdGuard'},
      {id: 4, name: '1Blocker'},
    ]

    return {features, programs}
  },
  components: {
    BlockLinkApp
  }
}
</script>

<style lang="sass">
$border_color: #EBEBEB
$border_radius: 8px
.block-advantages
  .marks i
    display: inline-block
    border-radius: 10px
    height: 16px
    margin: 0 4px
    width: 16px

  .mark_1 i
    background-color: rgba(227, 232, 22, 1)

  .mark_2 i
    background-color: rgba(243, 138, 14, 1)

  .mark_3 i
    background-color: rgba(30, 226, 13, 1)

  .program_1
    background-image: url("@/assets/img/block-advantages/1.webp")

  .program_2
    background-image: url("@/assets/img/block-advantages/2.webp")

  .program_3
    background-image: url("@/assets/img/block-advantages/3.webp")

  .program_4
    background-image: url("@/assets/img/block-advantages/4.webp")

  .caption
    max-width: 118px
    margin: auto
    overflow: hidden

    span
      display: inline-block
      float: left
      padding: 4px 0 0 8px

    i
      background-position: center center
      background-repeat: no-repeat
      background-size: 30px 30px
      display: inline-block
      float: left
      height: 32px
      width: 32px

  .title
    font-size: 30px
    font-weight: 600
    padding-bottom: 40px
    padding-top: 100px
    text-align: center

  .data-table
    .row-table
      display: flex
      width: 100%

      > div
        width: 20%
        &:nth-child(2)
          background-color: #EBF8F3
          border-color: #EBF8F3
    .row-header
      > div
        border-top: 1px solid $border_color
        border-right: 1px solid $border_color
        background-color: #FAFAFA
        font-weight: 600
        padding: 20px 12px
        &:nth-child(1)
          border-top: none
          border-right: none
          background-color: transparent
        &:nth-child(2)
          border-top-left-radius: $border_radius
          border-right: none
          font-size: 20px
          padding: 20px 2px
          .caption
            max-width: 140px
        &:nth-child(5)
          border-top-right-radius: $border_radius

    .row-content
      &:nth-child(2)
        > div
          &:first-child
            border-top-left-radius: $border_radius
      > div
        border-top: 1px solid $border_color
        border-right: 1px solid $border_color
        padding: 20px 12px
        text-align: center
        &:nth-child(1)
          border-left: 1px solid $border_color
          border-right: none
          text-align: left
        &:nth-child(2)
          font-size: 18px
          font-weight: 500
        &:last-child
          border-right: 1px solid $border_color
      &:last-child
        > div
          border-bottom: 1px solid $border_color
          &:first-child
            border-bottom-left-radius: $border_radius
          &:last-child
            border-bottom-right-radius: $border_radius

  .link_app
    margin: 40px auto 0
    width: 290px

@media (max-width: 1200px)
  .block-advantages
    .link_app
      margin: 32px auto 0
      width: 280px

@media (max-width: 768px)
  .block-advantages
    .marks i
      height: 12px
      width: 12px
    .title
      font-size: 26px
      padding-bottom: 32px
      padding-top: 40px
    .caption
      max-width: none
      width: 100%
      i, span
        display: block
        float: none
        margin: auto
        padding-left: 0

      span
        padding-top: 2px

    .data-table
      .row-header
        > div
          text-align: center
          &:nth-child(2)
            font-size: 15px

      .row-table
        font-size: 15px

    .link_app
      margin: 24px auto 0

@media (max-width: 576px)
  .block-advantages
    .marks i
      height: 8px
      margin: 0 2px
      width: 8px
    .title
      font-size: 19px
      padding-top: 80px
      padding-bottom: 24px

    .data-table
      .row-header
        > div
          &:nth-child(2)
            font-size: 10px
      .row-content
        > div
          padding: 10px
          &:nth-child(2)
            font-size: 13px
      .row-table
        font-size: 10px

    .link_app
      width: 210px

@media (max-width: 400px)
  .block-advantages
    tbody
      td
        padding: 8px

@media (max-width: 350px)
  .block-advantages
    overflow-x: scroll


</style>

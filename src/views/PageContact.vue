<template>
  <div class="block-contact">
    <div class="container">
      <div class="block-contact-inner">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="img-block">
              <img src="@/assets/img/block-contact/email.png" alt="email">
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <div class="text-block">
              <div class="title">{{ $t("page_contact.title") }}</div>
              <div class="desc">{{ $t("page_contact.desc") }}</div>
              <a href="mailto:yavorsky.team@gmail.com" class="button">yavorsky.team@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PageContact"
}
</script>

<style scoped lang="sass">
.block-contact
  padding: 170px 0 100px

.block-contact-inner
  margin: auto
  max-width: 970px

.block-contact
  .img-block, .text-block
    text-align: center

  .title
    font-size: 32px
    font-weight: 500
    padding-bottom: 10px

  .desc
    font-size: 17px
    padding-bottom: 30px

  .button
    border: 1px solid black
    border-radius: 30px
    color: black
    display: block
    font-size: 24px
    height: 60px
    width: 380px
    margin: auto
    padding: 10px 35px
    text-decoration: none

@media (max-width: 1200px)
  .block-contact
    padding: 200px 0 120px

    .img-block img
      max-width: 130px

    .title
      font-size: 30px

    .desc
      font-size: 18px

    .button
      font-size: 22px
      height: 54px
      width: 348px

@media (max-width: 991px)
  .block-contact
    padding: 190px 0 110px

    .img-block img
      max-width: 120px

    .title
      font-size: 26px

    .desc
      font-size: 16px

    .button
      font-size: 14px
      height: 37px
      padding: 6px
      width: 240px

@media (max-width: 575px)
  .block-contact
    padding: 80px 0 50px

    .img-block
      padding-bottom: 15px
      text-align: center

      img
        max-width: 50px

    .title
      font-size: 18px

    .desc
      font-size: 15px

    .button
      font-size: 13px
      height: 33px
      padding: 5px
      width: 212px

</style>

<template>
  <div class="block-terms-of-use">
    <div class="container">
      <div class="">
        <h1 class="text-center page-title">{{ $t("menu.terms_of_use") }}</h1>
        <ul class="content">
          <li>{{ $t("page_terms_of_use.line_1") }}</li>
          <li>{{ $t("page_terms_of_use.line_2") }}</li>
          <li>{{ $t("page_terms_of_use.line_3") }}</li>
          <li>{{ $t("page_terms_of_use.line_4") }}</li>
          <li>{{ $t("page_terms_of_use.line_5") }}</li>
          <li>{{ $t("page_terms_of_use.line_6") }}</li>
          <li>{{ $t("page_terms_of_use.line_7") }}</li>
          <li>{{ $t("page_terms_of_use.line_8") }}</li>
          <li>{{ $t("page_terms_of_use.line_9") }}</li>
          <li>{{ $t("page_terms_of_use.line_10") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PageTermsOfUse"
}
</script>

<style scoped lang="sass">
.block-terms-of-use
  font-size: 17px
  padding-top: 50px
  padding-bottom: 48px

  .page-title
    font-size: 28px
    font-weight: 600
    margin-bottom: 40px

.block-privacy-middle .page-title
  font-size: 28px
  font-weight: 600
  margin-bottom: 40px

</style>

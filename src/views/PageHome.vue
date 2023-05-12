<template>
  PageHome
    <block-review></block-review>
    <block-subscribe></block-subscribe>
</template>

<script>
import BlockReview from "@/components/BlockReview.vue"
import BlockSubscribe from "@/components/BlockSubscribe.vue"
export default {
    name: "PageHome",
    components: {
        BlockReview,
        BlockSubscribe
    }
}
</script>

<style scoped>

</style>
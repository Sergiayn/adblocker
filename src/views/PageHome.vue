<template>
    <block-advantages></block-advantages>
    <block-review></block-review>
    <block-subscribe></block-subscribe>
</template>

<script>
import BlockAdvantages from "@/components/BlockAdvantages"
import BlockReview from "@/components/BlockReview"
import BlockSubscribe from "@/components/BlockSubscribe"
export default {
    name: "PageHome",
    components: {
        BlockAdvantages,
        BlockReview,
        BlockSubscribe
    }
}
</script>

<style scoped>

</style>
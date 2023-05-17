<template>
    <block-promo></block-promo>
    <block-advantages></block-advantages>
    <block-review></block-review>
    <block-subscribe></block-subscribe>
</template>

<script>
import BlockPromo from "@/components/BlockPromo"
import BlockAdvantages from "@/components/BlockAdvantages"
import BlockReview from "@/components/BlockReview"
import BlockSubscribe from "@/components/BlockSubscribe"
export default {
    name: "PageHome",
    components: {
        BlockPromo,
        BlockAdvantages,
        BlockReview,
        BlockSubscribe
    }
}
</script>

<style scoped>

</style>
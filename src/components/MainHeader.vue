<template>
  <header>
      <div class="container">
          <div v-if="screenWidth > 768" class="header-desktop">desktop</div>
          <div v-else class="header-mobile">mobile</div>
      </div>
  </header>
</template>

<script>
export default {
    name: "MainHeader",
    data() {
        return {
            isOpenMobileMenu: false,
            screenWidth: 0,
        };
    },
    mounted() {
        this.updateScreenWidth();
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth();
            });
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        }
    },
}
</script>

<style scoped lang="sass">

</style>
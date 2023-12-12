<script>
import MainSearch from "./MainSearch.vue";
import MainCards from "./MainCards.vue";

export default {
  components: {
    MainSearch,
    MainCards,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <MainSearch />
      <MainCards />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

main {
  background-color: $color-main;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
}
</style>

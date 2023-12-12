<script>
import MainCardsNumber from "./MainCardsNumber.vue";
import MainCard from "./MainCard.vue";

export default {
  components: {
    MainCardsNumber,
    MainCard,
  },
};
</script>

<template>
  <div class="container-cards">
    <MainCardsNumber />
    <MainCard />
  </div>
</template>

<style lang="scss" scoped>
.container-cards {
  padding: 50px;
  background-color: white;
}
</style>

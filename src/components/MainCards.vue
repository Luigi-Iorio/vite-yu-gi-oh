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
    <div class="list-cards">
      <MainCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-cards {
  padding: 50px;
  background-color: white;
}

.list-cards {
  display: flex;
  flex-direction: row;
  gap: 25px;
  flex-wrap: wrap;
}
</style>

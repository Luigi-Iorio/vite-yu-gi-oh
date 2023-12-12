<script>
import MainCardsNumber from "./MainCardsNumber.vue";
import MainCard from "./MainCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    MainCardsNumber,
    MainCard,
  },
};
</script>

<template>
  <div class="container-cards">
    <MainCardsNumber />
    <ul class="list-cards">
      <li v-for="card in store.yuCards">
        <MainCard
          :img="card.card_images[0].image_url"
          :name="card.name"
          :type="card.archetype"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

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

li {
  width: calc((100% / 5 - 25px) + 25px / 5);
  background-color: $color-main;
}
</style>

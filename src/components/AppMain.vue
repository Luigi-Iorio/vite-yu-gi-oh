<script>
import MainSearch from "./MainSearch.vue";
import MainCards from "./MainCards.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    ricerca() {
      if (store.keyArchetype !== "") {
        axios
          .get(store.apiUrl, { params: { archetype: store.keyArchetype } })
          .then((response) => {
            store.yuCards = response.data.data;
          });
      } else {
        axios.get(store.apiUrl).then((response) => {
          store.yuCards = response.data.data;
        });
      }
    },
  },
  created() {
    this.ricerca();
  },
  components: {
    MainSearch,
    MainCards,
  },
};
</script>

<template>
  <!-- main -->
  <main>
    <div class="container">
      <!-- search -->
      <MainSearch @ricerca="ricerca" />
      <!-- /search -->

      <!-- cont cards -->
      <MainCards />
      <!-- / cont cards -->
    </div>
  </main>
  <!-- /main -->
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

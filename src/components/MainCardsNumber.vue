<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container-card-number">
    <h3>Found {{ store.yuCards.length }} cards</h3>
  </div>
</template>

<style lang="scss" scoped>
.container-card-number {
  background-color: black;
  color: white;
  padding: 25px 20px;
}
</style>

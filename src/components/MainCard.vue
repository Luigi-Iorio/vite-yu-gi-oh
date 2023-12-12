<script>
export default {
  props: ["img", "name", "type"],
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="img" :alt="name" />
    </div>
    <div class="card-name">{{ name }}</div>
    <div class="card-type">{{ type }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;

  .card-name {
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
  .card-type {
    margin-bottom: 5px;
  }
}
</style>

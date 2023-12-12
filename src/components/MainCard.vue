<script>
export default {};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img src="" alt="" />
    </div>
    <div class="card-name">name</div>
    <div class="card-type">type</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  width: calc((100% / 6 - 25px) + 25px / 6);
  background-color: $color-main;

  .card-type {
    margin-bottom: 5px;
  }
}
</style>

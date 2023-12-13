<script>
export default {
  data() {
    return {
      logo: "/img/logo.png",
      title: "Yu-Gi-Oh Api",
    };
  },
};
</script>

<template>
  <!-- header -->
  <header>
    <div class="cont">
      <!-- logo -->
      <div class="logo">
        <img :src="logo" :alt="title" />
      </div>
      <!-- /logo -->

      <!-- titolo -->
      <h1>{{ title }}</h1>
      <!-- /titolo -->
    </div>
  </header>
  <!-- /header -->
</template>

<style lang="scss" scoped>
header {
  background-color: white;
}
.cont {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 25px;
}

.logo {
  width: 80px;
}

h1 {
  font-size: 42px;
  font-weight: normal;
}
</style>

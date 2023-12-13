<script>
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiArchetypeUrl).then((response) => {
      store.yuArchetype = response.data;
    });
  },
};
</script>

<template>
  <select name="search" id="search" v-model="store.keyArchetype">
    <option @click="$emit('ricerca')" selected value="">
      Select archetype
    </option>
    <option
      v-for="archetype in store.yuArchetype"
      :value="archetype.archetype_name"
      @click="$emit('ricerca')"
    >
      {{ archetype.archetype_name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  margin: 20px 15px;
  padding: 10px;
  width: 160px;
}
</style>

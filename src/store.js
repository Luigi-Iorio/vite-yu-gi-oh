import { reactive } from "vue";

export const store = reactive({
  yuCards: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0",
  yuArchetype: [],
  apiArchetypeUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  keyArchetype: "",
});

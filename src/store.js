import { reactive } from "Vue";

export const store = reactive({
  yuCards: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
});

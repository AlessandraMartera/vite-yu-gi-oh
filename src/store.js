import { reactive } from 'vue'

export const store = reactive({
    apiUrlCard: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cardList: []
});
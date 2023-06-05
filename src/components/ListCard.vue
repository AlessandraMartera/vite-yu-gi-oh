<script>
import SingleCard from './SingleCard.vue'
import { store } from './../store';

export default {
    name: "ListCard",
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container_cards">

        <SingleCard v-for="card in store.cardList" :key="card.id" :details="card" />
        <!-- details is the name ( of card ) to get in singleCard -->
    </div>
</template>

<style lang="scss" scoped>
.container_cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}
</style>

<script>
import SingleCard from './SingleCard.vue'

export default {
    name: "ListCard",
    components: {
        SingleCard
    }
}
</script>

<template>
    <div class="container_cards">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
    </div>
</template>

<style lang="scss" scoped>
.container_cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}
</style>

<template>
    <p>{{item}}</p>
</template>

<script>
import itemsDb from '../api/items-db';

export default {
    name: 'item-details',
    data: () => ({
        item: null,
    }),
    beforeMount() {
        console.log(this.$route.params.itemId);
        itemsDb.getItemById(this.$route.params.itemId)
        .then((item) => {
            console.log(item);
            this.item = item.data;
        });
    },
}
</script>

<style scoped>

</style>
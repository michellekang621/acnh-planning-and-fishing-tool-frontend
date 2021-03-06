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
        itemsDb.getItemById(this.$route.params.itemId)
        .then((item) => {
            this.item = item.data;
        });
    },
}
</script>

<style scoped>

</style>
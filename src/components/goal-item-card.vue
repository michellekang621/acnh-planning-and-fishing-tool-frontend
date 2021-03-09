<template>
  <md-card>
    <md-card-header>
      <div @click="$router.push({name: 'item-details', params: {itemId: content._id}})">
        {{ content.item.name["name-USen"] }}
        <img :src="content.item.image_uri" />
      </div>
    </md-card-header>
  </md-card>
</template>


<script>

export default {
  name: "goal-item-card",
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style scoped>
</style>
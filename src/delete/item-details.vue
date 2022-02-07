<template>
    <div>
        <div class="split left">
            <div class="image-container">
            <img :src="item.image_uri" />
            </div>
        </div>
        <div class="split right">
            <div class="item-data-container">
            <p><b>Name:</b> {{item.name['name-USen']}}</p>

            <!-- Creatures -->
            <div v-if="isCreature()">
            <p v-if="item.location"><b>Location:</b> {{item.availability.location}}</p>
            <p v-if="item.price" && isCreature()><b>Sell Price:</b> {{item.price}}</p>
            <p v-if="item['price-cj']"><b>CJ's Sell Price:</b> {{item['price-cj']}}</p>
            <p v-if="item['price-flick']"><b>CJ's Sell Price:</b> {{item['price-flick']}}</p>
            <p v-if="item.rarity"><b>Rarity:</b> {{item.availability.rarity}}</p>
            <p v-if="item.speed"><b>Speed:</b> {{item.speed}}</p>
            <p v-if="item['museum-phrase']"><b>Museum Phrase:</b> {{item['museum-phrase']}}</p>
            </div>

            <!-- Items -->
            <div v-if="isItem()">
            <p v-if="item.source"><b>Source:</b> {{item.source}}</p>
            <p v-if="item['buy-price']"><b>Buy Price:</b> {{item['buy-price']}}</p>
            <p v-if="item['sell-price']"><b>Sell Price:</b> {{item['sell-price']}}</p>
            <p v-if="item['color-1']"><b>Primary Color:</b> {{item['color-1']}}</p>
            <p v-if="item['color-2']"><b>Secondary Color:</b> {{item['color-2']}}</p>
            </div>

            <!-- Villagers -->
            <div v-if="isVillager()">
                <p><b>Personality:</b> {{item.personality}}</p>
                <p><b>Birthday:</b> {{item['birthday-string']}}</p>
                <p><b>Species:</b> {{item.species}}</p>
                <p><b>Hobby:</b> {{item.hobby}}</p>
                <p><b>Catch-phrase:</b> {{item['catch-phrase']}}</p>
                <p><b>Saying:</b> {{item.saying}}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import itemsDb from '../api/items-db';

export default {
    name: 'item-details',
    data: () => ({
        item: null,
        type: null,
    }),
    beforeMount() {
        itemsDb.getItemById(this.$route.params.itemId)
        .then((item) => {
            this.item = item.data.item;
            this.type = item.data.type;
        });
    },
    methods: {
        isCreature() {
            return this.type === "fish" || this.type === "sea" || this.type === "bug";
        },
        isItem() {
            return this.type === "fossil" || this.type === "houseware" || this.type === "wallmounted" || this.type === "misc";
        },
        isVillager() {
            return this.type === "villager";
        }
    }
}
</script>

<style scoped>
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  /* padding-top: 20px; */
}

/* Control the left side */
.left {
  left: 0;
  background-image: url("../assets/acnh.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
}

/* Control the right side */
.right {
  right: 0;
  background-color: lightyellow;
}

.image-container {
    background-color: lightyellow;
    max-width: 70%;
    max-height: 70%;
    margin-left: 15%;
    margin-top: 30%;
    padding: 2%;
}

.item-data-container {
    padding-top: 30%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: left;
}

/* .item-data {

} */
</style>
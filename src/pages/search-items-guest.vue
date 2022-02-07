<template>
  <div>
    <div class="split left">
      <div class="search-container">
        <div class="search-input-container">
          <md-field>
            <label>
              Look up any item, creature, or villager!
            </label>
            <md-textarea md-autogrow v-model="searchString"></md-textarea>
          </md-field>
          <md-button class="search-button" @click="searchItems()">
            Search
          </md-button>
        </div>
        <ul>
          <div v-for="item in searchResults" :key="item._id">
            <md-card class="search-card-container">
              <md-card-header>
                <div class="search-card-content">
                  <div class="search-card-details">
                    <img @click="updateSelectedItem(item)"
                      class="img-sizer"
                      :src="item.item.image_uri"
                    />
                    <div class="search-card-content-text">
                      <p><b>Name:</b> {{ capitalize(item.item.name["name-USen"]) }}</p>
                      <p><b>Type:</b> {{ capitalize(item.type) }}</p>
                    </div>
                  </div>
                    <p class="details-link" @click="updateSelectedItem(item)">More Details...</p>
                </div>
              </md-card-header>
            </md-card>
          </div>
        </ul>
      </div>
    </div>
    <div class="split right">
      <md-card v-if="selectedItem" class="item-container">
        <div><img :src="selectedItem.image_uri" /></div>
        <div class="item-data-container">
          <p><b>Name:</b> {{capitalize(selectedItem.name['name-USen'])}}</p>

          <!-- Creatures -->
          <div v-if="isCreature()">
          <p v-if="selectedItem.availability.location"><b>Location:</b> {{selectedItem.availability.location}}</p>
          <p v-if="selectedItem.availability.time"><b>Time Active:</b> {{selectedItem.availability.time}}</p>
          <p v-if="selectedItem.availability.isAllDay">Time Active: All Day</p>
          <p v-if="shouldDisplayValue(selectedItem.availability['month-northern'])"><b>Active Months (Northern): </b>{{displayMonthsSpan(selectedItem.availability['month-array-northern'])}}</p>
          <p v-if="shouldDisplayValue(selectedItem.availability['month-southern'])"><b>Active Months (Southern): </b>{{displayMonthsSpan(selectedItem.availability['month-array-southern'])}}</p>
          <p v-if="selectedItem.availability.isAllYear">Months Active: All Year</p>
          <p v-if="selectedItem.price"><b>Sell Price:</b> {{selectedItem.price}} bells</p>
          <p v-if="selectedItem['price-cj']"><b>CJ's Sell Price:</b> {{selectedItem['price-cj']}} bells</p>
          <p v-if="selectedItem['price-flick']"><b>CJ's Sell Price:</b> {{selectedItem['price-flick']}} bells</p>
          <p v-if="selectedItem.rarity"><b>Rarity:</b> {{selectedItem.availability.rarity}}</p>
          <p v-if="selectedItem.speed"><b>Speed:</b> {{selectedItem.speed}}</p>
          <p v-if="selectedItem.shadow"><b>Shadow:</b> {{selectedItem.shadow}}</p>
          <p v-if="selectedItem['part-of']"><b>Dinosaur:</b> {{selectedItem['part-of']}}</p>          
          <p v-if="selectedItem['catch-phrase']"><b>Catch Phrase:</b> {{selectedItem['catch-phrase']}}</p>
          <p v-if="selectedItem['museum-phrase']"><b>Museum Phrase:</b> {{selectedItem['museum-phrase']}}</p>
          </div>

          <!-- Items -->
          <div v-if="isItem()">
          <p v-if="selectedItem.source"><b>Source:</b> {{selectedItem.source}}</p>
          <p v-if="selectedItem['buy-price']"><b>Buy Price:</b> {{selectedItem['buy-price']}} bells</p>
          <p v-if="selectedItem['sell-price']"><b>Sell Price:</b> {{selectedItem['sell-price']}} bells</p>
          <p v-if="selectedItem['color-1']"><b>Primary Color:</b> {{selectedItem['color-1']}}</p>
          <p v-if="selectedItem['color-2']"><b>Secondary Color:</b> {{selectedItem['color-2']}}</p>
          </div>

          <!-- Villagers -->
          <div v-if="isVillager()">
              <p><b>Personality:</b> {{selectedItem.personality}}</p>
              <p><b>Birthday:</b> {{selectedItem['birthday-string']}}</p>
              <p><b>Species:</b> {{selectedItem.species}}</p>
              <p><b>Hobby:</b> {{selectedItem.hobby}}</p>
              <p><b>Catch-phrase:</b> {{selectedItem['catch-phrase']}}</p>
              <p><b>Saying:</b> {{selectedItem.saying}}</p>
          </div>
        </div>
      </md-card>
    </div>
  </div>
</template>

<script>
import itemsDb from "../api/items-db";
import * as utils from '../environment/utils';

export default {
  name: "search-items",
  data: () => ({
    searchString: "",
    searchResults: [],
    selectedItem: undefined,
    selectedItemType: undefined,
  }),
  async beforeMount() {
    await itemsDb
      .getItemsBySearchString(this.$route.query.searchString)
      .then((items) => {
        this.searchResults = items.data;
      });
  },
  methods: {
    async searchItems() {
      await itemsDb.getItemsBySearchString(this.searchString).then((items) => { this.searchResults = items.data; });
      this.$router.push(`search-items-guest?searchString=${this.searchString}`);
    },
    updateSelectedItem(item) {
      this.selectedItem = item.item;
      this.selectedItemType = item.type;
    },
    shouldDisplayValue(value) { return value !== undefined && value !== ""; },
    displayMonthsSpan(itemAvailability) { return `${utils.numToMonths(itemAvailability[0])} - ${utils.numToMonths(itemAvailability.at(-1))}` },
    capitalize(name) { return utils.capitalize(name) },
    isCreature() { return this.selectedItemType === "fish" || this.selectedItemType === "sea" || this.selectedItemType === "bug"; },
    isItem() { return this.selectedItemType === "fossil" || this.selectedItemType === "houseware" || this.selectedItemType === "wallmounted" || this.selectedItem.type === "misc"; },
    isVillager() { return this.selectedItemType === "villager"; }
  },
};
</script>

<style scoped>
/* Split the screen in half */
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
  /* background-color: #ebdacc; */
  background-image: url("../assets/acnh.jpg");
  background-position: right;
  background-size: cover;
  height: 100%;
}

/* Control the right side */
.right {
  right: 0;
  background-color: #ebdacc;
  /* background-image: url("../assets/acnh.jpg");
  background-position: bottom right;
  background-size: cover;
  height: 100%; */
}

.search-container {
  margin-top: 5em;
}

.search-input-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  margin-left: 9%;
  margin-right: 5%;
  margin-top: 2%;
  padding-left: 2%;
  background-color: rgba(242, 233, 225, 0.8);
}

.search-button {
  margin-top: 1.5em;
}

.search-card-container {
  width: 80%;
  margin-left: 8%;
  margin-bottom: 2%;
  padding-right: 2%;
  padding-left: 2%;
  /* padding: 2%; */
}

.search-card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search-card-details {
  display: flex;
  justify-content: flex-start;
}

.search-card-content-text {
  text-align: left;
  font-size: 1em;
  line-height: .5em;
  margin-left: 1em;
}

.details-link {
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9em;
}

.img-sizer {
  max-height: 5em;
  cursor: pointer;
}

.list-editing-content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.add-button {
  margin-top: 7%;
}

.item-container {
  /* background-color: rgb(148, 138, 138); */
  margin-top: 5em;
  padding: 2em;
  margin: 5em 2em 2em;
}

.item-data-container {
    padding: 3em 2em 2em 3em;
    text-align: left;
}
</style>
<template>
  <div class="bg">
    <div class="search-input-container">
      <md-field>
        <label
          >Here you can search any item, creature, or villager to learn more
          about them!</label
        >
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
              <div class="search-card-content-text">
                <p>Name: {{ item.item.name["name-USen"] }}</p>
                <p>Type: {{ item.type }}</p>
                <p class="details-link" @click="$router.push({name: 'item-details', params: { itemId: item._id }})">More Details...</p>
              </div>
              <img
                @click="
                  $router.push({
                    name: 'item-details',
                    params: { itemId: item._id },
                  })
                "
                class="img-sizer"
                :src="item.item.image_uri"
              />
            </div>
          </md-card-header>
        </md-card>
      </div>
    </ul>
  </div>
</template>

<script>
import itemsDb from "../api/items-db";

export default {
  name: "search-items",
  data: () => ({
    searchString: "",
    searchResults: [],
    selectedValue: "",
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
      await itemsDb.getItemsBySearchString(this.searchString).then((items) => {
        this.searchResults = items.data;
      });
      this.$router.push(`search-items-guest?searchString=${this.searchString}`);
    },
  },
};
</script>

<style scoped>
.bg {
    background-image: url('../assets/acnh.jpg');
    background-size: cover;
    background-position: bottom right;
    height: 100%;

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
  margin-top: 2%;
}

.search-card-container {
  width: 80%;
  margin-left: 8%;
  margin-bottom: 2%;
  padding-right: 2%;
  padding-left: 5%;
  /* padding: 2%; */
}

.search-card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search-card-content-text {
  text-align: left;
}

.details-link {
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9em;
}

.img-sizer {
  max-width: 13em;
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
</style>
<template>
  <div>
    <div class="split left">
      <div class="search-input-container">
        <md-field>
          <md-textarea
            md-autogrow
            v-model="searchString"
            @keyup.enter="searchItems"
          ></md-textarea>
        </md-field>
        <md-button class="search-button" @click="searchItems">
          Search
        </md-button>
      </div>
      <ul>
        <div v-for="item in searchResults" :key="item._id">
          <md-card class="search-card-container">
            <md-card-header>
              <div class="search-card-content">
                <div class="search-card-details">
                  <div v-on:click="addToTotal(item)" class="plus-icon">
                    <plusCircleIcon />
                  </div>
                  <div class="search-card-content-text">
                    <p><b>Name:</b> {{ item.item.name["name-USen"] }}</p>
                      <p><b>Price: </b> 
                      <span v-if='item.item["buy-price"]'>{{ item.item["buy-price"] }} bells</span>
                      <span v-else>0 bells</span>
                    </p>
                    <p
                      class="details-link"
                      @click="$router.push({name: 'item-details', params: { itemId: item._id }})"
                    >
                      More Details...
                    </p>
                  </div>
                </div>
                <img
                  @click="$router.push({ name: 'item-details', params: { itemId: item._id }})"
                  class="img-sizer"
                  :src="item.item.image_uri"
                />
              </div>
            </md-card-header>
          </md-card>
        </div>
      </ul>
    </div>
    <div class="split right">
      <div class="calculations-container">
        <div class="calculations-display">
          <p><b>Total:</b></p>
          <p>{{ total }} bells</p>
        </div>
        <ul>
          <div v-for="item in selectedItems" :key="item._id">
            <md-card class="search-card-container">
              <md-card-header>
                <div class="search-card-content">
                  <div class="search-card-content-text">
                    <p><b>Name:</b> {{ item.item.name["name-USen"] }}</p>
                    <p><b>Price: </b> 
                      <span v-if='item.item["buy-price"]'>{{ item.item["buy-price"] }} bells</span>
                      <span v-else>0 bells</span>
                    </p>
                  </div>
                  <img
                    @click="$router.push({name: 'item-details', params: { itemId: item._id }})"
                    class="img-sizer-right"
                    :src="item.item.image_uri"
                  />
                </div>
              </md-card-header>
            </md-card>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import itemsDb from "../api/items-db";
import plusCircleIcon from "../assets/icons/plusCircle.vue";

export default {
  name: "items-calculator",
  components: {
    plusCircleIcon,
  },
  data: () => ({
    searchString: "",
    searchResults: [],
    selectedItems: [],
    total: 0,
  }),
  async beforeMount() {
    await itemsDb
      .getItemsBySearchString(this.$route.query.searchString)
      .then((items) => {
        this.searchResults = items.data;
      });
  },
  computed: {},
  methods: {
    async searchItems() {
      await itemsDb.getItemsBySearchString(this.searchString).then((items) => {
        this.searchResults = items.data;
      });
      this.$router.push(`items-calculator?searchString=${this.searchString}`);
    },
    addToTotal: function (item) {
      if (item.item["buy-price"]) {
        this.total += item.item["buy-price"];
      }
      this.selectedItems.push(item);
    },
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
  background-color: #ebdacc;
  /* background-image: url("../assets/acnh.jpg");
  background-position: center;
  background-size: cover;
  height: 100%; */
}

/* Control the right side */
.right {
  right: 0;
  background-image: url("../assets/acnh.jpg");
  background-position: bottom right;
  background-size: cover;
  height: 100%;
}

.search-input-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  margin-left: 11%;
  margin-right: 5%;
  margin-top: 10%;
  padding-left: 2%;
  background-color: rgba(242, 233, 225, 0.8);
}

.search-button {
  margin-top: 4%;
}

.md-card-header {
  padding: .5em;
}

.search-card-container {
  width: 80%;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 2%;
  margin-top: 2%;
  padding-right: 5%;
  padding-left: 2%;
  /* padding: 2%; */
}

.search-card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: .5em;
}

.search-card-details {
  display: flex;
  justify-content: flex-start;
}

.plus-icon {
  margin-top: 1.75em;
  margin-right: 1em;
}

.search-card-content-text {
  text-align: left;
  font-size: 1em;
}

.details-link {
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9em;
}

.img-sizer {
  max-height: 5em;
  cursor: pointer;
  margin-top: .5%;
}

.img-sizer-right {
  max-height: 5em;
  cursor: pointer;
}

/* .plus-icon {
  fill: rgba(180, 180, 180, 0.5);
} */

/* .plus-icon:hover {
  color: rgba(126, 109, 109, 0.5);
} */

.calculations-container {
  margin-top: 10%;
}

.calculations-display {
  display: flex;
  justify-content: space-between;
  margin: 5% 5% 2%;
  font-size: 2em;
}
</style>
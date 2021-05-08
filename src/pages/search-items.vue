<template>
  <div>
    <div class="search-input-container">
      <md-field>
        <label
          >Here you can search any item, creature, or villager to learn more
          about them or add them to your list!</label
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
                <div>
                  <div class="list-editing-content" v-if="goals.length > 0">
                    <md-field>
                      <label for="goals">Goals</label>
                      <md-select
                        v-model="selectedValue"
                        name="goals"
                        id="goals"
                      >
                        <div v-for="goal in goals" :key="goal._id">
                          <md-option :value="goal._id">{{
                            goal.title
                          }}</md-option>
                        </div>
                      </md-select>
                    </md-field>
                    <md-button
                      class="add-button"
                      @click="
                        addContentByGoal({
                          goalId: selectedValue,
                          content: item,
                        })
                      "
                      >Add</md-button
                    >
                  </div>
                  <div v-else>Make some goals to add this to your list!</div>
                </div>
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
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState("user", {
      goals: (state) => state.goals,
    }),
  },
  methods: {
    ...mapActions("user", ["addContentByGoal"]),
    async searchItems() {
      await itemsDb.getItemsBySearchString(this.searchString).then((items) => {
        this.searchResults = items.data;
      });
      this.$router.push(`search-items?searchString=${this.searchString}`);
    },
  },
};
</script>

<style scoped>
.search-input-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  margin-left: 11%;
  margin-right: 5%;
  margin-top: 2%;
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
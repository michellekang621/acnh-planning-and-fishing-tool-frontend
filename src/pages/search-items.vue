<template>
  <div>
    <p>Hello!</p>
    <md-field>
      <label>Textarea with Autogrow</label>
      <md-textarea md-autogrow v-model="searchString"></md-textarea>
    </md-field>
    <md-button @click="searchItems()"> Search </md-button>
    <ul>
      <div v-for="item in searchResults" :key="item._id">
        <md-card>
          <md-card-header>
            <div @click="$router.push(`item-details/${item._id}`)">
              {{ item.item.name["name-USen"] }}
              <img :src="item.item.image_uri" />
            </div>
            <div v-if="goals.length > 0">
              <md-field>
                <label for="goals">Goals</label>
                <md-select v-model="selectedValue" name="goals" id="goals">
                  <div v-for="goal in goals" :key="goal._id">
                    <md-option :value="goal._id">{{ goal.title }}</md-option>
                  </div>
                </md-select>
              </md-field>
              <md-button @click="addContentByGoal({goalId: selectedValue, content: item})">Add</md-button>
            </div>
            <div v-else>
                Make some goals to add this to your list!
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
    selectedValue: '',
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
    ...mapActions("user", [
      'addContentByGoal',
    ]),
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
</style>
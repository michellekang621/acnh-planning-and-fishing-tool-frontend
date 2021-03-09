<template>
  <div>
    <p>Hello!</p>
    <md-card>
      <p>Select your hemisphere!</p>
      <md-radio v-model="hemisphere" value="northern">Northern</md-radio>
      <md-radio v-model="hemisphere" value="southern">Southern</md-radio>
      <p>Select your month!</p>
      <md-field>
        <label for="months">Months</label>
        <md-select v-model="month" id="months">
          <md-option value="1">January</md-option>
          <md-option value="2">February</md-option>
          <md-option value="3">March</md-option>
          <md-option value="4">April</md-option>
          <md-option value="5">May</md-option>
          <md-option value="6">June</md-option>
          <md-option value="7">July</md-option>
          <md-option value="8">August</md-option>
          <md-option value="9">September</md-option>
          <md-option value="10">October</md-option>
          <md-option value="11">November</md-option>
          <md-option value="12">December</md-option>
        </md-select>
      </md-field>
      <p>Select your time!</p>
      <md-field>
        <label for="times">Time Of Day</label>
        <md-select v-model="time" id="times">
          <md-option value="0">12:00AM - 1:00AM</md-option>
          <md-option value="1">1:00AM - 2:00AM</md-option>
          <md-option value="2">2:00AM - 3:00AM</md-option>
          <md-option value="3">3:00AM - 4:00AM</md-option>
          <md-option value="4">4:00AM - 5:00AM</md-option>
          <md-option value="5">5:00AM - 6:00AM</md-option>
          <md-option value="6">6:00AM - 7:00AM</md-option>
          <md-option value="7">7:00AM - 8:00AM</md-option>
          <md-option value="8">8:00AM - 9:00AM</md-option>
          <md-option value="9">9:00AM - 10:00AM</md-option>
          <md-option value="10">10:00AM - 11:00AM</md-option>
          <md-option value="11">11:00AM - 12:00PM</md-option>
          <md-option value="12">12:00PM - 1:00PM</md-option>
          <md-option value="13">1:00PM - 2:00PM</md-option>
          <md-option value="14">2:00PM - 3:00PM</md-option>
          <md-option value="15">3:00PM - 4:00PM</md-option>
          <md-option value="16">4:00PM - 5:00PM</md-option>
          <md-option value="17">5:00PM - 6:00PM</md-option>
          <md-option value="18">6:00PM - 7:OOPM</md-option>
          <md-option value="19">7:00PM - 8:00PM</md-option>
          <md-option value="20">8:00PM - 9:00PM</md-option>
          <md-option value="21">9:00PM - 10:00PM</md-option>
          <md-option value="22">10:00PM - 11:00PM</md-option>
          <md-option value="23">11:00PM - 12:00AM</md-option>
        </md-select>
      </md-field>
      <md-button @click="searchFish()"> Search! </md-button>
    </md-card>
    <div v-if="fishResults">
      <div v-for="fish in fishResults" :key="fish._id">
        <md-card>
          <md-card-header>
            <div @click="$router.push({name: 'item-details', params: { itemId: fish._id }})">
              {{ fish.item.name["name-USen"] }}
              <img :src="fish.item.image_uri" />
            </div>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import itemsDb from "../api/items-db";

export default {
  name: "fishing-tool",
  data: () => ({
    hemisphere: null,
    month: null,
    time: null,
    fishResults: null,
  }),
  methods: {
    searchFish() {
      itemsDb.findAvailableFish(this.hemisphere, this.month, this.time)
      .then((fish) => {
          this.fishResults = fish.data;
        console.log(this.fishResults);
      });
    },
  },
};
</script>

<style scoped>
</style>
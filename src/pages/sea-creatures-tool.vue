<template>
  <div>
    <div class="split left">
      <div class="card-container">
        <h1 class="card-title">Sea Creatures Tool</h1>
        <md-card class="card">
          <p class="instructions-text"><i>Input your time and location to see the sea creatures that you can currently catch!</i></p>
          <p class="card-text">Select your hemisphere!</p>
          <md-radio v-model="hemisphere" value="northern">Northern</md-radio>
          <md-radio v-model="hemisphere" value="southern">Southern</md-radio>
          <p class="card-text">Select your month!</p>
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
          <p class="card-text">Select your time!</p>
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
          <md-button @click="searchSeas()"> Search! </md-button>
        </md-card>

        <div class="split right">
          <div v-if="seaResults" class="search-results">
            <div v-for="sea in seaResults" :key="sea._id">
              <md-card class="search-card-container">
                <div class="search-card-content">
                  <div class="search-card-content-text">
                    <p>Name: {{ sea.item.name["name-USen"] }}</p>
                    <p>Sell Price: {{ sea.item.price }}</p>
                    <p>Location: {{ sea.item.availability.location }}</p>
                  </div>
                  <img
                    @click="
                      $router.push({
                        name: 'item-details',
                        params: { itemId: sea._id },
                      })
                    "
                    class="img-sizer"
                    :src="sea.item.image_uri"
                  />
                </div>
              </md-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsDb from "../api/items-db";

export default {
  name: "bugs-tool",
  data: () => ({
    hemisphere: null,
    month: null,
    time: null,
    seaResults: null,
  }),
  methods: {
    searchSeas() {
      itemsDb
        .findAvailableSeaCreatures(this.hemisphere, this.month, this.time)
        .then((seas) => {
          let unsorted = seas.data.map((sea) => sea.item.price);
          console.log(unsorted);
          seas.data.sort(function (sea1, sea2) {
            return sea1.item.price - sea2.item.price;
          });
          let sorted = seas.data.map((sea) => sea.item.price);
          console.log(sorted);
          this.seaResults = seas.data;
          console.log(this.seaResults);
        });
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
  background-image: url("../assets/pattern-bgs/acnh-cream.png");
  background-position: center;
  background-size: cover;
  height: 100%;
}

/* Control the right side */
.right {
  right: 0;
  background-image: url("../assets/pattern-bgs/acnh-cream.png");
  background-position: center;
  background-size: cover;
  height: 100%;
}

.card-container {
  display: flex;
  flex-direction: column;
}

.instructions-text {
  font-size: 1em;
}

.card-text {
  text-align: left;
  font-weight: bold;
}

.card-title {
  padding-top: 15%;
  /* padding-right: 20%; */
}

.card {
  width: 75%;
  margin-left: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  padding: 4%;
}
.search-results {
  padding: 5%;
  padding-top: 15%;
}

.search-card-container {
  margin-bottom: 5%;
  padding-right: 3%;
}

.search-card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search-card-content-text {
  text-align: left;
  padding: 5%;
}

.img-sizer {
  max-width: 30%;
  max-height: 10%;
  cursor: pointer;
}
</style>
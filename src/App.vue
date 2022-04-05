<template>
  <v-app>
    <HeaderApp/>
    <v-main class="mt-16 mb-10">
      <v-container fluid>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="12"
                 md="7"
                 class="d-flex flex-column align-center"
          >
            <v-row class="mx-auto" style="max-width: 150px">
              <v-select
                  :items="items"
                  outlined
                  dense
                  label="Choose Pool"
                  width="50px;"
              ></v-select>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="sky">Token A</v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Current Price" dense outlined class="pa-0" hide-details></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="ripe">Token B</v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Current Price" dense outlined class="pa-0" hide-details></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-left d-flex pt-4 pb-2">
              <div class="mx-2">
                <v-btn class="py-1 white--text font-weight-bold" color="sky">Token A</v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Future Price" dense outlined class="pa-0" hide-details></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="ripe">Token B</v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Future Price" dense outlined class="pa-0" hide-details></v-text-field>
              </div>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col cols="12">
                <h5 class="text-h5 py-4">Time Horizone</h5>
              </v-col>

              <v-col cols="12" md="12">
                <v-slider
                    style="width: 700px;"
                    v-model="time"
                ></v-slider>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12"
                 md="4"
          >
            <div class="py-2">
              <h6 class="text-h6 font-weight-bold">Pool APR</h6>
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">106.13%</h5>
            </div>
            <div class="py-2">
            <h6 class="text-h6 font-weight-bold">Impermanent Loss</h6>
            <h5 class="text-h5 font-weight-bold ripe--text ml-15">13.4%</h5>
            </div>
            <div class="py-2">
            <h6 class="text-h6 font-weight-bold">Actual Return</h6>
            <div class="d-flex">
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">39.6% </h5>
              <h6 class="text-h6 ripe--text ml-2">yearly</h6>
            </div>
            </div>
            <div class="d-flex">
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">-4.56% </h5>
              <h6 class="text-h6 ripe--text ml-2">your timehorizon</h6>
            </div>
          </v-col>
        </v-row>
        <v-row class="text-center justify-center my-10 d-flex flex-column">
          <h6 class="text-h6 font-weight-light">Your Investment</h6>
          <div class="my-2">
            <v-btn class="py-1 px-16 text-h5" outlined>5,000</v-btn>
          </div>
          <h5 class="text-h5 pt-10 font-weight-bold">Total value if hold</h5>
          <h4 class="text-h4 ripe--text font-weight-bold">10,000</h4>

          <h5 class="text-h5 pt-5 font-weight-bold">Total value if invested for 6 month</h5>
          <div class="d-flex text-center justify-center pt-1">
            <h4 class="text-h4 ripe--text font-weight-bold">10,000 </h4>
            <h6 class="text-h6 red--text pl-2 pt-2">-457</h6>
          </div>

          <h5 class="text-h5 pt-5 font-weight-bold">Total value if invested for 1 year</h5>
          <div class="d-flex text-center justify-center pt-1">
            <h4 class="text-h4 ripe--text font-weight-bold">13,960 </h4>
            <h6 class="text-h6 red--text pl-2 pt-2">+3,960</h6>
          </div>

        </v-row>
      </v-container>
    </v-main>
    <v-divider></v-divider>
    <v-footer class="white my-6">
        <div class="ml-10">
          Social Link
        </div>
      <v-spacer></v-spacer>
        <div>Address:xxxxxx</div>
      <v-spacer></v-spacer>
        <div class="mr-10">@copyright 2022</div>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";


export default {
  name: 'App',

  components: {
    HeaderApp,

  },

  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    time: 50,
  }),
};
</script>
<style scoped lang="scss">
.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
}
</style>

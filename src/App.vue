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
        <div class="ml-10 d-flex">
          <svg style="width:24px;height:24px" class="mx-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
          </svg>
          <svg style="width:24px;height:24px" class="mx-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
          <svg style="width:24px;height:24px" class="mx-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
        </div>
      <v-spacer></v-spacer>
        <div>Address:xxxxxx</div>
      <v-spacer></v-spacer>
      <div class="mr-10">&copy; copyright 2022</div>
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

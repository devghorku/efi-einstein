<template>
  <v-app>
    <HeaderApp/>
    <v-main>
      <v-container fluid class="my-5 py-md-12">
        <v-row>
          <v-col cols="12"
                 md="8"
                 class="d-flex flex-column align-center"
          >
            <v-select
                :items="pools"
                outlined
                label="Choose Pool"
                item-text="displaySymbol"
                v-model="poolSelected"
                return-object
                @change="poolSelect"
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="Object.keys(poolSelected).length>0">
          <v-col cols="12"
                 md="8"
          >
            <v-row>
              <v-spacer/>
              <v-col cols="5" sm="3">
                <v-btn color="sky" block depressed>
                  {{ tokenA.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5">
                <v-text-field label="Current Price"
                              dense
                              solo
                              background-color="readOnly"
                              class="no-shadow"
                              readonly
                              v-model="tokenAPrice"
                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="ripe">
                  {{ tokenB.displaySymbol }}
                </v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Current Price"
                              dense
                              outlined
                              class="pa-0"
                              hide-details>
                </v-text-field>
              </div>
            </v-row>
            <v-row class="justify-left d-flex pt-4 pb-2">
              <div class="mx-2">
                <v-btn class="py-1 white--text font-weight-bold"
                       color="sky">
                  Token A
                </v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Future Price"
                              dense
                              outlined
                              class="pa-0"
                              hide-details>

                </v-text-field>
              </div>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="ripe">
                  Token B
                </v-btn>
              </div>
              <div class="mx-2">
                <v-text-field label="Future Price"
                              dense
                              outlined
                              class="pa-0"
                              hide-details>

                </v-text-field>
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
          <v-icon>
            mdi-facebook
          </v-icon>
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
import HeaderApp from "@/components/app-header";
import axios from 'axios'
export default {
  name: 'App',

  components: {
    HeaderApp,

  },
  async mounted() {
    await this.getPool()
  },
  data: () => ({
    pools:[],
    poolSelected: {},
    tokenA: {},
    tokenB: {},
    tokenAPrice:0,
    tokenBPrice:0,
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    time: 50,
  }),
  methods: {
    async poolSelect() {
      this.tokenA = this.poolSelected.tokenA;
      this.tokenB = this.poolSelected.tokenB;
      try {
        const res1= await this.getPrice(this.tokenA.symbol)
        this.tokenAPrice=res1.price.aggregated.amount;
        const res2= await this.getPrice(this.tokenB.symbol)
        this.tokenBPrice=res2.price.aggregated.amount;
      }catch (e) {
        console.log(e)
      }
    },
    async getPrice(token) {
      try {
        const res = await axios.get('prices/'+token+'-USD')
        return res.data.data
      } catch (e) {
        console.log(e)
      }
    },
    async getPool() {
      try {
        const res = await axios.get('poolpairs')
        this.pools=res.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }
};
</script>
<style lang="scss">
.no-shadow{
  box-shadow: none!important;
  .v-input__slot{
    box-shadow: none!important;
  }
}
</style>

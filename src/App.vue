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
              <v-col cols="5" sm="3" lg="2">
                <v-btn color="sky" block depressed class="pointer-none" dark>
                  {{ tokenA.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5" lg="4">
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
            <v-row>
              <v-spacer/>
              <v-col cols="5" sm="3" lg="2">
                <v-btn color="ripe" block depressed class="pointer-none" dark>
                  {{ tokenB.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5" lg="4">
                <v-text-field label="Current Price"
                              dense
                              solo
                              background-color="readOnly"
                              class="no-shadow"
                              readonly
                              v-model="tokenBPrice"
                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row class="pt-4 pb-2">
              <v-spacer/>
              <v-col cols="5" sm="3" lg="2">
                <v-btn color="sky" block depressed class="pointer-none" dark>
                  {{ tokenA.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5" lg="4">
                <v-text-field placeholder="Future Price"
                              dense
                              outlined
                              v-model="tokenAFuturePrice"
                              class="no-shadow"
                              type="number"
                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-col cols="5" sm="3" lg="2">
                <v-btn color="ripe" block depressed class="pointer-none" dark>
                  {{ tokenB.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5" lg="4">
                <v-text-field placeholder="Future Price"
                              dense
                              outlined
                              class="no-shadow"
                              type="number"
                              v-model="tokenBFuturePrice"
                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>

            <v-row class="align-center text-center justify-center">
              <v-col cols="12">
                <h5 class="text-h5 pt-4 pt-lg-10">Time Horizone</h5>
              </v-col>
              <v-col cols="12" md="8">
                <v-slider
                    v-model="month"
                    step="1"
                    max="36"
                ></v-slider>
                <div>{{ month }} months</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12"
                 md="4"
          >
            <div class="pb-4">
              <h6 class="text-h6 font-weight-bold">Pool APR</h6>
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">{{ (poolApr * 100).toFixed(2) }}%</h5>
            </div>
            <div class="pb-4">
              <h6 class="text-h6 font-weight-bold">Impermanent Loss</h6>
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">13.4%</h5>
            </div>
            <div class="pb-4">
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
        <v-row class="text-center justify-center my-10 d-flex flex-column"
               v-if="Object.keys(poolSelected).length>0">
          <h6 class="text-h6 font-weight-light">Your Investment</h6>
          <div class="my-2 d-flex justify-center">
            <v-text-field type="number"
                          dense
                          outlined
                          style="max-width: 200px;"
                          v-model="investment">
            </v-text-field>
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
    <footer-app/>
  </v-app>
</template>

<script>
import HeaderApp from "@/components/app-header";
import axios from 'axios'
import FooterApp from "@/components/footerApp";

export default {
  name: 'App',

  components: {
    FooterApp,
    HeaderApp,

  },
  async mounted() {
    await this.getPool()
  },
  computed: {
    L1() {
      return this.investment ? this.investment : 0
    },
    D12() {
      return this.month ? this.month : 0;
    },
    A12() {
      return this.poolApr ? this.poolApr : 0
    },
    A1() {
      return this.L1 / this.B1 / 2
    },
    B1() {
      return this.tokenAPrice ? this.tokenAPrice : 0
    },
    C1() {
      return this.L1 / this.D1 / 2
    },
    D1() {
      return this.tokenBPrice ? this.tokenBPrice : 0
    },
    B4() {
      return this.tokenAFuturePrice ? this.tokenAFuturePrice : 0
    },
    D4() {
      return this.tokenBFuturePrice ? this.tokenBFuturePrice : 0
    },
    E1() {
      return (this.B4 / this.B1) - 1
    },
    F1() {
      return (this.D4 / this.D1) - 1
    },
    A4() {
      return this.A1 * this.C1 / Math.sqrt(this.A1 * this.C1 * this.B1 * (1 + this.E1) / (this.D1 * (1 + this.F1)))
    },
    C4() {
      return Math.sqrt(this.A1 * this.C1 * this.B1 * (1 + this.E1) / (this.D1 * (1 + this.F1)))
    },
    A8() {
      return -(((this.A4 * this.B4 + this.C4 * this.D4) / (this.A1 * this.B4 + this.C1 * this.D4)) - 1)
    },
    A15() {
      return (this.D18 / this.D24) - 1
    },
    A18() {
      return (this.D21 / this.D24) - 1
    },
    D15(){
      return this.A4 * this.B4 + this.C4 * this.D4
    },
    D24() {
      return this.A1 * this.B4 + this.C1 * this.D4
    },
    D21(){
      return this.D15+(this.L1*(this.A12*(this.D12/12)))
    },
    G21(){
      return this.D21-this.D24
    },
    D18(){
      return this.D15+(this.L1*(this.A12))
    },
    G18(){
      return this.D18-this.D24
    }
  },
  data: () => ({
    pools: [],
    poolSelected: {},
    tokenA: {},
    tokenB: {},
    tokenAPrice: 0,
    tokenBPrice: 0,
    tokenAFuturePrice: 0,
    tokenBFuturePrice: 0,
    month: 6,
    poolApr: 0,
    investment: 5.00
  }),
  methods: {
    async poolSelect() {
      this.tokenA = this.poolSelected.tokenA;
      this.tokenB = this.poolSelected.tokenB;
      try {
        const res1 = await this.getPrice(this.tokenA.symbol)
        this.tokenAPrice = res1.price.aggregated.amount.toFixed(2);
        this.tokenAFuturePrice = res1.price.aggregated.amount.toFixed(2);
        const res2 = await this.getPrice(this.tokenB.symbol)
        this.tokenBPrice = res2.price.aggregated.amount.toFixed(2);
        this.tokenBFuturePrice = res2.price.aggregated.amount.toFixed(2);
        this.poolApr = this.poolSelected.apr.reward + this.poolSelected.apr.commission;
      } catch (e) {
        console.log(e)
      }
    },
    async getPrice(token) {
      try {
        const res = await axios.get('prices/' + token + '-USD')
        return res.data.data
      } catch (e) {
        console.log(e)
      }
    },
    async getPool() {
      try {
        const res = await axios.get('poolpairs')
        this.pools = res.data.data;

      } catch (e) {
        console.log(e)
      }
    },
  }
};
</script>
<style lang="scss">

</style>

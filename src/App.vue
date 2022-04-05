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
                :label="$t('choose_pool') "
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
                <v-btn color="sky" block depressed class="pointer-none">
                  {{ tokenA.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5">
                <v-text-field :label="$t('current_price') "
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
              <v-col cols="5" sm="3">
                <v-btn color="ripe" block depressed class="pointer-none">
                  {{ tokenB.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5">
                <v-text-field :label="$t('current_price') "
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
              <v-col cols="5" sm="3">
                <v-btn color="sky" block depressed class="pointer-none">
                  {{ tokenA.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5">
                <v-text-field :label="$t('future_price') "
                              dense
                              solo
                              background-color="readOnly"
                              class="no-shadow"
                              readonly

                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-col cols="5" sm="3">
                <v-btn color="ripe" block depressed class="pointer-none">
                  {{ tokenB.displaySymbol }}
                </v-btn>
              </v-col>
              <v-col cols="7" sm="5">
                <v-text-field :label="$t('future_price') "
                              dense
                              solo
                              background-color="readOnly"
                              class="no-shadow"
                              readonly

                              hide-details>

                </v-text-field>
              </v-col>
              <v-spacer/>
            </v-row>

            <v-row class="align-center text-center justify-center">
              <v-col cols="12" >
                <h5 class="text-h5 py-4">{{ $t('time_horizon') }}</h5>
              </v-col>

              <v-col cols="12" md="12">
                <v-slider
                    v-model="month"
                    step="1"
                    max="36"
                ></v-slider>
                <div>{{month}} {{ $t('months') }}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12"
                 md="4"
          >
            <div class="py-2">
              <h6 class="text-h6 font-weight-bold">{{ $t('pool_apr') }}</h6>
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">106.13%</h5>
            </div>
            <div class="py-2">
            <h6 class="text-h6 font-weight-bold">{{ $t('impermanent_loss') }}</h6>
            <h5 class="text-h5 font-weight-bold ripe--text ml-15">13.4%</h5>
            </div>
            <div class="py-2">
            <h6 class="text-h6 font-weight-bold">{{ $t('actual_return') }}</h6>
            <div class="d-flex">
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">39.6% </h5>
              <h6 class="text-h6 ripe--text ml-2">{{ $t('yearly') }}</h6>
            </div>
            </div>
            <div class="d-flex">
              <h5 class="text-h5 font-weight-bold ripe--text ml-15">-4.56% </h5>
              <h6 class="text-h6 ripe--text ml-2">{{ $t('your_timehorizon') }}</h6>
            </div>
          </v-col>
        </v-row>
        <v-row class="text-center justify-center my-10 d-flex flex-column">
          <h6 class="text-h6 font-weight-light">{{ $t('your_investment') }}</h6>
          <div class="my-2">
            <v-btn class="py-1 px-16 text-h5" outlined>5,000</v-btn>
          </div>
          <h5 class="text-h5 pt-10 font-weight-bold">{{$t('total_value_if_hold')}}</h5>
          <h4 class="text-h4 ripe--text font-weight-bold">10,000</h4>

          <h5 class="text-h5 pt-5 font-weight-bold px-2">{{$t('total_value_if_invested_for_6_month')}}</h5>
          <div class="d-flex text-center justify-center pt-1">
            <h4 class="text-h4 ripe--text font-weight-bold">10,000 </h4>
            <h6 class="text-h6 red--text pl-2 pt-2">-457</h6>
          </div>

          <h5 class="text-h5 pt-5 font-weight-bold px-2">{{$t('total_value_if_invested_for_1_year')}}</h5>
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
  data: () => ({
    pools:[],
    poolSelected: {},
    tokenA: {},
    tokenB: {},
    tokenAPrice:0,
    tokenBPrice:0,
    tokenAFuturePrice:0,
    tokenBFuturePrice:0,
    month: 6,
  }),
  methods: {
    async poolSelect() {
      this.tokenA = this.poolSelected.tokenA;
      this.tokenB = this.poolSelected.tokenB;
      try {
        const res1= await this.getPrice(this.tokenA.symbol)
        this.tokenAPrice=res1.price.aggregated.amount;
        this.tokenAFuturePrice=res1.price.aggregated.amount;
        const res2= await this.getPrice(this.tokenB.symbol)
        this.tokenBPrice=res2.price.aggregated.amount;
        this.tokenBFuturePrice=res2.price.aggregated.amount;
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

</style>

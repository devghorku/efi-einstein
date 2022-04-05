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
            <h6 class="text-h6 font-weight-bold">Pool APR</h6>
            <h5 class="text-h5 font-weight-bold ripe--text ml-8">106.13%</h5>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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

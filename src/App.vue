<template>
  <v-app>
    <HeaderApp/>
    <v-main class="mt-16">
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
                label="Choose Pool"
                width="50px;"
            ></v-select>
            </v-row>
            <v-row class="justify-left d-flex py-2">
              <div class="mx-2">
                <v-btn class="py-1" color="sky" >Token A</v-btn>
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
                <v-btn class="py-1 white--text font-weight-bold" color="sky" >Token A</v-btn>
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
            <h6 class="text-h6 font-weight-bold">Pool APR</h6>
            <h5 class="text-h5 font-weight-bold ripe--text ml-8">106.13%</h5>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
    time:50,
  }),
};
</script>
<style scoped lang="scss">
.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
}
</style>

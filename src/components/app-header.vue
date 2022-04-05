<template>
  <div>
    <v-app-bar height="80px"
               color="white"
               light
               app
               fixed
               elevation="1"
               class="px-0 px-md-12"
    >
      <div>
        <v-img src="@/assets/logo.svg" width="150px"
               contain>
        </v-img>
      </div>
      <v-spacer/>
      <v-btn class="text-none font-weight-bold ml-5 d-none d-sm-block" text>
        Einstein App
      </v-btn>
      <v-btn class="text-none font-weight-bold ml-5 d-none d-sm-block" text>
        Getting Started
      </v-btn>
      <v-btn class="ml-5 " color="errorLight d-none d-sm-block" depressed dark>
        Donate
      </v-btn>
      <v-app-bar-nav-icon @click="drawer=!drawer" class="d-block d-sm-none">

      </v-app-bar-nav-icon>
    </v-app-bar>
    <div class="d-block d-sm-none">
      <v-navigation-drawer v-model="drawer" right fixed>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Einstein App
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Getting Started
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn color="errorLight" depressed dark block>
              {{ $t('donate') }}
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </div>

  </div>

</template>

<script>
export default {
  name: 'app-header',

  data() {
    return {
      drawer:false,
      menus: [
        {title: 'Einstein App', route: 'Einstein-App'},
        {title: 'Getting Started', route: 'Getting-started'},
      ]
    }
  }

}
</script>
<style>
.v-toolbar__title {
  font-size: 32px !important;
  color: indigo;
  font-weight: bold;
}
</style>
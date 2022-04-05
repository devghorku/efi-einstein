<template>
  <v-app-bar height="80px" app color="white" light fixed elevation="0" style="padding: 0px 90px 0px 10px;">
    <div ><v-img src="@/assets/Einstein.png" width="150px" contain></v-img></div>
    <v-spacer />
    <v-list link v-for="(menu, index) in menus" :key="index" :to="menu.route">
      <v-list-item class="mx-4 font-weight-bold">{{menu.title}}</v-list-item>
    </v-list>
    <v-btn text class="py-2 pink">
      Donate
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderApp',

  data(){
    return{
      menus:[
        {title:'Einstein App', route:'Einstein-App'},
        {title:'Getting Started', route:'Getting-started'},

      ]
    }
  }

}
</script>
<style>
  .v-toolbar__title{
    font-size: 32px !important;
    color: indigo;
    font-weight: bold;
}
</style>
<template>
  <v-footer class="white my-6">
    <div class="ml-10 d-flex">
      <v-icon class="mx-2">
        mdi-twitter
      </v-icon>
      <v-icon class="mx-2">
        mdi-instagram
      </v-icon>
      <v-icon class="mx-2">
        mdi-facebook
      </v-icon>
    </div>
    <v-spacer></v-spacer>
    <div class="py-4">{{$t('address')}}:xxxxxx</div>
    <v-spacer></v-spacer>
    <div class="mx-10 py-4">&copy; {{$t('copyright')}} 2022</div>
  </v-footer>
</template>
<script>
export default {
  name:'footerApp',
}
</script>
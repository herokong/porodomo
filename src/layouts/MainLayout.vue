<template>
  <q-layout view="hHh lpR fFf" class="backgound-body">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.backgound-body {
  background-color: black;
}
</style>

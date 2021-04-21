<template>
<div>
  <q-form @submit.prevent="formSubmittion">
      <q-card class="card-style">
        <q-card-section>
          <div class="text-h6">Minutes</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="time" autofocus class="text-field"/>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Ok" color="primary" type="submit"/>
        </q-card-actions>
      </q-card>
  </q-form>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    add: Boolean,
  },
  data(){
    return {
      prompt: false,
      time: '',
    }
  },
  methods: {
    ...mapActions('Timer', [
      'addMinutes',
      'changeStatus'
    ]),
    formSubmittion() {
      if (this.time >= 0) {
        this.addMinutes(Number(this.time))
        this.$emit('closePopUp')
        this.changeStatus()
      }else{
        alert("Hey don't do that!")
      }
      
    }
  }
}
</script>

<style>
.text-field {
  font-size: 50px;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
.card-style {
  max-width: 180px;
}
</style>
<template>
<div>
  <div class="text-center text-cyan-12 text-title-style" v-if="getStatus == false">Pomodoro</div>
  <div>
    <Box
      v-if="getStatus == true"
      :time="getMinutes"
    />
    <div class="absolute-center text-center" v-if="getStatus == false" @click="addTimer = true">
      <div>
        <img draggable="false" src="../assets/clock.png" alt="clock.png" class="image">
      </div>
      <div>
        <q-icon size="70px" color="cyan-12" name="touch_app"/>
      </div>
    </div>
    <q-dialog v-model="addTimer" persistent>
      <Input @closePopUp="addTimer = false"/>
    </q-dialog>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Box: require("../components/Dialog.vue").default,
    Input: require("../components/SetTimer.vue").default,
  },
  data() {
    return {
      date: "Hello",
      addTimer: false,
    }
  },
  computed: {
    ...mapGetters('Timer', [
      'getStatus',
      'getMinutes'
    ])
  },
}
</script>

<style scoped>
.display-box {
  width: 319px;
}
.image {
  max-width: 315px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
}
.text-title-style{
  font-size: 72px;

  font-family: "Comic Sans MS", cursive, sans-serif;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
}
</style>




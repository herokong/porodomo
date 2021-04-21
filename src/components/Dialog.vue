<template>
<div>

  <q-btn class="text-grey q-ma-md" size="20px" dense icon="volume_off" v-if="soundOff" @click="mutedSound"></q-btn>
  <q-btn class="text-grey q-ma-md" size="20px" dense icon="volume_up" v-if="!soundOff" @click="mutedSound"></q-btn>
  <q-btn class="text-grey q-ma-md fixed-top-right" size="20px" dense icon="highlight_off" @click="closeTimer"></q-btn>
  <div class="absolute-center display-box" style="margin:auto">
    <audio id="player"><source src="../assets/Sleep.mp3" type="audio/mp3"></audio>
    <audio id="ringer"><source src="../assets/ring.mp3" type="audio/mp3"></audio>

    <div class="justify-center">
      <div class="text-h1 text-cyan-12 text-timer text-center">{{ countDown }}</div>
    </div>


    <div class="q-ma-md row justify-center">

      <q-btn class="bg-white text-cyan-8 q-ma-sm" size="20px" dense icon="play_circle_filled" @click="startTimer"></q-btn>
      <q-btn class="bg-white text-cyan-8 q-ma-sm" size="20px" dense icon="pause_circle_outline" @click="stopTimer"></q-btn>
      <q-btn class="bg-white text-cyan-8 q-ma-sm" size="20px" dense icon="cached" @click="resetTimer"></q-btn>

    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    time: Number,
  },
  data() {
    return {
      timeSeconds: this.time*60,
      timeStart: null,
      soundOff: false,
    }
  },
  methods: {
    ...mapActions('Timer', [
      'changeStatus'
    ]),

    startTimer() {
      if (this.timeStart == null) {
        this.timeStart = setInterval(() => this.countDownTimer(), 1000)
      }else{
        alert("You don't want to go to fast!")
      }
      document.getElementById('player').play()
    },

    stopTimer() {
      clearInterval(this.timeStart)
      this.timeStart = null
      document.getElementById('player').pause()
    },

    resetTimer() {
      this.timeSeconds = this.time * 60
      document.getElementById('ringer').pause()
    },

    countDownTimer() {
      if(this.timeSeconds > 0){
        this.timeSeconds -= 1
      }
      if (this.timeSeconds <= 0 ) {
        this.stopTimer()
        this.resetTimer()
        document.getElementById('ringer').play()
      }
    },

    mutedSound() {
      this.soundOff = !this.soundOff
      if (this.soundOff == true) {
        document.getElementById('player').muted = true
      }else{
        document.getElementById('player').muted = false
      }
    },
    closeTimer() {
      this.changeStatus()
    }
  },
  computed: {
   countDown() {
     if (this.timeSeconds === 0) {
       this.timeSeconds = 60
     }
     let minutes = Math.floor(this.timeSeconds/60)
     let seconds = Math.floor(this.timeSeconds % 60)
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
     if (seconds < 10) {
       seconds = `0${seconds}`
     }
     return `${minutes}:${seconds}`
   },
  },
}
</script>
<style>
.text-timer {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  font-family: "Comic Sans MS", cursive, sans-serif;
}
@media screen and (min-width: 500px) {
  .text-timer {
    font-size: 150px;
  }
}
</style>
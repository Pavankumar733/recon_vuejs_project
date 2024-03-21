<template>
  <h2> Reconcilation</h2>
  <button @click="vueId != vueId" class="btn"> Click</button>
  <div :class="vueClass" :id="vueid" v-if="vueId == true">This element is bound to the "pinkBG" class.</div>
  <div :class="vueClass" :id="vueid" v-else>false.</div>

  <div @click="handleClick">
  <div v-if="Math.random() > 0.5">
    Now you see me
  </div>
  <div v-else>
    Now you don't
  </div>
</div>
</template>

<style lang="scss" scoped>
.pinkBG {
  background-color: lightpink;
}
</style>

<script>

export default {

  data() {
    return {
      vueClass: '',
      vueid: 'reconid',
      vueId: false

    };
  },
  mounted() {
    this.vueClass = 'pinkBG'

  },
  methods: {
    handleClick(){
      console.log('svhvhsh;')
    }
  }


}
</script>
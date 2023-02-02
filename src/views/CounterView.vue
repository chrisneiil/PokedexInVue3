<template>
  <div>
    <h3>Counter</h3>
    <h4>{{variable}}</h4>
    <input @click="mas" type="button">
    <input @click="menos" type="button">
  </div>
</template>

<script>

import {useCounter} from "@/Composables/useCounter";

export default {
  name: "CounterView",


  setup(){
    const {variable, mas , menos} = useCounter()
    return{
      variable, mas , menos
    }
  }
}
</script>

<style scoped>

</style>
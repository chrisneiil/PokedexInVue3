<template>
  <div class="text-center">
    <h3>Counter</h3>
    <h4>{{variable}}</h4>
    <v-btn class="mr-2" color="red" icon dark size="30" @click="menos">-</v-btn>
    <v-btn color="info" icon dark  size="30" @click="mas" >+</v-btn>

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
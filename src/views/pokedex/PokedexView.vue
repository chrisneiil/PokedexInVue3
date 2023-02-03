<template>
  <div>
    XD1
  </div>
  <div>
    XD2
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "PokedexView",
  setup(){
    const pokemons = ref([])


    const llamadoPokemonesApi = () =>{
      console.log("XD")
    }

    return { pokemons, llamadoPokemonesApi }
  }
}
</script>

<style scoped>

</style>
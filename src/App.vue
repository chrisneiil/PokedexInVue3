<template>
  <v-app>
    <v-main class="text-center">
      <router-link to="/about"> About</router-link>
      |
      <router-link to="/counter"> Counter</router-link>
      |
      <router-link to="/pokedex"> Pokedex</router-link>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

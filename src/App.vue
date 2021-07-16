<template>
  <div class="app">
    <v-app> 
      <v-main>
  <Navigation/>    
       <router-view></router-view>
       <Footer/>
      </v-main>
       
    </v-app>
  </div>
</template>

// <script>
//import Home from "./components/Home.vue"

import Navigation from "./components/shared/navigation-top.vue";
import Footer from "./components/shared/footer.vue"
//import Search from "./components/shared/search-front.vue"
//mport Home from "./components/home.vue";
export default {
  name: "App",
  components: {
   Navigation,
   Footer,
  },
  data: () => ({ 
   
  })
};
</script>
<style>
</style>
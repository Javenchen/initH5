<template>
  <div class="Home">
    {{msg}}111
    <FooterTab />
  </div>
  
</template>

<script>
// @ is an alias to /src
import FooterTab from "@/components/FooterTab.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    FooterTab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
import Header from "./components/AppHeader.vue"
import Main from "./components/AppMain.vue"
import Footer from "./components/AppFooter.vue"


 export default{
    data() {
      return {

      }
    },

    components: {
      Header,
      Main,
      Footer,
    }
 }
</script>

<template>
  <div id="container">
    <Header></Header>

    <Main></Main>

    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
</style>

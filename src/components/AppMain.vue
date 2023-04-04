<script>

import {store} from "../store.js"
import AppMovie from "../components/AppMovie.vue"
import AppSeries from "../components/AppSeries.vue"
import AppHomeMovie from "../components/AppHomeMovie.vue"
import AppHomeSeries from "../components/AppHomeSeries.vue"

export default{
    data() {
        return {
            store,
            
        }
    },

    components: {
        AppMovie,
        AppSeries,
        AppHomeMovie,
        AppHomeSeries,
    },


}
</script>

<template>
    <div id="container-main">
        <h2 v-if="store.showHome">FILM POPOLARI</h2>
        <h2 v-else="store.showHome">FILM</h2>
        <div id="container-movie">
            <AppHomeMovie v-for=" movie in store.popularMovies" v-show="store.showHome" :card="movie"></AppHomeMovie>
            <AppMovie v-for=" card in store.cardsMovie" :card="card"></AppMovie>
        </div>   

        <h2 v-if="store.showHome">SERIE TV POPOLARI</h2>
        <h2 v-else="store.showHome">SERIE TV</h2>
        <div id="container-series">
            <AppHomeSeries v-for=" serie in store.popularSeries" v-show="store.showHome" :card="serie"></AppHomeSeries>
            <AppSeries v-for="card in store.cardsSeries" :card="card"></AppSeries>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container-main{
    color: white;

    min-height: 520px;

    background-color: rgba(4, 4, 4, 0.908);

    h2{ 
        margin-left: 15px;
    }

   #container-movie {
    width: 98%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;

    overflow-x: auto;
    overflow-y: hidden;
   }

   #container-series{
    width: 98%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
    

    overflow-x: auto;
    overflow-y: hidden;
   }

   

}   


</style>
<script>

import {store} from "../store.js"
import AppMovie from "../components/AppMovie.vue"
import AppSeries from "../components/AppSeries.vue"
export default{
    data() {
        return {
            store,
        }
    },

    components: {
        AppMovie,
        AppSeries
    },


}
</script>

<template>
    <div id="container-main">
        <h2>FILM</h2>
        <div id="container-movie">
           <AppMovie v-for=" card in store.cardsMovie" :card="card"></AppMovie>
        </div>   

        <h2>SERIES</h2>
        <div id="container-series">
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
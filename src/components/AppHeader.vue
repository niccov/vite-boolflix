<script>
import AppSearch from "./AppSearch.vue"
import axios from "axios"
import {store} from "../store.js"

export default{
    data() {
        return {
            store,
        }
    },

    components: {
        AppSearch,
    },
    
    created() {
        axios.get(this.store.APIcall).then((res) => {
            console.log(res)
        })
    },

    methods: {
        search() {
            let apiNewString = this.store.APIcall + this.store.APIquery + this.store.movieName;

            axios.get(apiNewString).then((res) => {
                console.log(res.data.results);

                this.store.cardsMovie = res.data.results;

            })
        }
    }
}
</script>

<template>
    <div id="container-header">
        <div id="container-logo">
            <h1>LOGO</h1>
        </div>

        <AppSearch @searchMovieName="search()"></AppSearch>  
    </div>
</template>

<style lang="scss" scoped>
#container-header {
    width: 100%;
    height: 80px;

    background-color: black;

    display: flex;
    align-items: center;
    justify-content: space-around;

    #container-logo {
        color: white;
    }

}

</style>
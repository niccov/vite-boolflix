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

        this.movie = "/movie/popular";

        axios.get(this.store.APIcall +this.movie + this.store.APIkey).then((res) => {
            console.log(res.data.results);

            this.store.popularMovies = res.data.results;
        })

        
        this.series = "/tv/popular";

        axios.get(this.store.APIcall + this.series + this.store.APIkey).then((res) => {
            console.log(res.data.results);

            this.store.popularSeries = res.data.results;
        })
    },

    methods: {
        searchMovie() {
            this.moviePath = "/search/movie";

            let apiNewStringMovie = this.store.APIcall +this.moviePath + this.store.APIkey + this.store.APIquery + this.store.nameSearched;

            axios.get(apiNewStringMovie).then((res) => {
                console.log(res.data.results);

                this.store.cardsMovie = res.data.results;

            })
        },

        searchSeries() {
            this.seriesPath = "/search/tv";

            let apiNewStringSeries = this.store.APIcall +this.seriesPath + this.store.APIkey + this.store.APIquery + this.store.nameSearched;

            axios.get(apiNewStringSeries).then((res) => {
                console.log(res.data.results);

                this.store.cardsSeries = res.data.results;

            })
        },

        search() {
            this.searchMovie();
            this.searchSeries();
            this.store.showHome = false;
        }
    }
}
</script>

<template>
    <div id="container-header">
        <div id="container-logo">
            <h1>BOOLFLIX</h1>
        </div>

        <AppSearch @searchMovieName="search()"></AppSearch>  
    </div>
</template>

<style lang="scss" scoped>
#container-header {
    width: 100%;
    // height: 80px;

    background-color: black;

    display: flex;
    align-items: center;
    justify-content: space-around;

    #container-logo {
        color: rgb(218, 7, 7);
        font-size: 22px;
    }

}

</style>
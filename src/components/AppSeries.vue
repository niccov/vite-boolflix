<script>

import {store} from "../store.js"

export default {
    name: "AppSeries",
    data() {
        return{
            store,
        }
    },

    props: {
        card: Object,
    },

    computed: {

      flag() {
      if(this.card.original_language == "en") {
           return "gb";
       } else if (this.card.original_language == "ja") {
           return "jp";
       } else if (this.card.original_language == "zh") {
           return "cn";
       } else if  (this.card.original_language == "ko") {
           return "kr";
       } else if  (this.card.original_language == "uk") {
           return "ua";
       } else if  (this.card.original_language == "da") {
           return "dk";
       } else if  (this.card.original_language == "el") {
           return "gr";
       } else if  (this.card.original_language == "hi") {
           return "in";
       }         
        return this.card.original_language;
      },

      star() {
        let starVote = (Math.floor(this.card.vote_average / 2));
        return starVote;
      },
    },
}
</script>

<template>
    <div class="card-series">
        <div class="container-img" >
            <img :src="`${this.store.thumb + card.poster_path}`" alt="">
        </div>

        <div class="info">

           <div>Titolo: <b>{{ card.name }}</b></div>

           <div>Titolo originale: <b>{{  card.original_name }}</b></div>

           <div>Lingua originale: <b>{{ card.original_language }}</b><span :class="'fi fi-' + flag"></span></div>

           <div>Voto: <i v-for="star in star " class="fa-solid fa-star"></i></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card-series{
    position: relative;

    &:hover .info{
        display: block;
    }
    
    .container-img{
        height: 300px;

       img{
         height: 100%;
       }
    }

    .info{
        width: 100%;
        height: 100%;

        padding: 10px;

        display: none;

        position: absolute;
        top: 0px;
        left: 0px;

        background-color: rgba(0, 0, 0, 0.85);
    }
}
</style>
<script>

import {store} from "../store.js"

export default {
    data() {
        return{
            store,

            flagItem: "",
        }
    },

    props: {
      card: Object,
    },

    mounted() {
        if(this.card.original_language == "en") {
            this.flagItem = "gb";
        } else if (this.card.original_language == "ja") {
            this.flagItem = "jp";
        } else {
            this.flagItem = this.card.original_language;
        }
    }
}
</script>

<template>
    <div class="card-movie">
        <div class="container-img" >
            <img :src="`${this.store.thumb + card.poster_path}`" alt="">
        </div>

        <div class="info">

           <div>Titolo: <b>{{ card.title }}</b></div>

           <div>Titolo originale: <b>{{  card.original_title }}</b></div>

           <div>Lingua originale: <b>{{ card.original_language }}</b><span :class="'fi fi-' + flagItem"></span></div>

           <div>Voto: <b>{{ card.vote_average }}</b>/10</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-movie{
    
    .container-img{
        height: 250px;
        max-width: 170px;

       img{
         height: 100%;
       }
    }

    .info{
        max-width: 170px;
    }
}

</style>
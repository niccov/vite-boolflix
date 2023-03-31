<script>

import {store} from "../store.js"

export default {
    data() {
        return{
            store
        }
    },

    props: {
    
    }
}
</script>

<template>
    <div id="card-movie" v-for=" card in store.cardsMovie">
        <div id="container-img" >
            
        </div>

        <div id="title">
            {{ card.title }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
#card-movie{
    width: 200px;
    height: 150px;

    border: 1px solid black;

    #container-img{
        width: 100%;
        height: 100%;
    

       img{
        width: 100%;
       }
    }
}

</style>
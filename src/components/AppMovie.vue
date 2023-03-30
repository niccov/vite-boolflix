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
    <div id="card-movie">
        <div id="container-img">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

#container-img{
    width: 200px;
    height: 150px;

    img{
        width: 100%;
    }
}
</style>
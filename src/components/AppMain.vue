<script>

import {store} from "../store.js"
import AppMovie from "../components/AppMovie.vue"
export default{
    data() {
        return {
            store,
        }
    },

    components: {
        AppMovie,
    },


}
</script>

<template>
    <div id="container-main">
        <AppMovie v-for=" card in store.cardsMovie" :card="card"></AppMovie>
    </div>
</template>

<style lang="scss" scoped>

#container-main {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
}
</style>
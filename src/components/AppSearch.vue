<script>
import {store} from "../store.js"

export default{
    name: "AppSearch",
    data() {
        return{

            store,
        }
    }
} 
</script>

<template>
    <div id="search-bar">
        <input v-model="store.nameSearched" type="text">
        <button @click="$emit('searchMovieName')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

#search-bar {

    input {
        height: 30px;
        width: 250px;
    }

    button {
        height: 30px;

        margin-left: 10px;
    }
}
</style>
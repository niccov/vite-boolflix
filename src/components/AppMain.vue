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
    }
}
</script>

<template>
    <div>
        <AppMovie v-for=" card in store.cardsMovie">
            {{ movie.title }}
        </AppMovie>
    </div>
</template>

<style lang="scss" scoped></style>
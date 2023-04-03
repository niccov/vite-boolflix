import {reactive} from 'vue';

export const store = reactive({

    APIcall: 'https://api.themoviedb.org/3/search/movie?api_key=0f2bb49f99335d1574992e4b615c6f82',

    APIquery: "&query=",

    movieName: "",

    cardsMovie: [],

    thumb: 'https://image.tmdb.org/t/p/w200',
});
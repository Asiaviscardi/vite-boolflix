import {reactive} from 'vue'
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiParams:{
        api_key: 'b439ecd7216ce24202146192e2e18bc1',
        language: 'it-IT',
        query: 'barbie',
    }
})
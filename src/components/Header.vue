<script>
import { store } from '../assets/data/store';
export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }

}
</script>

<template>

    <div class="header-container">

        <div class="logo-container">

            <img src="../assets/logo-boolflix.png" alt="">

        </div>

        <div class="search-container">

            <input @keyup.enter="$emit('startSearch')" v-model.trim="store.apiParams.query" type="search" placeholder="Cerca un film o una serie tv">

            <select name="" id="">

                <option value="all">all</option>
                <option value="movies">movies</option>
                <option value="series">tv series</option>

            </select>

            <button @click="$emit('startSearch')">click</button>

        </div>

    </div>
  
</template>

<style scoped lang="scss">

.header-container{
    display: flex;
    justify-content: space-between;

    .logo-container{
        width: 200px;

        img{
            width: 100%;
            padding: 10px;
        }
    }

    .search-container{
        width: 55%;
        padding-right: 10px;
        display: flex;
        align-items: center;

        input{
            width: 100%;
            height: 65%;
            padding-left: 10px;
        }
    }
}

</style>
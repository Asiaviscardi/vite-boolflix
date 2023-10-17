<script>
import { store } from '../assets/data/store';
export default {
    name: 'Main',
    data(){
        return{
            store

        }
    }
}
</script>

<template>

    <div class="card-container-consigliati">

        <div class="card-consigliati" v-for="item in store.consigliati" :key="item.id">

        <h5>{{ item.title }}</h5>
        
        <h6>{{ item.original_title }}</h6>
        
        <p>lingua: {{ item.original_language }}</p>
        
        <p>voto: {{ item.vote_average }}</p>

    </div>

    </div>

    <div class="card-container">

        <div class="card" v-for="item in store.all" :key="item.id">

            <h5>{{ item.title }}</h5>

            <h6>{{ item.original_title }}</h6>

            <p>lingua: {{ item.original_language }}</p>

            <p>voto: {{ item.vote_average }}</p>

        </div>

    </div>
    
  
</template>

<style scoped lang="scss">

.card-container{
    width: 100%;
    height: 100vh;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card{
        width: 300px;
        height: 100px;
        background-color: white;
        margin-right: 5px;
        text-align: center;
        padding: 3px;

        h5, h6, p{
            padding-bottom: 5px;
        }
    }
}

</style>
<script>
import {store} from './assets/data/store'
import axios from 'axios'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  name:'app',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store

    }

  },

  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: store.apiParams
      })
      .then(res=>{
        store.all = res.data.results;
      })
      .catch(err=>{
        console.log(err)
      });

      axios.get(store.apiUrlConsigliati, {
      params: {
        api_key: store.apiParams.api_key,
        language: store.apiParams.language,
      }
      })
      .then(res => {
        store.consigliati = res.data.results;
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted(){
  }

}
</script>

<template>

  <Header @startSearch="getApi"/>

  <Main v-if="store.all.length>0"/>
  
</template>

<style  lang="scss">

body{
  background-color: black;
}

</style>
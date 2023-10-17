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

    }

  },

  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: store.apiParams
      })
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
  }

}
</script>

<template>

  <Header @startSearch="getApi"/>

  <Main/>
  
</template>

<style scoped lang="scss">

</style>
<template>
  <div id="app">
    
    <VHeader/>    
    <router-view/>
    <VFooter/> 
  </div>
</template>
<script>
import VHeader from  './components/Header';
import VFooter from './components/Footer';

export default {
  components:{
    VHeader,
    VFooter
  },
   created(){
    this.$store.dispatch("autoLogin");
  }  
}
</script>

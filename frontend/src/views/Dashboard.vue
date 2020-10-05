<template>
<div>
    <vnavbar title="Dashboard"></vnavbar>
    <div class="nuevolink"> 
    <NuevoLink></NuevoLink>
    </div>
    <div class="tabla">
    <TablaLinks></TablaLinks>
    </div>
</div>
</template>



<script>
// @ is an alias to /src

import  TablaLinks from '@/components/TablaLinks.vue';
import  NuevoLink from '@/components/NuevoLink.vue';
import  vnavbar from '@/components/Navbar.vue';

export default {
  name: 'login',
  components: {
    TablaLinks,
    NuevoLink,
    vnavbar
  },
  created(){
    if(!this.$store.state.token){
      this.$router.push({name: 'login'});
    }
  }

}
</script>

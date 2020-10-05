<template>
<div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"> Link</th>
      <th scope="col">Short</th>
      <th scope="col">Click</th>
    </tr>
  </thead>
    <tr v-for="item in links"  >
      <th scope="row">{{item.full}}</th>
      <td>{{baseurl}}/{{item.short}}</td>
      <td>{{item.clicks}}</td>
    </tr>
</table>
</div>
</template>
<script>
import axios from 'axios';

export default {
 data(){
        return{
            nuevo : ''
        }
    },
  created(){
      this.listar();
  },
  computed:{
    links(){
      return this.$store.state.links
    },
    baseurl(){
      return  window.location.host;
    }
  },
  methods:{
      listar(){
          let me = this;
          let header = {"token" : this.$store.state.token};
          let configutarion = {headers : header};
          axios.get('url/list',configutarion)
          .then(function(response){
            me.$store.dispatch("guardarlinks",response.data);
          }).catch(function(error){
              console.log(error);
          })

      }
  }
 
}
</script>
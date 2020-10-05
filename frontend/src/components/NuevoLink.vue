<template>
<div  class="row p-5">
    <div class="form-group col">
      <input type="text" v-model="link" class="form-control"  aria-describedby="emailHelp" placeholder="Link" >
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="col">
          <button class="btn btn-primary"  @click="crearlink" >Crear</button>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            link : ''
        }
    },
    methods:{
        crearlink(){
          let me = this;
          let header = {"token" : this.$store.state.token};
          let configutarion = {headers : header};
          axios.post('url/add',{"full": me.link} ,configutarion)
          .then(function(response){
             if(response.status==200){
                 const newlink = {full: response.data.full,short: response.data.short,clicks: response.data.clicks}
                me.$store.dispatch("addlink",newlink);
             }
          }).catch(function(error){
              console.log(error);
          })
        }
    }
}
</script>
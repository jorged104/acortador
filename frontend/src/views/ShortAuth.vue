<template>
<div class="conteiner-fluid mid">

  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <center><iframe src="//a.exdynsrv.com/iframe.php?idzone=4056694&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  </center> 
    </div>
     <div class="col-sm">
    </div>
  </div>

<div class="row">
    <div class="col-sm">
     
    </div>
    <div class="col-sm">
       <center> 
           <div v-if="mostrar"> 
                <button  class="btn btn-primary" @click="go"> Ir a enlace </button> </div>
           <div v-else>
               <button type="button" class="btn btn-danger btn-circle btn-xl">{{contador}}</button>
           </div>
           </center>
       <div v-if="e" class="alert alert-dismissible alert-danger">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Error</strong> 
        </div>
    </div>
    <div class="col-sm">

    </div>
</div>

  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <center><iframe src="//a.exdynsrv.com/iframe.php?idzone=4056694&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  </center> 
    </div>
     <div class="col-sm">
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    created(){
        setTimeout(this.updateBtn, 10000);
        setInterval(this.updateSpan,1000);
    },
     mounted() {
   var uid = '117409';
   var wid = '590753';
   var pop_tag = document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);
   pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src='//cdn2.popcash.net/show.js';document.body.appendChild(pop_tag)};
  },
    data(){
        return {
            mostrar: false,
            e : null,
            contador: 10
        }
    },
    methods:{
        updateBtn(){
            this.mostrar = true;
        },
        updateSpan(){
            this.contador -= 1;
        },
        go(){
            axios.get('url/query',{
                params: {
                    id: this.$route.params.id,
                    tokencap: this.$route.query.token
                }
            }).then(res =>{
                const data = res.data
                window.location.replace(data.full);
            }).catch(error =>{
                this.e = true;
                console.log(error);
            });
        }
    }
}
</script>

<style>
body {
  background-color: #f5f5f5;
}

html,
body {
  height: 100%;
}
.mid{
  padding-top: 80px;
  padding-bottom: 20px;
  height: 700px;
}
</style>

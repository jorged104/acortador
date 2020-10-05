<template>
<main id="main" class="mid">
<div class="row">
    <div class="col">
    </div>
</div>
<div class="row p-5">
    <div class="col">
       
    </div>
    <div class="col">
        <button v-if="mostrar" class="btn btn-primary" @click="go"> Ir a enlace </button>
       <div v-if="e" class="alert alert-dismissible alert-danger">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Error</strong> 
        </div>
    </div>
</div>
</main>
</template>
<script>
import axios from 'axios'
export default {
    created(){
        setTimeout(this.updateBtn, 10000);
    },
    data(){
        return {
            mostrar: false,
            e : null
        }
    },
    methods:{
        updateBtn(){
            this.mostrar = true;
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
  height: 500px;
}
</style>

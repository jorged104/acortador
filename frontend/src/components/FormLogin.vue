<template>
<div class="text-center formC" >
    <div class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input  v-model="email"  type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input  v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <button class="btn btn-lg btn-primary btn-block" @click="login">Sign in</button>
 <div class="alert alert-dismissible alert-danger" v-if="errorS">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>{{errorS}}</strong>
</div>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            email: '',
            password: '',
            errorS: null
        }
    },
    methods:{
        login(){
            axios.post('usuario/login',{email: this.email, password: this.password})
            .then(res =>{
               return res.data
            }).then(data =>{
                this.$store.dispatch("guardarToken",data.tokenReturn);
                this.$router.push({name: 'dashboard'});
                console.log('Usuario Correcto');
            })
            .catch(error =>{
                this.errorS = "Usuario o Email incorrectos";
                console.log('ERROR');
            });

        }
    }
}
</script>

<style>
html,
body {
  height: 100%;
}

body {
  background-color: #f5f5f5;
}

.formC{
    display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 20px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
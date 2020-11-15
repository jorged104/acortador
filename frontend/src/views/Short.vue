<template>

<div class="container mid">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
      <center><iframe src="//a.exdynsrv.com/iframe.php?idzone=4056694&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  </center> 
    </div>
     <div class="col">
    </div>
  </div>
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
     <center>    <button class="btn btn-primary" @click="comprobar">Ir al enlace</button> </center> 
    </div>
    <div class="col">
      
    </div>
  </div>
  <br><br>
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
      <center><iframe src="//a.exdynsrv.com/iframe.php?idzone=4056694&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  </center> 
    </div>
     <div class="col">
    </div>
  </div>
</div>

</template>
<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?render=6LfOIMkZAAAAAE64BiS5cO6g4bAFNdyZkemwoVBz"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

   var uid = '117409';
   var wid = '590753';
   var pop_tag = document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);
   pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src='//cdn2.popcash.net/show.js';document.body.appendChild(pop_tag)};
  },
  methods:{
      comprobar(){
          let me = this;
          grecaptcha.ready(function() {
          grecaptcha.execute('6LfOIMkZAAAAAE64BiS5cO6g4bAFNdyZkemwoVBz', {action: 'submit'}).then(function(token) {
              me.$router.push({name: 'shortAuth', params:{id: me.$route.params.id}, query:{token:token } });
          });
        });
      }
  }
};
</script>

<style >

.mid{
  padding-top: 80px;
  height: 1000px;
}
</style>
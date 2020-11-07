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
      <button class="btn btn-primary" @click="comprobar">Ir al enlace</button> 
        </div>
    </div>
</main>
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
    const popads = document.createElement('script');
    popads.setAttribute('data-cfasync',"false");
    popads.setAttribute('src','assets/pop.js');
    document.head.appendChild(popads);
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
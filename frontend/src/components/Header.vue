<template>
  <header id="header" class="fixed-top header-inner-pages ">
    <div  v-if="login" class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="/">SHORTN</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul >
          <li class="active"><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav><!-- .nav-menu -->

      <button v-on:click="logout"  class="get-started-btn scrollto">Logout</button>
  
    </div>
       <div  v-else class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="/">SHORTN</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul >
          <li class="active"><a href="/">Home</a></li>
        </ul>
      </nav><!-- .nav-menu -->

      <a  href="/login" class="get-started-btn scrollto">Get Started</a>
  
    </div>
  </header>

 
</template>

<script>
export default {
  computed:{
    login(){
      return this.$store.state.token;
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('salir')
    }
  }
}
</script>
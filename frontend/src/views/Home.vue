<template>
<div>
    <Hero/>
    <About/>
    <FaqHome/>
    <NewsLetter/>
</div>
</template>
<script>
import Hero from '@/components/Home/Hero.vue'
import About from '@/components/Home/About.vue'
import FaqHome from '@/components/Home/FaqHome.vue'
import NewsLetter from '@/components/Home/newsletter.vue'

export default {
  components:{
    Hero,
    About,
    FaqHome,
    NewsLetter
  }
}
</script>
  
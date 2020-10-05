<template>
    <div id="Login">
        <FormLogin/>
    </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/FormLogin.vue';

export default {
  name: 'login',
  components: {
    FormLogin
  },

}
</script>

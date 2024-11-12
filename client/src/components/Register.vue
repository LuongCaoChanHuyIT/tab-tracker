<template>
  <div>
    <h1>Register</h1>
    <br>
    <input type="email" name="email" placeholder="email" id="" v-model="email">
    <br>
    <input type="password" name="password" id="" v-model="password">
    <br>
    <div v-html="error"></div>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/AuthencationService.js'
export default {
  name: 'Register',
  data () {
    return {
      email:"",
      password:"",
      error: null
    }
  },
  methods:{
    async register(){
      try {
        const response = await authenticationService.register({
          email:this.email,
          password:this.password
        })
        console.log(response.data);
      }catch(error){
        this.error = error.response.data.error
      }
      
      
    }
  },
  watch:{
    email(value){
      console.log('email', value);
      
    }
  }
}
</script>

 
<style scoped>
 
</style>

<template>
 <div>
   <!-- <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <div>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     </div>
     <div>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     </div>
     <hr/>
     <button type="submit">Login</button>
   </form> -->
 </div>
</template>

<script>
  // import {AUTH_REQUEST} from 'actions/auth'
  import VueAuthenticate from 'vue-authenticate'

  export default {
    name: 'Login',
    data () {
      return {
        username: 'dogo',
        password: 'dogy',
      }
    },
    // methods: {
    //   login: function () {
    //     const { username, password } = this
    //     this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
    //       this.$router.push('/')
    //     })
    //   }
    // },
  }
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
  }
</style>

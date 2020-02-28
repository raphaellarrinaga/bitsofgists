<template>
  <div class="container">
    <div>
      <!-- <button v-on:click="greet">Login with Github</button> -->
      <button v-on:click="github">Login with Github</button>
    </div>
    <!-- <section v-if="errored" class="splash-info">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else class="gists">
      <h2>Number of gists: {{ gists.length }}</h2>
      <div v-if="loading">Loading...</div>
      <div
        v-else
        v-for="gist in gists"
        :key="gist.id"
        class="gist">
        <gist
          :html_url="gist.html_url"
          :id="gist.id"
          :updated_at="gist.updated_at"
          :content="gist.updated_at"
          :description="gist.description" />
      </div>
    </section> -->
  </div>
</template>

<script>
import Gist from '~/components/Gist.vue'
import axios from 'axios'

// Use vue x https://nuxtjs.org/guide/vuex-store
// Setup auth https://auth.nuxtjs.org/guide/setup.html
// Setup github access x https://auth.nuxtjs.org/providers/github.html
// Connect this.$auth.loginWith('github')
// doc https://www.digitalocean.com/community/tutorials/implementing-authentication-in-nuxtjs-app
// doc2 https://itnext.io/basic-authentication-using-auth-nuxt-js-e140859ab4c3

export default {
  components: {
    Gist
  },
  data () {
    return {
      gists: [],
      loading: true,
      errored: false,
    }
  },
  methods: {
    github () {},
    greet: function (event) {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert('Bonjour ' + this.name + ' !')
      // `event` est l'évènement natif du DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  async github () {
    await this.$auth.loginWith('github').catch(e => {
      this.$toast.show('Error', {icon: "fingerprint"});
    })
  },
  // mounted () {
  //   axios
  //     .get('https://api.github.com/users/raphaellarrinaga/gists')
  //     .then(response => (this.gists = response.data))
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  //     .finally(() => this.loading = false)
  // },
}

</script>

<style>
.container {
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  min-height: 100vh;
  text-align: center;
  justify-content: center;
}
.gists .gist + .gist {
  margin-top: 2rem;
}
</style>

<template>
  <div class="splash">
    <h1>{{ msg }}</h1>

    <div v-if="gists.length !== 0" class="gists-list">
      {{ gists }}
    </div>
    <div v-else class="splash-info">
      <p>No Posts published at this time.</p>
    </div>

    <!-- <div :v-html="htmlData"></div>
    <vue-embed-gist :gist-id="gistId" :file="file" /> -->
    <!-- <vue-embed-gist
      :gist-id="e1eb09e4a3580b2067a377b44b4d2ff3"
      :file="frontend_mustread.md"/> -->
  </div>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    VueEmbedGist
  },
  data() {
    return {
      gists: '',
      htmlData: '',
      gistId: '',
      file: ''
      // userName: '',
      // repoName: '',
      // fullRepoName: 'raphaellarrinaga/bonsai',
      // files: [],
      // url: ',
      // path: 'contents',
      // ifShow: false,
      // ifShow: true,
      // pathArray: ['contents']
    };
  },
  mounted () {
    axios
      .get('https://api.github.com/gists/3b8011676da3fcb52236c495b5c95565')
      .then(response => (this.gists = response))
  },
  methods: {
    // getServerData() {
    //   // https://api.github.com/users/raphaellarrinaga/gists
    //   axios
    //     .get('https://api.github.com/gists/3b8011676da3fcb52236c495b5c95565')
    //     .then((response) => {
    //       console.log(response);
    //       this.htmlData = response.htmlData,
    //       this.gistId = response.gistId,
    //       this.file = response.file
    //   })
    // }
    // findRepo() {
    //   this.ifShow = true;
    //   const repo = this.fullRepoName.split('/');
    //   this.userName = repo[0];
    //   this.repoName = repo[1];
    //   console.log(this.userName);
    //   console.log(this.repoName);
    //   axios.get(`https://api.github.com/repos/${this.userName}/${this.repoName}/${this.path}`)
    //     .then(response => {
    //       this.files = response.data;
    //       this.files.sort((a,b) => {
    //         if (a.type === 'dir' && b.type !== a.type) return -1
    //         else if (a.type === 'file' && b.type !== a.type) return 1;
    //         else return 0;
    //     });
    //     console.log(this.files);
    //   })
    //   .catch(error => {
    //     this.ifShow = false;
    //     console.log(error);
    //   });
    // },
  },
// https://gist.github.com/raphaellarrinaga
// https://gist.github.com/raphaellarrinaga/e1eb09e4a3580b2067a377b44b4d2ff3
// https://api.github.com/gists/$GIST_ID
// https://api.github.com/gists/e1eb09e4a3580b2067a377b44b4d2ff3
// frontend_mustread.md
};
</script>

<style scoped>
</style>

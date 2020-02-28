<template>
  <div class="gist">
    <header v-if="content.length !== 0" class="gist__header">
      <h1 class="gist__title">
        {{ Object.keys(content.files)[0] }}
      </h1>
      <div class="gist__url">
        <a :href="html_url">
          View on github
        </a>
      </div>
    </header>
    <div class="gist__metas">
      <ul>
        <li>
          <b>Description : </b>{{ description }}
        </li>
        <li>
          <b>URL : </b>{{ html_url }}
        </li>
        <li>
          <b>ID : </b>{{ id }}
        </li>
        <li>
          <b>Updated at : </b>{{ updated_at }}
        </li>
      </ul>
    </div>
    <div v-if="content.length !== 0" class="gist__content">
      <vue-markdown>
        {{ content.files[Object.keys(content.files)[0]].content }}
      </vue-markdown>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueMarkdown from 'vue-markdown';
export default {
  name: 'Gist',
  props: [
    'description',
    'html_url',
    'id',
    'updated_at',
  ],
  components: {
    VueMarkdown
  },
  data() {
    return {
      content: ''
    };
  },
  mounted () {
    axios
      .get(`https://api.github.com/gists/${this.id}`)
      .then(response => (this.content = response.data))
  },
}
</script>

<style scoped>
.gist {
  background: #fefefe;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  text-align: left;
  word-break: break-word;
}
.gist__header {
  background: #f6f8fa;
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
}
.gist__title {
  font-size: .85rem;
  margin: 0;
}
.gist__url {
  font-size: .85rem;
}
.gist__metas {
  padding: .5rem 1.5rem;
}
.gist__content {
  padding: .5rem 1.5rem;
  word-wrap: break-word;
}
</style>

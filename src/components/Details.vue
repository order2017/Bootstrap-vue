<template>
  <div class="Details container">
    <ul class="list-group">
      <li class="list-group-item">{{ users.name }}</li>
      <li class="list-group-item">{{ users.phone }}</li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
      </li>
    </ul>
  </div>
</template>

<script>
import VueQArt from 'vue-qart'
export default {
  name: 'Details',
  data () {
    return {
        users: [],
        config: {
            value: '',
            imagePath: '../static/images/logo.png',
            filter: '',
            size: 500
        },
        downloadButton: false
    }
  },
  methods: {
      fetchUser(id) {
          this.axios.get("http://localhost:3000/users/"+id).then((response) => {
              console.log(response.data);
              this.users = response.data;
          })
      }
  },
  created() {
      this.fetchUser(this.$route.params.id);
  },
  components: {
      VueQArt
  },
  mounted() {
      this.config.value = window.location.href;
  }
}
</script>

<style scoped>

</style>

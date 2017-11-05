<template>
  <div class="Details container">
    <ul class="list-group">
      <li class="list-group-item">{{ users.name }}</li>
      <li class="list-group-item">{{ users.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
        users: []
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
  }
}
</script>

<style scoped>

</style>

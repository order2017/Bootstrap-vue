<template>
  <div class="Index container">
    <table class="table table-striped">
      <caption>用户管理系统</caption>

      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>操作</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users">
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <router-link to="/details" type="button" class="btn btn-default">详情</router-link>
          <router-link to="/edit" type="button" class="btn btn-primary">编辑</router-link>
          <router-link to="/delete" type="button" class="btn btn-danger">删除</router-link>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
        users: []
    }
  },
  methods: {
      showUser() {
          this.axios.get("http://localhost:3000/users").then((response) => {
              this.users = response.data;
          })
      }
  },
  created() {
      this.showUser()
  }
}
</script>

<style scoped>

</style>

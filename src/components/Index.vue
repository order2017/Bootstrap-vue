<template>
  <div class="Index container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>

    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">

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
      <tr v-for="user in filterBy(users,filterInput)">
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <router-link v-bind:to="'/details/'+ user.id" type="button" class="btn btn-default">详情</router-link>
          <router-link v-bind:to="'/edit/'+ user.id" type="button" class="btn btn-primary">编辑</router-link>
          <button v-on:click="deleteUser(user.id)" type="button" class="btn btn-danger">删除</button>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Index',
  data () {
    return {
        users: [],
        alert: "",
        filterInput: ""
    }
  },
  methods: {
      showUser() {
          this.axios.get("http://localhost:3000/users").then((response) => {
              this.users = response.data;
          })
      },
      deleteUser(id) {
          this.axios.delete("http://localhost:3000/users/"+id).then((response)=>{
              this.$router.push({path:"/",query: this.$layer.msg("用户删除成功！")});
          })
      },
      filterBy(users,value){
          return users.filter(function(user){
              return user.name.match(value);
          })
      }
  },
  created() {
      if (this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }
      this.showUser()
  },
  updated() {
      this.showUser()
  },
  components: {
      Alert
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="Edit container">
    <form class="form-horizontal" role="form" v-on:submit="editUser">
      <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">姓名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="firstname" v-model="users.name" placeholder="请输入姓名">
        </div>
      </div>
      <div class="form-group">
        <label for="lastname" class="col-sm-2 control-label">电话</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lastname" v-model="users.phone" placeholder="请输入电话">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
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
      },
      editUser(e) {
          if (!this.users.name || !this.users.phone) {
              this.$layer.msg("请添加对应的信息！");
          }else{

              let upUser = {
                  name: this.users.name,
                  phone: this.users.phone,
              }

              this.axios.put("http://localhost:3000/users/"+this.$route.params.id,upUser).then((response)=> {
                  //console.log(response);
                  this.$router.push({path:"/",query:{alert: "用户信息更新成功！"}});
              })
              e.preventDefault();
          }
          e.preventDefault();
      }
  },
  created() {
      this.fetchUser(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>

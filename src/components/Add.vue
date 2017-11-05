<template>
  <div class="Add container">

    <form class="form-horizontal" role="form" v-on:submit="addUser">
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
  name: 'Add',
  data () {
    return {
        users: {},
    }
  },
  methods: {
      addUser(e) {
          if (!this.users.name || !this.users.phone) {
              this.$layer.msg("请添加对应的信息！");
          }else{

              let newUser = {
                  name: this.users.name,
                  phone: this.users.phone,
              }

              this.axios.post("http://localhost:3000/users",newUser).then((response)=> {
                  //console.log(response);
                  this.$router.push({path:"/",query:{alert: "用户信息添加成功！"}});
              })
              e.preventDefault();
          }
          e.preventDefault();
      }
  }
}
</script>

<style scoped>

</style>

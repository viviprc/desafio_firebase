<template>
  <div class="home">
    <el-button @click="logout" type="danger">Ir a LogIn</el-button>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  methods: {
    logout(){
      firebase.auth().signOut()
      .then(() => this.$router.push("login"))
    }
  },
  
}
</script>
<style lang="scss" scoped>
button.el-button{
  width: 30%;
}

</style>


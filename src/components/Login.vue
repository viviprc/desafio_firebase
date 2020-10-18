<template>
  <div class="login">
    <h1>Log in</h1>
    <div id="Login">
      <el-input placeholder="Correo electrónico" v-model="user"></el-input>
      <el-input
        placeholder="Contraseña"
        v-model="password"
        show-password
      ></el-input>
      <el-button  @click="login"  type="primary">Log in</el-button>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { Message } from "element-ui";
export default {
  data() {
    return {
      user: "", 
      password: "",
    };
  },
  methods: {
    login() {
      firebase.auth()
        .signInWithEmailAndPassword(
          this.user,
          this.password
        )
        .then(
          (accept) => {
            this.$router.push("home");
          },
          (reject) => {
            this.$message({
              showClose: true,
              message: reject.message,
              type: "error",
            });
          }
        );
    },
  },
};
</script>
<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#Login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
}
.el-input {
  padding: 10px 0 10px 0;
}
button.el-button {
  width: 100%;
  margin: 10px;
}
</style>
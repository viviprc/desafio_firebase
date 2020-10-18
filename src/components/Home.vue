<template>
  <div class="home">
    <el-button @click="logout" type="danger">Ir a LogIn</el-button>
    <div class='data_table'>
      <el-table :data="patients" style="width: 75%; margin: auto">
        <el-table-column prop="data.name" label="Nombre" width="200">
        </el-table-column>
        <el-table-column prop="data.email" label="Email" width="300">
        </el-table-column>
        <el-table-column fixed="right" label="Operaciones" width="250">
          <template slot-scope="scope">
            <el-button class='edit-button' icon="el-icon-edit" @click="() => showDialog(scope.$index)" type="primary" size="small"></el-button>
            <el-button class='edit-button' icon="el-icon-delete" @click="remove(scope.$index)" type="danger" size="small"></el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
            <el-dialog
              title="Editar Paciente"
              :visible.sync="dialogVisible"
              width="50%">
              <span><Add :isEditing='true' :patient='selectedPatient'/></span>
            </el-dialog>
  </div>
</template>
<script>
import firebase from "firebase";
import {mapState, mapActions} from "vuex"
import Add from './Add.vue'

export default {
  components:{
    Add
  },
  data() {
      return {
        dialogVisible: false,
        selectedPatient: undefined
      };
    },
  computed: {
    ...mapState(['patients'])

  },
   methods: {
    ...mapActions(['getPatients', 'deletePatient']),
    
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.push("login"));
    },
    remove(i) {
      let id = this.patients.[i].id;
      this.deletePatient(id)
      // alert(id)
    },
    showDialog(i) {
      this.selectedPatient = this.patients.[i]
      console.log(i)
      console.log(this.selectedPatient)
      this.dialogVisible= true
    }
  },
};
</script>
<style lang="scss" scoped>
button.el-button {
  width: 150px;
}
button.el-button.edit-button{
  width: 50px
}
.data_table{
  margin-top: 30px;
}
</style>


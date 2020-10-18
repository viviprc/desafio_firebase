<template>
  <div class='contenedor'>
    <div>
      <h4>Agregar un paciente nuevo</h4>
    </div>
    <div>
      <el-form style="width: 75%; margin: auto" ref="form"  label-width="120px" size="mini">
      <el-form-item label="Nombre">
        <el-input v-model="name"></el-input>
      </el-form-item>
       <el-form-item label="E-mail">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button v-if="!isEditing" type="primary" @click="onSubmit">Agregar</el-button>
        <el-button v-if="isEditing" type="primary" @click="update">Actualizar</el-button>
      </el-form-item>
    </el-form>
    </div>
  
    
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'add',
  data() {
    return {
        name: this.patient ? this.patient.data.name : "",
        email: this.patient ? this.patient.data.email : "",
    };
  },
  props:{
    isEditing: Boolean,
    patient: Object
  },
  watch:{
    patient: function(newPatient) {
      this.name= newPatient ? newPatient.data.name : ""
      this.email= newPatient ? newPatient.data.email : ""
    }
  },
  methods: {
      ...mapActions(['setPatient', 'updatePatient']),
    onSubmit() {
        let name = this.name
        let email = this.email

        this.setPatient({
            name,
            email
        });
        this.name =''
        this.email=''
    },
    update(){
      this.updatePatient({
        id: this.patient.id,
        name: this.name,
        email: this.email
      })
    }
  },
};
</script>
<style lang="scss">
h4{
  text-align: center;
 padding: 20px
}
button.el-button.el-button {
  width: 100px;
}
 
</style>
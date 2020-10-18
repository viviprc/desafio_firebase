import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    patients: []
  },
  mutations: {
      GET_PATIENTS(state, patients){
          state.patients = patients
      }
  },
  actions: {
    setPatient({commit}, patient){
     firebase.firestore().collection('patients').add(patient)
    }, 
    getPatients({commit}){
        firebase.firestore().collection('patients').onSnapshot(querySnapshot => {
            const pacientes = []
            querySnapshot.forEach(doc => {
                pacientes.push({
                    id: doc.id,
                    data: doc.data()

                })
            })
            commit('GET_PATIENTS', pacientes)
        })
    },
    deletePatient({commit}, id){
      console.log('hola')
      firebase.firestore().collection('patients').doc(id).delete()
    },
    updatePatient({commit}, patient){
      firebase.firestore().collection('patients').doc(patient.id).update({
        name: patient.name,
        email: patient.email
      })
    }
  },
  modules: {
  }
})

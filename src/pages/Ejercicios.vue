<template>

  <div class="grid justify-content-between">
    <!-- PARTE IZQUIERDA -->
    <div class="col-12 lg:col-6 justify-content-center">
        <div class="col-12">
          <h3 class="text-center titulo" style="color:#256029;"> Ejercicios recomendados del día </h3>
        </div>
        <div class="card col-12">
        <DataTable v-if="dataviewValue.length > 0 && dataviewValue[0].ejercicioDetalles" :value="dataviewValue" :rows="7" responsiveLayout="scroll"> 
          <Column field="name" header="Nombre" :style="{width:'50%'}" >
						<template #body="{data}">
              <router-link :to="getLink(data)">
                <p class="p-flex text-center text-bold inline" style="color:rgb(22 163 74)">{{data.ejercicioDetalles[0].name}}</p>
              </router-link>
            </template>
					</Column>
          <Column field="muscles" header="Zona muscular" :style="{width:'50%'}">
						<template #body="{data}" :v-model="zonaMuscular">
                <p class="p-flex text-center text-bold inline">
                  {{zonaMuscular[data.ejercicioDetalles[0].category]}}
                </p> 
            </template>
					</Column>
          <Column field="done" header="Realizado" :style="{width:'50%'}">
						<template #body="{data}">
                <p v-if="data.hecho === true"  class="text-center">
                  <i class="pi text-green-500 pi-check" style="transform: scale(1.5);"/>
                </p> 
            </template>
					</Column>
          <template #empty>
            <p class="text-center p-flex"> No tiene ninguna recomendación de ejercicios para hoy. </p>
          </template>
        </DataTable>
      </div>    
    </div>
    <!-- PARTE DERECHA -->
    <div class="grid col-12 lg:col-6 justify-content-center">
        <div class="col-12">
          <h3 class="p-flex text-center titulo" style="color:#256029;">Buscador de ejercicios</h3>
        </div>
        <router-link to= "/ejercicio">
          <img src='../../public/images/buscador_ejercicios.png' alt='Buscador de Ejercicios' class="img-fluid"/>
        </router-link>
        <div class="col-12">
          <h5 class="p-flex text-center">En esta sección podrás buscar a partir de unos filtros establecidos</h5>
        </div>
    </div>
	</div>
</template>
<script>
import ExerciseService from '../service/ExerciseService';

export default {
  data() {
    return {
      zonaMuscular: {
        0: "",
        8:"Brazos",
        9:"Piernas",
        10:"Abdominales",
        11:"Pecho",
        12:"Espalda",
        13:"Hombros",
        14:"Gemelos"
      },
      dataviewValue: {},
    };
  },
  exerciseService: null,
  created(){
    this.exerciseService = new ExerciseService();
    this.fetchItems();
  },
  methods: {
    fetchItems(){
      this.exerciseService.getRecomendaciones(this.$store.state.userId)
      .then(res => {
        this.dataviewValue = res.data
      });
    },
    getLink(ejecucion) {
      if (ejecucion.hecho === true) {
          return "/ejercicio/detalles/"+ejecucion.ejercicioDetalles[0]._id+"/editar/"+ejecucion._id
      } else {
        return '/ejercicio/detalles/' + ejecucion.ejercicioDetalles[0]._id
      }
    }
  },
};
</script>

<style>


.p-galleria .p-galleria-thumbnail-container{
  display: none;
}
.img-fluid{
  width:100%;
  height: auto;
}
</style>
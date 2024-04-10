<template>
<v-container>
  <v-row>
  <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Clasificación por ladder
    </v-card-title>

    <v-card-text>
      <div> Puntos de ladder de los españoles, el corte quedó en 130 puntos</div>
    </v-card-text>
  </v-card>
 </v-row>
</v-container>

<br/>
        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows sortField="puntosMundialReckoning" :sortOrder="-1" >
            <Column field="Nick" header="Nick"></Column>
            <Column field="Semana 1" header="Semana 1"></Column>
            <Column field="Semana 2" header="Semana 2"></Column>
            <Column field="Semana 3" header="Semana 3"></Column>
            <Column field="Puntos" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
</template>

<script>
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/puntosMundialReckoning").then(res => res.json())
            .then(data => items.value = data.datos);
        })

        const items = ref();
       

        return {  items }
    }
}

</script>

<style>
.rojo{
    color: red;
  }

.rojo2{
    color: rgb(186, 0, 0);
  }

.verde{
    color: #64DD17;
  }

.cuenta{
    color: white;
  }

.titulo{
  color:yellow
}
</style>
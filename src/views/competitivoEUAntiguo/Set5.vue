
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
        <template #header>
             <h2 style="text-align:center" class="titulo">Top TFT España   </h2>
        </template>
            <Column field="nick" header="Nick"></Column>
            <Column field="semana1Reckoning" header="Semana 1"></Column>
            <Column field="semana2Reckoning" header="Semana 2"></Column>
            <Column field="semana3Reckoning" header="Semana 3"></Column>
            <Column field="puntosMundialReckoning" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
</template>

<script>
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("http://127.0.0.1:7000/listaTFT?").then(res => res.json())
            .then(data => items.value = data);
        })

        const items = ref();

        return { items}
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
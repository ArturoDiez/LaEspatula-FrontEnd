
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
      <div> Puntos de ladder de los españoles, el corte quedó en 120 puntos</div>
    </v-card-text>
  </v-card>
 </v-row>
</v-container>
<br/>
        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        sortField="puntosMundialFates" :sortOrder="-1" stripedRows>
        <template #header>
             <h2 style="text-align:center" class="titulo">Top TFT España   </h2>
        </template>
            <Column field="nick" header="Nick"></Column>
            <Column field="semana1Fates" header="Semana 1"></Column>
            <Column field="semana2Fates" header="Semana 2"></Column>
            <Column field="semana3Fates" header="Semana 3"></Column>
            <Column field="puntosMundialFates" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
</template>

<script>
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/listaTFT?").then(res => res.json())
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
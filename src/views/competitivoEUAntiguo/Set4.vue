<template>
<AdsTemplate/>
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
      <div> Entran los 40 primeros (si hay alguna smurf, entra el siguiente). El corte quedó en 115 puntos (TMS ACKK)</div>
    </v-card-text>
  </v-card>
  </v-row>
</v-container>
<v-tabs
      v-model="tab"
      grow
    >
      <v-tab value="Europa">Total</v-tab>
      <v-tab value="España">España</v-tab>
    </v-tabs>
<v-window v-model="tab">
  <v-window-item value="Europa">
        <DataTable :value="itemsEU" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows sortField="puntosMundialReckoning" :sortOrder="-1" >
            <Column field="topESP" header="Posición" sortable="true" style="text-align:center;width:30px" >
            <template #body="slotProps">
              {{itemsEU.indexOf(slotProps.data)+1}}
            </template>
            </Column>
            <Column field="cuenta" header="Cuenta"></Column>
            <Column field="semana1Fates" header="Semana 1"></Column>
            <Column field="semana2Fates" header="Semana 2"></Column>
            <Column field="semana3Fates" header="Semana 3"></Column>
            <Column field="puntosMundial" header="Puntos" style="width:30px"></Column> 
        </DataTable>
  </v-window-item>
        <v-window-item value="España">
        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        sortField="puntosMundialFates" :sortOrder="-1" stripedRows>
            <Column field="nick" header="Nick"></Column>
            <Column field="semana1Fates" header="Semana 1"></Column>
            <Column field="semana2Fates" header="Semana 2"></Column>
            <Column field="semana3Fates" header="Semana 3"></Column>
            <Column field="puntosMundialFates" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
      </v-window-item>
      
</v-window>
</template>

<script>
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/puntosMundialFates").then(res => res.json())
            .then(data => items.value = data);

            fetch("https://api.laespatula.net/puntosMundialFatesEU").then(res => res.json())
            .then(data => itemsEU.value = data)
            .catch((e) => {itemsEU.value= undefined ; console.log(e)});
        })

        const items = ref();
        const itemsEU = ref();

        return { items, itemsEU }
    },

    data: () => ({
      tab: null,
    }),
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
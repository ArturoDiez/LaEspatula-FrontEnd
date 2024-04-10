<template>
<v-container>
  <v-row>
 
 <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Finales Nacionales
    </v-card-title>

    <v-card-text>
      <div> Los 8 clasificados lucharán por el campeonato.</div>
    </v-card-text>
 </v-card>
 </v-row>
</v-container>
<br/>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab value="High Level">High Level</v-tab>
      <v-tab value="Master Cups">Master Cups</v-tab>
    </v-tabs>

    
      <v-window v-model="tab">
        <v-window-item value="High Level">
          <v-select
          v-model="selectedHL"
          label="High Level"
          :items="HighLevel"
          >
          </v-select>

          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      High Level
    </v-card-title>

    <v-card-text>
      <div> El primero y segundo de cada copa clasifican a la final nacional, y el primero clasifica a la GSC (Golden Spatula Cup,
         torneo europeo).</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsHL" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="NICK" header="Nick"></Column>
            <Column field="PUNTOS TOTAL" header="Puntos del torneo" style="text-align:center;width:165px"></Column> 
        </DataTable>
        </v-window-item>

        <v-window-item value="Master Cups">
          <v-select
          v-model="selectedCup"
          label="Cups"
          :items="cups"
          >
          </v-select>
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Master Cups
    </v-card-title>

    <v-card-text>
      <div> El primero de cada copa clasifican a la final nacional, y los 2 primeros clasifican a la GSC (Golden Spatula Cup,
         torneo europeo). El primer y segundo de Gamergy también clasifican a la final nacional.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsCup" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="NICK" header="Nick"></Column>
            <Column field="FASE" header="Fase"></Column>
        </DataTable>
        </v-window-item>
      </v-window>
</template>

<script>
import { ref, watch} from "vue";

export default{
  setup() {
    const selectedHL = ref();
    const selectedCup = ref();
    const HighLevel =  ref(['High Level 1', 'High Level 2']);
    const cups =  ref(['MasterCup 1', 'MasterCup 2']);

        watch(selectedHL, (newValue) => fetch("https://api.laespatula.net/snapshotsESP/10/" + newValue )
            .then(res => res.json())
            .then(data => itemsHL.value = data.datos))

        watch(selectedCup, (newValue) => fetch("https://api.laespatula.net/cupsESP/10/" + newValue )
            .then(res => res.json())
            .then(data => itemsCup.value = data.datos))
            

        const itemsHL = ref();
        const itemsCup = ref();


        return { selectedHL, selectedCup, HighLevel, cups, itemsHL, itemsCup}
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
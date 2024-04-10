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
      <div> Los 16 clasificados lucharán por el campeonato y las 4 plazas que se otorgan al SuperBrawl.</div>
    </v-card-text>
 </v-card>
 </v-row>
</v-container>
<br/>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab value="Snapshots">Snapshots</v-tab>
      <v-tab value="Ranking Ladder">Ranking Ladder</v-tab>
      <v-tab value="Master Cups">Master Cups</v-tab>
      <v-tab value="Ranking Cups">Ranking Cups</v-tab>
    </v-tabs>

    
      <v-window v-model="tab">
        <v-window-item value="Snapshots">
          <v-select
          v-model="selectedSnap"
          label="Snapshot"
          :items="snapshots"
          >
          </v-select>
          <DataTable :value="itemsSnap" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="SUMMONER" header="Cuenta"></Column>
            <Column field="RANK" header="Liga"></Column>
            <Column field="LPS" header="LPs"></Column>
            <Column field="MATCHES" header="Partidas Jugadas" style="width:30px"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>

        <v-window-item value="Ranking Ladder">
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Ranking LVLUP Spanish Tour (Ladder)
    </v-card-title>

    <v-card-text>
      <div> Los 4 que han sumado más puntos a lo largo de las 12 snapshots se clasificarán a las finales nacionales.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsLadder" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="NAME" header="Cuenta"></Column>
            <Column field="SS1" header="SS1"></Column>
            <Column field="SS2" header="SS2"></Column>
            <Column field="SS3" header="SS3"></Column>
            <Column field="SS4" header="SS4"></Column>
            <Column field="SS5" header="SS5"></Column>
            <Column field="SS6" header="SS6"></Column>
            <Column field="SS7" header="SS7"></Column>
            <Column field="SS8" header="SS8"></Column>
            <Column field="SS9" header="SS9"></Column>
            <Column field="SS10" header="SS10"></Column>
            <Column field="SS11" header="SS11"></Column>
            <Column field="SS12" header="SS12"></Column>
            <Column field="TOTAL" header="Puntos" style="width:30px" sortable="true"></Column> 
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
      <div> Los 2 primeros de cada copa clasifican a las finales nacionales, y los 3 primeros clasifican a la GSC(Golden Spatula Cup,
         torneo europeo). Del top 3 al 80 sumarán puntos para el Ranking LVLUP Teamfight Tactics.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsCup" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="NICK" header="Nick"></Column>
            <Column field="FASE" header="Fase"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>
        <v-window-item value="Ranking Cups">
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Ranking LVLUP Teamfight Tactics (Cups)
    </v-card-title>

    <v-card-text>
      <div> Los 6 que han sumado más puntos a lo largo de las Master Cups se clasificarán a las finales nacionales (aparte de los 6
        clasificados directos por top2 de Master Cup).</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsCupTotal" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="SUMMONER" header="Cuenta"></Column>
            <Column field="MC1" header="MC1"></Column>
            <Column field="MC2" header="MC2"></Column>
            <Column field="MC3" header="MC3"></Column>
            <Column field="TOTAL" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>
      </v-window>
</template>

<script>
import { ref, onMounted, watch} from "vue";

export default{
  setup() {
    const selectedSnap = ref();
    const selectedCup = ref();
    const snapshots =  ref(['Snapshot 1', 'Snapshot 2','Snapshot 3', 'Snapshot 4', 'Snapshot 5', 'Snapshot 6'
    ,'Snapshot 7', 'Snapshot 8', 'Snapshot 9', 'Snapshot 10', 'Snapshot 11', 'Snapshot 12']);
    const cups =  ref(['MasterCup 1', 'MasterCup 2', 'MasterCup 3']);

        watch(selectedSnap, (newValue) => fetch("https://api.laespatula.net/snapshotsESP/9/" + newValue )
            .then(res => res.json())
            .then(data => itemsSnap.value = data.datos))

        watch(selectedCup, (newValue) => fetch("https://api.laespatula.net/cupsESP/9/" + newValue )
            .then(res => res.json())
            .then(data => itemsCup.value = data.datos))

        onMounted(() => {
            fetch("https://api.laespatula.net/totalSnapESP/9").then(res => res.json())
            .then(data => itemsLadder.value = data.datos);
            fetch("https://api.laespatula.net/totalCupsESP/9").then(res => res.json())
            .then(data => itemsCupTotal.value = data.datos);
        })
            

        const itemsSnap = ref();
        const itemsLadder = ref();
        const itemsCup = ref();
        const itemsCupTotal = ref();


        return { selectedSnap, selectedCup, snapshots, cups, itemsSnap, itemsLadder, itemsCup, itemsCupTotal}
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
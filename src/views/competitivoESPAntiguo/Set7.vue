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
      <v-tab value="Snapshots">Snapshots</v-tab>
      <v-tab value="Master Cups">Master Cups</v-tab>
      <v-tab value="Ranking">Ranking</v-tab>
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

        <v-window-item value="Master Cups">
          <v-select
          v-model="selectedCup"
          label="Cups"
          :items="cups"
          >
          </v-select>
          <DataTable :value="itemsCup" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSICIÓN" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="JUGADOR" header="Nick"></Column>
            <Column field="CUENTA" header="Cuenta"></Column>
            <Column field="FASE" header="Fase"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>
        <v-window-item value="Ranking">
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Ranking LVLUP Teamfight Tactics
    </v-card-title>

    <v-card-text>
      <div> Los 8 que han sumado más puntos a lo largo de las Master Cups se clasificarán a las finales nacionales.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows :paginator="true" :rows="10">
          
            <Column field="POSICION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="CUENTA" header="Cuenta"></Column>
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
            <Column field="SS13" header="SS13"></Column>
            <Column field="SS14" header="SS14"></Column>
            <Column field="SS15" header="SS15"></Column>
            <Column field="SS16" header="SS16"></Column>
            <Column field="SS17" header="SS17"></Column>
            <Column field="FC1" header="FC1"></Column>
            <Column field="FC2" header="FC2"></Column>
            <Column field="FC3" header="FC3"></Column>
            <Column field="FC4" header="FC4"></Column>
            <Column field="FC5" header="FC5"></Column>
            <Column field="MC1" header="MC1"></Column>
            <Column field="MC2" header="MC2"></Column>
            <Column field="MC3" header="MC3"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column> 
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
    const snapshots =  ref(['Snapshot 1', 'Snapshot 2', 'Snapshot 3', 'Snapshot 4', 'Snapshot 5', 'Snapshot 6', 'Snapshot 7',
    'Snapshot 8', 'Snapshot 9', 'Snapshot 10', 'Snapshot 11', 'Snapshot 12', 'Snapshot 13', 'Snapshot 14', 'Snapshot 15',
    'Snapshot 16', 'Snapshot 17']);
    const cups =  ref(['FlashCup 1', 'FlashCup 2', 'FlashCup 3', 'FlashCup 4', 'FlashCup 5', 'MasterCup 1', 'MasterCup 2', 'MasterCup 3']);

        watch(selectedSnap, (newValue) => fetch("http://127.0.0.1:7000/snapshotsESP/7/" + newValue )
            .then(res => res.json())
            .then(data => itemsSnap.value = data.datos))

        watch(selectedCup, (newValue) => fetch("http://127.0.0.1:7000/cupsESP/7/" + newValue )
            .then(res => res.json())
            .then(data => itemsCup.value = data.datos))

        onMounted(() => {
            fetch("http://127.0.0.1:7000/totalESP/7").then(res => res.json())
            .then(data => items.value = data.datos);
        })
            

        const itemsSnap = ref();
        const itemsCup = ref();
        const items = ref();


        return { selectedSnap, selectedCup, snapshots, cups, itemsSnap, items, itemsCup}
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
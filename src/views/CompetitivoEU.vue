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
      Rising Legends Finals (Europeo)
    </v-card-title>

    <v-card-text>
      <div> Los 32 clasificados lucharán por el campeonato y las X plazas que se otorgan al mundial.</div>
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
      <v-tab value="GSCs">GSCs</v-tab>
      <v-tab value="Ranking GSCs">Ranking GSC</v-tab>
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
            <Column field="NAME" header="Cuenta"></Column>
            <Column field="RANK" header="Liga"></Column>
            <Column field="LPS" header="LPs"></Column>
            <Column field="MATCHES" header="Partidas Jugadas" style="width:30px"></Column>
            <Column field="LADDER_POINTS" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>

        <v-window-item value="Ranking Ladder">
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Ladder 7
    </v-card-title>

    <v-card-text>
      <div> Los 4 que han sumado más puntos a lo largo de las 11 snapshots se clasificarán al europeo.</div>
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
            <Column field="TOTAL" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>

        <v-window-item value="GSCs">
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
      Golden Spatula Cups
    </v-card-title>

    <v-card-text>
      <div> El primero de cada copa clasifica al europeo. Del top 2 al 16 sumarán puntos para el 
        Ranking de las GSCs.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsCup" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="SUMMONER" header="Cuenta"></Column>
            <Column field="FASE" header="Fase"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column> 
        </DataTable>
        </v-window-item>
        <v-window-item value="Ranking GSCs">
          <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Ranking GSCs
    </v-card-title>

    <v-card-text>
      <div> Los 21 que han sumado más puntos a lo largo de las GSCs se clasificarán al europeo.</div>
    </v-card-text>
 </v-card>
          <DataTable :value="itemsCupTotal" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="POSITION" header="Posición" style="text-align:center;width:30px" ></Column>
            <Column field="SUMMONER" header="Cuenta"></Column>
            <Column field="GSC1" header="GSC1"></Column>
            <Column field="GSC2" header="GSC2"></Column>
            <Column field="GSC3" header="GSC3"></Column>
            <Column field="PUNTOS" header="Puntos" style="width:30px" sortable="true"></Column>
            <Column field="PAIS" header="País"></Column>
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
    const snapshots =  ref(['Snapshot 1', 'Snapshot 2', 'Snapshot 3', 'Snapshot 4', 'Snapshot 5','Snapshot 6'
    ,'Snapshot 7','Snapshot 8']);
    const cups =  ref(['GSC 1', 'GSC 2']);

        watch(selectedSnap, (newValue) => fetch("https://api.laespatula.net/snapshotsEU/8/" + newValue )
            .then(res => res.json())
            .then(data => itemsSnap.value = data.datos))

        watch(selectedCup, (newValueCup) => fetch("https://api.laespatula.net/GSCEU/8/" + newValueCup )
            .then(res => res.json())
            .then(data => itemsCup.value = data.datos))

        onMounted(() => {
            fetch("https://api.laespatula.net/totalSnapEU/8").then(res => res.json())
            .then(data => itemsLadder.value = data.datos);
            fetch("https://api.laespatula.net/totalGSCEU/8").then(res => res.json())
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
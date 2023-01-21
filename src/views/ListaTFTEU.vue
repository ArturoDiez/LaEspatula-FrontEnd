<template>

<v-container>
  <h1 style="text-align:center" class="titulo">Cortes de ELO</h1>
  <br/>
  <v-row>
    
  <v-card
    class="mx-auto"
    color="indigo-lighten-1"
    elevation="5"
  >
  <v-card-title >
      <div> Corte del top 26 = <a v-if="dataGeneral">{{ dataGeneral.top26 }} LPs</a></div>
    </v-card-title>
  </v-card>
    
 <v-card
    class="mx-auto"
    color="indigo-lighten-1"
    elevation="5"
  >
  <v-card-title >
  <div> Corte de Challenger = <a v-if="dataGeneral">{{ dataGeneral.corteCh }} LPs</a></div>
  </v-card-title>
 </v-card>
 <v-card
    class="mx-auto"
    color="indigo-lighten-1"
    elevation="5"
  >
  <v-card-title >
  <div> Corte de GrandMaster = <a v-if="dataGeneral">{{ dataGeneral.corteGM }} LPs</a></div>
  </v-card-title>
 </v-card>
 </v-row>
</v-container>
<br/>
<v-select
  v-model="selectedLiga"
  label="Liga"
  :items="ligas"
>
</v-select>
        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
        <template #header>
             <h1 style="text-align:center" class="titulo">Top TFT Europa</h1>
        </template>
          
            <Column field="topESP" header="Rango" sortable="true" style="text-align:center;width:30px" >
            <template #body="slotProps">
              {{items.indexOf(slotProps.data)+1}}
            </template>
            </Column>
            <Column field="summonerName" header="Cuenta"></Column>
            <Column field="leaguePoints" header="LPs"></Column>
            <Column field="partidasJugadas" header="Partidas Jugadas" style="width:30px">
            <template #body="slotProps">
              {{slotProps.data.wins + slotProps.data.losses}}
            </template></Column>
            <Column field="wins" header="Victorias" style="width:30px" sortable="true"></Column> 
        </DataTable>
</template>

<script>
import { ref, watch} from "vue";

export default{
  setup() {
    const selectedLiga = ref();
    const ligas =  ref(['Challenger','GrandMaster','Master']);

        watch(selectedLiga, (newValue) => fetch("https://api.laespatula.net/listaTFTEU/" + newValue )
            .then(res => res.json())
            .then(data => dataGeneral.value = data)
            .then(data => items.value = data.lista.datos))
            

        const items = ref();
        const dataGeneral = ref()


        return { items, ligas, selectedLiga, dataGeneral}
    },
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
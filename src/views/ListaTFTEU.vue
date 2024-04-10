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
      <div> Corte del top 35 = <a v-if="dataGeneral">{{ dataGeneral.top26 }} LPs</a></div>
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
<v-container>
  <v-row  no-gutters>
    <v-col>
<div class="search-wrapper">
    <v-text-field
      v-model="search"
      variant="outlined"
      label="Buscar jugador por nombre de invocador..."
      single-line
      hide-details
      clearable
    ></v-text-field>
</div>
</v-col>
<v-col cols="2" class="refresh-button-container" justify="start">
      <v-btn @click="refreshList" block variant="plain" elevation="10" class="titulo">Actualizar lista</v-btn>
  </v-col>
</v-row>
</v-container>

        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
        <template #header>
             <h1 style="text-align:center" class="titulo">Top TFT Europa</h1>
        </template>
          
            <Column field="topEUW" header="TopEUW" sortable="true" style="text-align:center;width:30px" >
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

export default {
  data() {
    return {
      search: "",
      selectedLiga: "",
      ligas: ["Challenger", "GrandMaster", "Master"],
      items: [],
      dataGeneral: null,
    };
  },
  methods: {
    filterItems() {
      if (this.search) {
        this.items = this.items.filter((item) =>
          item.summonerName.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.fetchTableData();
      }
    },
    fetchTableData() {
      if (this.selectedLiga === "") {
        this.selectedLiga = "Challenger";
      }
      fetch("https://api.laespatula.net/listaTFTEU/" + this.selectedLiga)
        .then((res) => res.json())
        .then((data) => {
          this.dataGeneral = data;
          this.items = data.lista.datos;
        })
        .catch((error) => {
          console.error("Error fetching table data:", error);
        });
    },
    refreshList() {
      this.fetchTableData();
    }
  },

  created() {
    this.fetchTableData();
  },
  watch: {
    selectedLiga() {
      this.fetchTableData();
    },
    search() {
      this.filterItems();
    },
  },
};
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
.search-wrapper {
  width: 500px; 
  margin-bottom: 20px; 
}
.refresh-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
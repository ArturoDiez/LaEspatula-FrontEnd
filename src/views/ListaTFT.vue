<template>
<v-container>
  <v-row>
  <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      FAQs
    </v-card-title>
    <v-card-text>
      <div>No salgo en la lista y tengo elo suficiente para hacerlo, ¿qué hago? 
      (La lista es para los 100 primeros desde Challenger a Máster)</div>
    </v-card-text>
    <v-card-text>
      <div class="titulo">Contacta con <a href='https://twitter.com/Artye_' target="_blank" class="titulo">@Artye_</a> por MD en Twitter, enviando tu nick,
       nombre de invocador, link de Twitter, link de Twitch y link de Lolchess</div>
    </v-card-text>
 </v-card>
 </v-row>
</v-container>
<br/>
<v-container>
  <v-row  no-gutters>
    <v-col>
<div class="search-wrapper">
    <v-text-field
      v-model="search"
      variant="outlined"
      label="Buscar jugador por nick..."
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

        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows>
        <template #header>
             <h2 style="text-align:center" class="titulo">Top TFT España   </h2>
        </template>
            <Column field="topESP" header="Rango" sortable="true" style="text-align:center;width:20px" ></Column>
            <Column field="nick" header="Nick"></Column>
            <Column field="cuenta" header="Cuenta">
            <template #body="slotProps">
              <a :href="slotProps.data.cuenta">
                <h4 class="cuenta">{{slotProps.data.cuenta}}</h4>
              </a>
            </template>
            </Column>
            <Column field="tier" header="Liga" style="min-width:130px" >
            <template #body="slotProps">
                <img v-if="slotProps.data.tier == 'Challenger'" src="../assets/Challenger.png" width="20"/>
                <img v-if="slotProps.data.tier == 'GrandMaster'" src="../assets/GrandMaster.png" width="20"/>
                <img v-if="slotProps.data.tier == 'Master'" src="../assets/MasterTFT.png" width="20"/>
                <span class="image-text">{{slotProps.data.tier}}</span>
            </template></Column>
            <Column field="LPs" header="LPs"></Column>
            <Column field="twitter" header="Twitter">
            <template #body="slotProps">
              <a :href="slotProps.data.twitter" target="_blank">
                <v-img v-if="slotProps.data.twitter != 'No'" src="../assets/tw1.png" width="30"></v-img>
              </a>
            </template>
            </Column>        
            <Column field="twitch" header="Twitch">
            <template #body="slotProps">
              <a v-if="slotProps.data.twitch != 'No'" :href="slotProps.data.twitch" target="_blank">
                <v-img  v-if="slotProps.data.twitch != 'No'" src="../assets/twitch1.png" width="30"></v-img>
                <h5 class="verde" v-if="slotProps.data.online == 'Online'"> ONLINE </h5>
                <h5 class="rojo" v-if="slotProps.data.online != 'Online'"> OFFLINE </h5>
              </a>
              
            </template></Column>
            <Column field="link" header="Lolchess" style="text-align:center">
            <template #body="slotProps">
              <a :href="slotProps.data.link" target="_blank">
                <v-img src="../assets/lolchess.svg" width="30"></v-img>
              </a>
            </template></Column>
            <Column field="partidasJugadas" header="Partidas Jugadas" style="width:30px" sortable="true"></Column>
            <Column field="victorias" header="Victorias" style="width:30px" sortable="true"></Column>
            <Column field="winrate" header="Top4 Rate" style="width:30px" sortable="true">
            <template #body="slotProps">
              {{(slotProps.data.winrate).toFixed(2)}}
            </template></Column>
            <Column field="topEUW" header="Top EUW" style="width:30px"></Column>
        </DataTable>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      items: [],
    };
  },
  methods: {
    filterItems() {
      if (this.search) {
        this.items = this.items.filter((item) =>
          item.nick.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.fetchTableData();
      }
    },
    fetchTableData() {
      fetch("https://api.laespatula.net/listaTFT?")
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
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
  width: 300px; 
  margin-bottom: 20px; 
}
.refresh-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
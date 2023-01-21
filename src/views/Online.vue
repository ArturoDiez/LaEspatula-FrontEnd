
<template>
        <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows>
        <template #header>
             <h2 style="text-align:center" class="titulo">Jugadores Online</h2>
        </template>
            <Column field="topESP" header="Rango" sortable="true" style="text-align:center;width:30px" ></Column>
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
              <a :href="slotProps.data.twitter" target="_blank">
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
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/online").then(res => res.json())
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
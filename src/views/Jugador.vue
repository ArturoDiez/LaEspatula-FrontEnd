<template>
<AdsTemplate/>
<h1 style="text-align:center"> Datos de <a v-if="jugador != undefined"> {{jugador.nick}} </a> <a v-if="jugador == undefined"> jugador erróneo </a></h1>
<div v-if="jugador != undefined">
    <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows>
            <Column field="topESP" header="Rango" style="text-align:center;width:30px" >
            <template #body="slotProps">
              <div v-if="slotProps.data.dentroLista == 'No'">-</div>
              <div v-if="slotProps.data.dentroLista != 'No'">{{slotProps.data.topESP}}</div>
            </template>
            </Column>
            <Column field="nick" header="Nick"></Column>
            <Column field="cuenta" header="Cuenta">
            </Column>
            <Column field="tier" header="Liga" style="min-width:130px" >
            <template #body="slotProps">
                <img v-if="slotProps.data.tier == 'CHALLENGER'" src="../assets/Challenger.png" width="20"/>
                <img v-if="slotProps.data.tier == 'GRANDMASTER'" src="../assets/GrandMaster.png" width="20"/>
                <img v-if="slotProps.data.tier == 'MASTER'" src="../assets/MasterTFT.png" width="20"/>
                <span class="image-text">{{slotProps.data.tier}} {{slotProps.data.division}}</span>
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
            <Column field="partidasJugadas" header="Partidas Jugadas" style="width:30px"></Column>
            <Column field="victorias" header="Victorias" style="width:30px"></Column>
            <Column field="winrate" header="Top4 Rate" style="width:30px">
            <template #body="slotProps">
              <div v-if="slotProps.data.winrate != undefined">{{(slotProps.data.winrate).toFixed(2)}}</div>
            </template></Column>
            <Column field="topEUW" header="Top EUW" style="width:30px">
            <template #body="slotProps">
              <div v-if="slotProps.data.dentroLista == 'No'">-</div>
              <div v-if="slotProps.data.dentroLista != 'No'">{{slotProps.data.topEUW}}</div>
            </template></Column>
        </DataTable>
        <br/>
        <h2 style="text-align:center"> En las últimas 10 partidas su posición media ha sido {{posMed}}</h2>
        <br/>
       <v-container>
    <v-row>
<v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
    min-width = '30%'
  >
  <v-card-title >
      Parche
    </v-card-title>

    <v-card-text>
      <div class="verde" v-if="hot > 0"> 
        Racha actual: +{{hot}}
      </div>
      <div class="rojo" v-if="cold < 0"> 
        Racha actual: {{cold}}
      </div>
      <div class="verde" v-if="racha > 0"> 
        Variación de LPs en el parche: +{{racha}}
      </div>
      <div class="rojo" v-if="racha < 0"> 
        Variación de LPs en el parche: {{racha}}
      </div>
    </v-card-text>
 </v-card>
 <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
    min-width = '30%'
  >
  <v-card-title >
      Set
    </v-card-title>

    <v-card-text>
      <div> 
        Pico de LPs: {{pico}}
      </div>
      <div class="verde"> 
        Mejor racha: +{{hottest}}
      </div>
      <div class="rojo"> 
        Peor racha: {{coldest}}
      </div>
    </v-card-text>
 </v-card>
    </v-row>
</v-container>
<br/>
            <Chart type="line" :data="data" :options="basicOptions"/>
</div>
</template>

<script>
import { ref, onMounted} from "vue";
import { useRoute } from 'vue-router';

export default {
  setup() {
    const nick = useRoute().params.nick

    onMounted(() => {
        fetch("https://api.laespatula.net/buscarTFT/" + nick).then(res => res.json())
            .then(data => {items.value = data,
              league.value = data.league, jugador.value = data.jugador})

            fetch("https://api.laespatula.net/datosJugadores/" + nick).then(res => res.json())
            .then(data => {
              labels.value = data.labels, elo.value = data.elo,
                racha.value = data.rachaP; hot.value = data.hotStreak; 
                cold.value = data.coldStreak; pico.value = data.pico;
                hottest.value = data.hottestStreak; coldest.value = data.coldestStreak,
                posMed.value = data.posMed})
        })
        
    const items = ref();
    const labels = ref();
    const elo = ref();
    const league = ref();
    const jugador = ref();
    const racha = ref();
    const hot = ref();
    const cold = ref();
    const pico = ref();
    const hottest = ref();
    const coldest = ref();
    const posMed = ref();


    var data = ref({
      labels: labels,
      datasets:[
        {
          label: nick,
          data: elo,

        },
      ]
    });

    const basicOptions = ref(
            {
                plugins: {
                    legend: {
                        labels: {
                            color: 'yellow'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Historial de LPs',
                        color: 'white',
                    }
                },
                scales: {
                    x: {
                      type: 'time',
                      time: {
                        unit:'day',
                        unitStepSize: 1,
                        displayFormats: {
                          day: 'MMM DD'
                        }
                      },
                        ticks: {
                            color: 'yellow'                        
                            },
                    },
                    y: {
                        ticks: {
                            color: 'yellow'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        );

    return {jugador, racha, hot, hottest, cold, coldest, pico, posMed, data, basicOptions, items}
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
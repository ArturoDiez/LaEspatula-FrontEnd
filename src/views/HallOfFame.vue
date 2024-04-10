<template>
<v-container>
  <v-row>
 
 <v-card
    class="mx-auto"
    color="transparent"
    elevation="5"
  >
  <v-card-title >
      Hall Of Fame Español
    </v-card-title>

    <v-card-text>
      <div> Rendimiento de los españoles en Europa. Idea y trabajo de <a href='https://twitter.com/Lumarpin' target="_blank" class="titulo">@Lumarpin</a></div>
    </v-card-text>
 </v-card>
 </v-row>
</v-container>
<br/>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab value="Set 3-5">Pre-GSC (Set 3-5)</v-tab>
      <v-tab value="GSCs">GSCs (Set 6-10)</v-tab>
    </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="Set 3-5">
          <br>
          <DataTable :value="pregsc" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
          
            <Column field="Jugador" header="Jugador" style="text-align:center;width:30px" >
              <template #body="rowData">
                <span v-if="rowData.data.Jugador === 'TOTAL'" style="color: yellow; font-weight: bold">{{ rowData.data.Jugador }}</span>
                <span v-else>{{ rowData.data.Jugador }}</span>
              </template>
            </Column>
            <Column field="Europeos" header="Europeos"></Column>
            <Column field="TOP32" header="TOP32"></Column>
            <Column field="TOP16" header="TOP16"></Column>
            <Column field="MEJOR PUESTO" header="Mejor puesto"></Column>
            <Column field="SET 3" header="Puesto Set 3"></Column>
            <Column field="SET 4" header="Puesto Set 4"></Column>
            <Column field="SET 5" header="Puesto Set 5"></Column>
        </DataTable>
        </v-window-item>

        <v-window-item value="GSCs">
          <v-container>
            <v-row>
              <v-col>
            <DataTable :value="totalgsc" responsiveLayout="scroll"  class="custom_table_class"
          stripedRows>
          
            <Column field="jugador" header="Jugador" style="text-align:center;width:30px">
              <template #body="rowData">
                <span v-if="rowData.data.jugador === 'TOTAL'" style="color: yellow; font-weight: bold">{{ rowData.data.jugador }}</span>
                <span v-else>{{ rowData.data.jugador }}</span>
              </template></Column>
            <Column field="GSCs" header="GSCs"></Column>
            <Column field="top32" header="TOP32"></Column>
            <Column field="top16" header="TOP16"></Column>
            <Column field="mejorPuesto" header="Mejor Puesto"></Column>
            <Column field="finals" header="EMEA Finals"></Column>
        </DataTable>
              </v-col>
              <v-col>
                <v-select
          v-model="selectedSet"
          label="Set"
          :items="set"
          >
          </v-select>
          <DataTable :value="gsc" responsiveLayout="scroll"  class="custom_table_class"
        stripedRows>
            <Column field="jugador" header="Jugador" style="text-align:center;width:50px">
              <template #body="rowData">
                <span v-if="rowData.data.jugador === 'TOTAL'" style="color: yellow; font-weight: bold">{{ rowData.data.jugador }}</span>
                <span v-else>{{ rowData.data.jugador }}</span>
              </template>
            </Column>
            <Column field="GSCs" header="GSCs"></Column>
            <Column field="GSC1" header="GSC 1"></Column>
            <Column field="GSC2" header="GSC 2"></Column>
            <Column field="GSC3" header="GSC 3"></Column>
            <Column field="finals" header="Finals"></Column>
        </DataTable>
              </v-col>
            </v-row>
        </v-container>
        </v-window-item>
      </v-window>
</template>

<script>
import { ref, watch, onMounted} from "vue";

export default{
  setup() {
    const selectedSet = ref();
    const set =  ref(['Set6', 'Set7', 'Set8', 'Set9', 'Set10']);

    onMounted(() => {
          fetch("https://api.laespatula.net/hallOfFamePreGSC").then(res => res.json())
            .then(data => pregsc.value = data.datos)

            fetch("https://api.laespatula.net/hallOfFameTotalGSC").then(res => res.json())
            .then(data => totalgsc.value = data)
        })
        

        watch(selectedSet, (newValue) => fetch("https://api.laespatula.net/hallOfFameGSC/" + newValue )
            .then(res => res.json())
            .then(data => gsc.value = data))
            

        const pregsc = ref();
        const totalgsc = ref();
        const gsc = ref();


        return {selectedSet, set, pregsc, totalgsc, gsc}
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
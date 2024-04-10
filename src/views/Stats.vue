<template>
<br/>
<div class="chart-container">
    <Chart type="line" :data="chartData" :options="basicOptions"/>
  </div>
        <h2 style="text-align:center">{{top1Jug}} es el top 1 de españa desde: {{formatDate(top1Date)}}</h2>
        <br/>
        <v-container>
            <v-row class="separacion">
                <div class="mx-auto">
                <DataTable :value="hottest" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center" class="verde">Mejores rachas activas</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="streak" header="Racha" class="verde">
                    <template #body="slotProps">
                        +{{slotProps.data.streak}}
                    </template>
                    </Column>
                </DataTable>
                 <v-btn block variant="plain" color="white" to="/hottestStreak">Lista completa</v-btn>
                </div>
                <div class="mx-auto">
                <DataTable :value="coldest" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center" class="rojo">Peores rachas activas</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="streak" header="Racha" class="rojo"></Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/coldestStreak">Lista completa</v-btn>
                </div>
            </v-row>
            <v-row class="separacion">
                <div class="mx-auto">
                <DataTable :value="rachaMas" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center" class="verde">Más LPs ganados en el parche</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="LPsParche" header="Racha" class="verde">
                    <template #body="slotProps">
                        +{{slotProps.data.LPsParche}}
                    </template>
                    </Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/rachaMas">Lista completa</v-btn>
                </div>
                <div class="mx-auto">
                <DataTable :value="rachaMenos" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center" class="rojo">Más LPs perdidos en el parche</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="LPsParche" header="Racha" class="rojo"></Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/rachaMenos">Lista completa</v-btn>
                </div>
            </v-row>
            <v-row class="separacion">
                <div class="mx-auto">
                <DataTable :value="masWR" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Mejores winrates del set</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="winrate" header="Winrate">
                    <template #body="slotProps">
                        {{(slotProps.data.winrate).toFixed(2)}}
                    </template>
                    </Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/masWR">Lista completa</v-btn>
                </div>
                <div class="mx-auto">
                <DataTable :value="pico" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Mayores picos de LPs del set</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="picoLPs" header="Pico LPs"></Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/picoLPs">Lista completa</v-btn>
                </div>
            </v-row>
            <v-row class="separacion">
                <div class="mx-auto">
                <DataTable :value="masVict" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Más victorias en el set</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="victorias" header="Victorias"></Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/masVictorias">Lista completa</v-btn>
                </div>
                <div class="mx-auto">
                <DataTable :value="masVicio" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Los más viciados del set</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="partidasJugadas" header="Partidas Jugadas"></Column>
                </DataTable>
                <v-btn block variant="plain" color="white" to="/masVicio">Lista completa</v-btn>
                </div>
            </v-row>
        </v-container>
</template>

<script>
import { ref, onMounted } from "vue";

import moment from 'moment';

export default {
  setup() {

        onMounted(() => {
            fetch("https://api.laespatula.net/datosTFT/9").then(res => res.json())
        .then(data => {
        top1Jug.value = data.top1.cuenta; top1Date.value = data.top1.start_date
          ,plotdata.value = data.plot;

          // Obtener todas las fechas y horas de los datos para establecer el eje x
          const allDates = [];
          plotdata.value.forEach(entry => {
            entry.labels.forEach(label => {
              const datetime = moment(label, 'YYYY-MM-DD HH:mm');
              allDates.push(datetime.format('YYYY-MM-DD HH:mm')); // Mantenemos el mismo formato para las etiquetas
            });
          });

          // Eliminar duplicados y ordenar las fechas y horas
          const uniqueDates = Array.from(allDates).sort();


          // Establecer las etiquetas del eje x
          chartData.value.labels = uniqueDates;

          // Asignar los datos a las posiciones correctas en base a las fechas y horas
          plotdata.value.forEach(entry => {
            const dataset = {
              label: entry.cuenta,
              data: [],
              fill: false,
              borderColor: getNextColor(),
              spanGaps: true
            };

            uniqueDates.forEach(date => {
              const dataIndex = entry.labels.findIndex(label => moment(label, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') === date);
              if (dataIndex !== -1) {
                dataset.data.push(entry.data[dataIndex]); // Usamos el índice para obtener el valor correspondiente
              } else {
                dataset.data.push(null); // Si no hay datos para esta fecha, insertamos null
              }
            });

            chartData.value.datasets.push(dataset);
            console.log(dataset)
          });
        })

            fetch("https://api.laespatula.net/hottestStreakList/5").then(res => res.json())
            .then(data => hottest.value = data)

            fetch("https://api.laespatula.net/coldestStreakList/5").then(res => res.json())
            .then(data => coldest.value = data)

            fetch("https://api.laespatula.net/rachaMasList/5").then(res => res.json())
            .then(data => rachaMas.value = data)

            fetch("https://api.laespatula.net/rachaMenosList/5").then(res => res.json())
            .then(data => rachaMenos.value = data)

            fetch("https://api.laespatula.net/masVictList/5").then(res => res.json())
            .then(data => masVict.value = data)

            fetch("https://api.laespatula.net/masWRList/5").then(res => res.json())
            .then(data => masWR.value = data)

            fetch("https://api.laespatula.net/masVicioList/5").then(res => res.json())
            .then(data => masVicio.value = data)

            fetch("https://api.laespatula.net/picosLPsList/5").then(res => res.json())
            .then(data => pico.value = data)
        })

    const plotdata = ref();
    const rachaMas = ref();
    const rachaMenos = ref();
    const hottest = ref();
    const coldest = ref();
    const masWR = ref();
    const masVict = ref();
    const masVicio = ref();
    const pico = ref();
    const top1Jug = ref();
    const top1Date = ref();

    const chartData = ref({
      labels: [],
      datasets: []
    });
    const today = moment();
    const sevenDaysAgo = moment().subtract(7, 'days');

    for (let day = sevenDaysAgo; day.isSameOrBefore(today); day.add(1, 'day')) {
      chartData.value.labels.push(day.format('MMMM Do YYYY'));
    }


    const basicOptions = ref(
            {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'yellow'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Top 10 España',
                        color: 'white',
                    },
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
                            color: 'yellow',
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                },
                
            }
        );
    
        console.log(chartData)

        const predefinedColors = [
  '#FF5733', '#33FF57', '#5733FF', '#ecbee0', '#38761D',
  '#FFD133', '#33FFD1', '#D133FF', '#D1FF33', '#FF3333'
];

        let colorIndex = 0;

        function getNextColor() {
        const color = predefinedColors[colorIndex];
        colorIndex = (colorIndex + 1) % predefinedColors.length;
        return color;
        }

    return {rachaMas, rachaMenos, hottest, coldest, masWR, masVict, masVicio, pico, top1Jug, top1Date, chartData, basicOptions}
    },

    methods:{
      formatDate(value) {
        if (value == null) {
          return "-"
        }
      return moment(value).format('MMMM Do YYYY, h:mm a')
      },


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

.separacion{
    padding-bottom: 50px;
}

.chart-container {
  justify-content: center;
  width: 90%;
  margin: auto;
}
</style>
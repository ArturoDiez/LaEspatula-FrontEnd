<template>
<h1 style="text-align:center"> Rivales de {{ nick }}</h1>
<h2 style="text-align:center"> {{ msj }}</h2>
<br/>
<DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm" 
        :lazy="true" stripedRows>
            <Column style="text-align:center" field="placement" header="Resultado"></Column>
            <Column width="40%" field="fecha" header="Día y hora">
            <template #body="slotProps">
                    {{formatDate(slotProps.data.fecha)}}
            </template>
            </Column>
            <Column field="rivales" header="Rivales">
              <template #body="slotProps" >
                <table v-for="i in range(1,7)" id="customers" :key="i">
                  <tr>
                    <td width="30%">{{slotProps.data['rival'+i]}}</td>
                    <td>{{ slotProps.data['placement'+i] }}</td>
                    <td width="40%"><img v-if="slotProps.data['league'+i] == 'CHALLENGER'" src="../assets/Challenger.png" width="20"/>
                    <img v-if="slotProps.data['league'+i] == 'GRANDMASTER'" src="../assets/GrandMaster.png" width="20"/>
                    <img v-if="slotProps.data['league'+i] == 'MASTER'" src="../assets/MasterTFT.png" width="20"/>
                    <span class="image-text">{{ slotProps.data['league'+i] }}</span></td>
                    <td>{{ slotProps.data['elo'+i] }} LPs</td>
                  </tr>
                </table>
            </template>
            </Column>
            <Column field="mediaLPs" header="Media de LPs">
            <template #body="slotProps">
              <span v-if="slotProps.data.eloMedio != undefined">{{(slotProps.data.eloMedio).toFixed(0)}} LPs </span>
            </template></Column>
        </DataTable>
</template>


<script>
import { ref, onMounted} from "vue";
import { useRoute } from 'vue-router';
import moment from 'moment';

export default 
    {
  setup() {
    const nick = useRoute().params.nick

    onMounted(() => {
            fetch("https://api.laespatula.net/rivales/" + nick).then(res => res.json())
            .then(data => items.value = data.datos);
        })

    onMounted(() => {
            fetch("https://api.laespatula.net/rivales/" + nick).then(res => res.json())
            .then(data => msj.value = data.mensaje);
        })

        const items = ref();
        const msj = ref();
        


    return {nick, items, msj}
      },

      methods:{
      formatDate(value) {
        if (value == undefined){
            return ''
        }
        return moment(value).format('MMMM Do YYYY, h:mm a')
      },

    range(start, end) {
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    },
    }
   }
</script>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

#customers td, #customers th {
  padding: 6px;
}

#customers tr:nth-child(even){background-color: black;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

.custom-table-class tbody tr {
  margin-bottom: 10px;
}
</style>
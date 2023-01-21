<template>
<h1 style="text-align:center"> Rivales de {{ nick }}</h1>
<h2 style="text-align:center"> {{ msj }}</h2>
<br/>
<div  v-for="item in items" :key="item">
<DataTable :value="item" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm" 
        :lazy="true" stripedRows>
            <Column style="text-align:center" field="placement" header="Resultado"></Column>
            <Column width="40%" field="datetime" header="Día y hora">
            <template #body="slotProps">
                    {{formatDate(slotProps.data.datetime)}}
            </template>
            </Column>
            <Column field="rivales" header="Rivales">
            <template #body="slotProps">
                <table id="customers">
                <tr v-for="rival in slotProps.data.rivales" :key="rival">
                    <td width="30%">{{rival.cuenta}}</td>
                    <td>{{rival.placementRival}}</td>
                    <td width="40%"><img v-if="rival.liga == 'CHALLENGER'" src="../assets/Challenger.png" width="20"/>
                    <img v-if="rival.liga == 'GRANDMASTER'" src="../assets/GrandMaster.png" width="20"/>
                    <img v-if="rival.liga == 'MASTER'" src="../assets/MasterTFT.png" width="20"/>
                    <span class="image-text">{{rival.liga}}</span></td>
                    <td>{{rival.LPs}} LPs</td>
                </tr> 
                </table>
            </template>
            </Column>
            <Column field="mediaLPs" header="Media de LPs">
            <template #body="slotProps">
              <span v-if="slotProps.data.mediaLPs != undefined">{{(slotProps.data.mediaLPs).toFixed(0)}} LPs </span>
            </template></Column>
        </DataTable>
        <br/>
</div>
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
            fetch("http://127.0.0.1:7000/rivales/" + nick).then(res => res.json())
            .then(data => items.value = data.datos);
        })

    onMounted(() => {
            fetch("http://127.0.0.1:7000/rivales/" + nick).then(res => res.json())
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
</style>
<!-- eslint-disable vue/no-unused-vars -->
<template>
<br/>

  <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows>
        <template #header>
             <h2 style="text-align:center;text--yellow">Top LOR España</h2>
        </template>
            <Column field="top" header="Rango" style="text-align:center;width:30px" >
            <template #body="slotProps">
              {{items.indexOf(slotProps.data)+1}}
            </template>
            </Column>
            <Column field="nick" header="Nick"></Column>
            <Column field="cuenta" header="Cuenta">
            <template #body="slotProps">
              <a :href="slotProps.data.link" target="_blank">
                <h4 class="cuenta">{{slotProps.data.cuenta}}</h4>
              </a>
            </template>
            </Column>
            <Column field="gre" header="Liga">
            <template #body="slotProps">
                <img src="../assets/master.png" width="20"/>
                <span> Master </span>
            </template>
            </Column>
            <Column field="rank" header="LPs"></Column>
            <Column field="twitter" header="Twitter">
            <template #body="slotProps">
              <a :href="slotProps.data.twitter" target="_blank">
                <v-img v-if="slotProps.data.twitter != 'No'" src="../assets/tw1.png" width="30"></v-img>
              </a>
            </template>
            </Column>        
            <Column field="twitch" header="Twitch">
            <template #body="slotProps">
              <a :href="slotProps.data.twitch" target="_blank">
                <v-img  v-if="slotProps.data.twitch != 'No'" src="../assets/twitch1.png" width="30"></v-img>
              </a>
              
            </template></Column>
        </DataTable>
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import { ref, onMounted} from "vue";

export default{
  setup() {
        onMounted(() => {
            fetch("http://127.0.0.1:7000/listaLOR?").then(res => res.json())
            .then(data => items.value = data);
        })

        const items = ref();
        const filters1 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});

        return { items, filters1}
    }
}

</script>

<style>
.rojo{
    color: red;
  }

.verde{
    color: #64DD17;
  }

.cuenta{
    color: white;
  }
</style>
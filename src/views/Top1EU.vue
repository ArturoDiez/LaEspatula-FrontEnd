<template>
<v-select
  v-model="selectedSet"
  label="Set"
  :items="sets"
>
</v-select>
<DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
        stripedRows>
        <template #header>
             <h2 style="text-align:center" class="titulo">Top1 TFT Europa</h2>
        </template>
            <Column field="cuenta" header="Cuenta" sortable="true">
            <template #body="slotProps">
              <a :href="slotProps.data.cuenta" target="_blank">
                <h4 class="cuenta">{{slotProps.data.cuenta}}</h4>
              </a>
            </template>
            </Column>
            <Column field="start_date" header="Fecha de Inicio" sortable="true">
            <template #body="slotProps">
                        {{formatDate(slotProps.data.start_date)}}
            </template></Column>
            <Column field="end_date" header="Fecha final">
            <template #body="slotProps">
                        {{formatDate(slotProps.data.end_date)}}
            </template></Column>
            <Column field="time_diff" header="Tiempo total"></Column>
        </DataTable>
</template>

<script>
import { ref, watch} from "vue";

import moment from 'moment';

export default{
  
  setup() {
    const selectedSet = ref()
    const sets =  ref(['8'])

        watch(selectedSet, (newValue) => fetch("https://api.laespatula.net/top1EU/" + newValue ).then(res => res.json())
            .then(data => items.value = data))

        const items = ref();


        return { items, sets, selectedSet,}
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
</style>
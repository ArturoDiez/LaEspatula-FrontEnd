<template>
     <DataTable :value="wr" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Mejor winrate del set</h2>
                    </template>
                    <Column field="position" header="Posición" style="text-align:center;width:30px" >
                        <template #body="slotProps">
                            {{wr.indexOf(slotProps.data)+1}}
                        </template>
                    </Column>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="winrate" header="Winrate" sortable="true">
                    <template #body="slotProps">
                        {{(slotProps.data.winrate).toFixed(2)}}
                    </template>
                    </Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/masWRList/all").then(res => res.json())
            .then(data => wr.value = data)
        })

    const wr = ref();

    return {wr}
    },
}
</script>
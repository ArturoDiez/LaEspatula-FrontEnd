<template>
     <DataTable :value="vict" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Más victorias en el set</h2>
                    </template>
                    <Column field="position" header="Posición" style="text-align:center;width:30px" >
                        <template #body="slotProps">
                            {{vict.indexOf(slotProps.data)+1}}
                        </template>
                    </Column>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="victorias" header="Victorias" sortable="true"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/masVictList/all").then(res => res.json())
            .then(data => vict.value = data)
        })

    const vict = ref();

    return {vict}
    },
}
</script>
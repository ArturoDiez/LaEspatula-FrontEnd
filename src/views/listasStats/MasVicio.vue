<template>
     <DataTable :value="vicio" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Más viciados del set</h2>
                    </template>
                    <Column field="position" header="Posición" style="text-align:center;width:30px" >
                        <template #body="slotProps">
                            {{vicio.indexOf(slotProps.data)+1}}
                        </template>
                    </Column>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="partidasJugadas" header="Partidas Jugadas" sortable="true"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/masVicioList/all").then(res => res.json())
            .then(data => vicio.value = data)
        })

    const vicio = ref();

    return {vicio}
    },
}
</script>
<template>
     <DataTable :value="racha" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Más LPs perdidos en el parche</h2>
                    </template>
                    <Column field="position" header="Posición" style="text-align:center;width:30px" >
                        <template #body="slotProps">
                            {{racha.indexOf(slotProps.data)+1}}
                        </template>
                    </Column>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="LPsParche" header="Racha"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/rachaMenosList/all").then(res => res.json())
            .then(data => racha.value = data)
        })

    const racha = ref();

    return {racha}
    },
}
</script>
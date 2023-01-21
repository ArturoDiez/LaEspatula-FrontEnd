<template>
     <DataTable :value="racha" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Más LPs perdidos en el parche</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="LPsParche" header="Racha"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("http://127.0.0.1:7000/rachaMenosList/all").then(res => res.json())
            .then(data => racha.value = data)
        })

    const racha = ref();

    return {racha}
    },
}
</script>
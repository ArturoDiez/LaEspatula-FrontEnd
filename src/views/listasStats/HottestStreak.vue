<template>
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
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/hottestStreakList/all").then(res => res.json())
            .then(data => hottest.value = data)
        })

    const hottest = ref();

    return {hottest}
    },
}
</script>
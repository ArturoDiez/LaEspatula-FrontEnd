<template>
     <DataTable :value="coldest" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Peores rachas activas</h2>
                    </template>
                    <Column field="cuenta" header="Cuenta"></Column>
                    <Column field="streak" header="Racha"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
        onMounted(() => {
            fetch("https://api.laespatula.net/coldestStreakList/all").then(res => res.json())
            .then(data => coldest.value = data)
        })

    const coldest = ref();

    return {coldest}
    },
}
</script>
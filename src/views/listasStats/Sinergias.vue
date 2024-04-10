<template>
    <div class="search-wrapper">
    <v-text-field
      v-model="search"
      variant="outlined"
      label="Buscar sinergia..."
      single-line
      hide-details
      clearable
    ></v-text-field>
</div>
    <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                   stripedRows>
                   <template #header>
                       <h2 style="text-align:center">Estadísticas de las sinergias</h2>
                   </template>
                   <Column field="sinergia" header="Sinergia" sortable="true"></Column>
                   <Column field="level" header="Nivel"></Column>
                   <Column field="averagePlacement" header="Posición media" :body-template="formatAveragePlacement" sortable="true"></Column>
                   <Column field="totalGames" header="Número de partidas" sortable="true"></Column>
       </DataTable>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  setup() {
    const search = ref("");
    const items = ref([]);

    const filterItems = () => {
      if (search.value) {
        items.value = items.value.filter((item) =>
          item.sinergia.toLowerCase().includes(search.value.toLowerCase())
        );
      } else {
        fetchTableData();
      }
    };

    const fetchTableData = () => {
      fetch("https://api.laespatula.net/sinergiaStats")
        .then((response) => response.json())
        .then((data) => {
          items.value = data;
        })
        .catch((error) => {
          console.error("Error fetching table data:", error);
        });
    };

    const refreshList = () => {
      fetchTableData();
    };

    onMounted(() => {
      fetchTableData();
    });

    watch(search, filterItems);

    return { search, items, filterItems, fetchTableData, refreshList };
  },
};
</script>
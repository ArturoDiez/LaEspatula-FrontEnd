<template>
    <div class="search-wrapper">
    <v-text-field
      v-model="search"
      variant="outlined"
      label="Buscar unidad..."
      single-line
      hide-details
      clearable
    ></v-text-field>
</div>
     <DataTable :value="items" responsiveLayout="scroll"  class="custom_table_class p-datatable-sm"
                    stripedRows>
                    <template #header>
                        <h2 style="text-align:center">Estadísticas de las unidades</h2>
                    </template>
                    <Column field="unit" header="Unidad"  sortable="true"></Column>
                    <Column field="averagePlacement" header="Posición media" :body-template="formatAveragePlacement" sortable="true"></Column>
                    <Column field="placement1" header="1 estrella" sortable="true"></Column>
                    <Column field="placement2" header="2 estrellas" sortable="true"></Column>
                    <Column field="placement3" header="3 estrellas" sortable="true"></Column>
                    <Column field="totalGames" header="Número de partidas" sortable="true"></Column>
        </DataTable>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  setup() {
    const search = ref("");
    const items = ref([]);

    const formatAveragePlacement = (row) => {
      return parseFloat(row.averagePlacement).toFixed(2);
    };

    const filterItems = () => {
      if (search.value) {
        items.value = items.value.filter((item) =>
          item.unit.toLowerCase().includes(search.value.toLowerCase())
        );
      } else {
        fetchTableData();
      }
    };

    const fetchTableData = () => {
      fetch("https://api.laespatula.net/unitStats")
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

    return { search, items, filterItems, fetchTableData, refreshList, formatAveragePlacement };
  },
};
</script>
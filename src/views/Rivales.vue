<template>
<AdsTemplate/>
<h1 style="text-align:center"> Encuentra a quién se ha enfrentado tu jugador favorito </h1>
<br/>
<br/>
<br/>
<br/>
<v-container>
<v-row align="center">
<v-text-field
        v-model="search"
        label="Buscar jugador..."
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        clearable
        class="text-white"
        @keyup.enter="trigger"
      ></v-text-field>
      <router-link :to="'/rivales/' + search">
        <v-btn variant="plain"  color="white">
         Buscar
        </v-btn>
      </router-link>
</v-row>
</v-container>
</template>

<script>
export default 
    {
   data: () => (
      {
       search : '',
      }),
      methods:{
        trigger () {
          this.$router.push("/rivales/"+ this.search)
        }
      },
   }
</script>

<style scoped>
</style>
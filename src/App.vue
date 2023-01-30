<template>
  <v-app>
  <v-app-bar :elevation="7" rounded color="#2b39cd">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <router-link to='/'>
  <v-img
  src='./assets/LaEspatula.png'
  width='210'
  />
    </router-link>
    <v-spacer></v-spacer>
  <v-responsive
    class="mx-auto"
    max-width="250"
  >
  <v-text-field
        v-model="search"
        variant="outlined"
        label="Buscar jugador..."
        single-line
        hide-details
        clearable
        class="text-white"
        @keyup.enter="trigger"
      ></v-text-field>
 </v-responsive>
 <v-btn  x-large variant="plain" color="white" @click="trigger">
      <v-icon large>mdi-magnify</v-icon>
      </v-btn>
  </v-app-bar>

  <v-navigation-drawer
        v-model="drawer"
        temporary
        class="bg-indigo-lighten-1"
      >
      <v-list class="bg-indigo-lighten-1">
              <v-list-item  v-for="item in home" :key="item.title" router-link  :to="item.route">
                <v-list-item-title class="text-yellow"><v-icon :icon="item.icon"></v-icon> {{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
          <v-list class="bg-indigo-lighten-1">
            <v-list-subheader class="text-white font-weight-bold"> TFT ESPAÑA </v-list-subheader>
              <v-list-item  v-for="item in itemsTFTESP" :key="item.title" router-link  :to="item.route">
                <v-list-item-title class="text-yellow"><v-icon :icon="item.icon"></v-icon> {{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
        <v-divider></v-divider>
          <v-list class="bg-indigo-lighten-1">
            <v-list-subheader class="text-white font-weight-bold"> TFT EUROPA </v-list-subheader>
              <v-list-item  v-for="item in itemsTFTEU" :key="item.title" router-link  :to="item.route">
                <v-list-item-title class="text-yellow"><v-icon :icon="item.icon"></v-icon> {{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
        <v-divider></v-divider>
        <v-list class="bg-indigo-lighten-1">
            <v-list-subheader class="text-white font-weight-bold"> SETS ANTERIORES </v-list-subheader>
              <v-list-item  v-for="item in setAnteriores" :key="item.title" router-link  :to="item.route">
                <v-list-item-title class="text-yellow"><v-icon :icon="item.icon"></v-icon> {{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>

  
  <v-main class="body-prime">
    <v-container class="containerAdapter"><router-view></router-view></v-container>
  </v-main>
  

    <div class="background">
      <br/>
      <a href="/termino" class="background">Términos de servicio</a> - 
      <a href="/privacidad" class="background">Política de privacidad</a> - 
      <a href="/cookies" class="background">Política de cookies</a>
      <br/>
      <br/>
      © 2023 - Todos los derechos reservados.
      <br/>
      <br/>
        <h5>LaEspatula.net no cuenta con el respaldo de Riot Games y no reflejan los puntos de vista ni las opiniones de Riot Games ni de ninguna persona involucrada oficialmente en la producción
        o administración de las propiedades de Riot Games. Riot Games y todas las propiedades asociadas son marcas comerciales o marcas comerciales registradas de Riot Games, Inc.</h5>
      <br/><br/>
    </div>
</v-app>

</template>

<script>
  export default 
    {
      data: () => (
      {
       drawer: false,
       group: null,
       search : '',
       home:
        [
          { title: 'Home', icon: 'mdi-home', route:'/'},
        ],
       itemsTFTESP:
        [
          { title: 'Top100', icon: 'mdi-format-list-numbered',route:'/listaTFT'},
          { title: 'Competitivo', icon: 'mdi-format-list-checks',route:'/competitivoESP' },
          { title: 'Stats', icon: 'mdi-chart-line',route:'/stats' },
          { title: 'Top1', icon: 'mdi-medal',route:'/top1' },
          { title: 'Rivales', icon: 'mdi-axe',route:'/rivales' },
          { title: 'Jugadores Online', icon: 'mdi-twitch',route:'/online' },
        ],

        itemsTFTEU:
        [
          { title: 'Ligas', icon: 'mdi-format-list-numbered',route:'/listaTFTEU'},
          { title: 'Competitivo', icon: 'mdi-format-list-checks',route:'/competitivoEU' },
          { title: 'Top1', icon: 'mdi-medal',route:'/top1EU' },
        ],

        setAnteriores:
        [
          { title: 'Competitivo Español', icon: 'mdi-format-list-checks',route:'/competitivoESPAntiguo' },
          { title: 'Competitivo Europeo', icon: 'mdi-format-list-checks',route:'/competitivoEUAntiguo' },
        ],
      }),
      watch: 
      {
        group () 
        {
          this.drawer = false
        },
      },
      methods:{
        trigger () {
          this.$router.push("/"+ this.search)
        }
      },
    }
  </script>

  <style scoped>
  @media (min-device-width: 900px) {
  .containerAdapter{
    width:90vw;
  }
}

@media (max-device-width: 900px) {
  .containerAdapter{
    width:100vw;
  }
}

.body-prime {
      margin: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: var(--surface-a);
      font-family: var(--font-family);
      font-weight: 400;
      color: var(--text-color);
   }

.background{
    background-color: #2b39cd;
    text-align: center;
    color: yellow;
  }
  </style>
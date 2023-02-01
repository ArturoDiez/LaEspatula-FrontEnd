<template>
<AdsTemplate/>
<v-img
    class= "rounded-lg"
    src="../assets/banner-espatula-web.png"
    /> 
<br/>
<v-container>
  <v-row justify="space-around">
    <v-btn elevation="5" color="transparent" href="https://twitter.com/Artye_" target="_blank">
    <v-icon color="yellow">mdi-twitter </v-icon>
    </v-btn>
    <v-btn elevation="5" color="transparent" href="https://www.twitch.tv/artyetft" target="_blank">
    <v-icon color="yellow">mdi-twitch </v-icon>
    </v-btn>
  </v-row>
</v-container> 
<br/>
<v-container>
    <h2 class="text-yellow text-center">TFT España</h2>
    <br/>
<v-row  no-gutters>
<v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/penguGM.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title >
      Top TFT España
    </v-card-title>

    <v-card-subtitle>
      <div>¿Quiénes son los mejores</div>
       <div>jugadores del país?</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="/listaTFT"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>

 <v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/penguEspaña.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Competitivo
    </v-card-title>

    <v-card-subtitle>
      <div>Informáte sobre el TFT</div>
        <div>de mayor nivel nacional</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="/competitivoESP"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>

 <v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/online.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Online
    </v-card-title>

    <v-card-subtitle>
      <div>Encuentra quién está en</div>
       <div>directo y aprende sobre TFT</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="/online"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>

 <v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/spatula.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Top 1 España
    </v-card-title>

    <v-card-subtitle>
      <div>Encuentra quién es</div>
       <div>y ha sido el Top1 de España</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="/top1"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>
 </v-row>
</v-container>

<v-container>
    <h2 class="text-yellow text-center">TFT Europa</h2>
    <br/>
<v-row  no-gutters>
<v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/penguChallenger.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Ligas top TFT
    </v-card-title>

    <v-card-subtitle>
      <div>Mira la clasificación de</div>
       <div>las mejores ligas de EUW</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="listaTFTEU"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>

 <v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/deisik.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Competitivo
    </v-card-title>

    <v-card-subtitle>
      <div>Informáte sobre el TFT</div>
        <div>a nivel europeo</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="competitivoEU"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>

 <v-card
    class="mx-auto"
    width="210"
    color="transparent"
    elevation="5"
  >
    <v-img
      src="../assets/cards/spatula.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Top 1 EUW
    </v-card-title>

    <v-card-subtitle>
      <div>Encuentra quién es</div>
       <div>y ha sido el Top1 de EUW</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="yellow"
        variant="text"
        to="top1EU"
      >
        Explora
      </v-btn>
    </v-card-actions>
 </v-card>
 </v-row>
</v-container>
</template>

<script>

</script>
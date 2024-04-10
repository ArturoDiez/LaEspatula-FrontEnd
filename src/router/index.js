// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    history: createWebHistory(),
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'listaTFT',
        name: 'ListaTFT',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListaTFT.vue'),
      },
      {
        path: ':nick',
        name: 'Jugador',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Jugador.vue'),
      },
      {
        path: 'competitivoESP',
        name: 'CompetitivoESP',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoESP.vue'),
      },
      {
        path: 'stats',
        name: 'Stats',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Stats.vue'),
      },
      {
        path: 'augmentStats',
        name: 'AugmentStats',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/Augments.vue'),
      },
      {
        path: 'objectStats',
        name: 'ObjectStats',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/Objects.vue'),
      },
      {
        path: 'sinergiaStats',
        name: 'SinergiaStats',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/Sinergias.vue'),
      },
      {
        path: 'unitStats',
        name: 'UnitStats',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/Units.vue'),
      },
      {
        path: 'hottestStreak',
        name: 'HottestStreak',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/HottestStreak.vue'),
      },
      {
        path: 'coldestStreak',
        name: 'ColdestStreak',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/ColdestStreak.vue'),
      },
      {
        path: 'masVicio',
        name: 'MasVicio',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/MasVicio.vue'),
      },
      {
        path: 'masVictorias',
        name: 'MasVictorias',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/MasVictorias.vue'),
      },
      {
        path: 'masWR',
        name: 'MasWR',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/MasWR.vue'),
      },
      {
        path: 'picoLPs',
        name: 'PicoLPs',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/PicoLPs.vue'),
      },
      {
        path: 'rachaMas',
        name: 'RachaMas',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/RachaMas.vue'),
      },
      {
        path: 'rachaMenos',
        name: 'RachaMenos',
        component: () => import(/* webpackChunkName: "home" */ '@/views/listasStats/RachaMenos.vue'),
      },
      {
        path: 'top1',
        name: 'Top1',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Top1.vue'),
      },
      {
        path: 'rivales',
        name: 'Rivales',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Rivales.vue'),
      },
      {
        path: 'rivales/:nick',
        name: 'RivalesJugador',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RivalesJugador.vue'),
      },
      {
        path: 'online',
        name: 'Online',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Online.vue'),
      },
      {
        path: 'halloffame',
        name: 'Hof',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HallOfFame.vue'),
      },
      {
        path: 'listaTFTEU',
        name: 'ListaTFTEU',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListaTFTEU.vue'),
      },
      {
        path: 'competitivoEU',
        name: 'CompetitivoEU',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEU.vue'),
      },
      {
        path: 'top1EU',
        name: 'Top1EU',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Top1EU.vue'),
      },
      {
        path: 'competitivoESPAntiguo',
        name: 'CompetitivoESPAntiguo',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoESPAntiguo.vue'),
      },
      {
        path: 'competitivoESPAntiguo/Set10',
        name: 'CompetitivoESPAntiguo/Set10',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoESPAntiguo/Set10.vue'),
      },
      {
        path: 'competitivoESPAntiguo/Set9',
        name: 'CompetitivoESPAntiguo/Set9',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoESPAntiguo/Set9.vue'),
      },
      {
        path: 'competitivoESPAntiguo/Set8',
        name: 'CompetitivoESPAntiguo/Set8',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoESPAntiguo/Set8.vue'),
      },
      {
        path: 'competitivoESPAntiguo/Set7',
        name: 'CompetitivoESPAntiguo/Set7',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoESPAntiguo/Set7.vue'),
      },
      {
        path: 'competitivoEUAntiguo',
        name: 'CompetitivoEUAntiguo',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEUAntiguo.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set10',
        name: 'CompetitivoEUAntiguo/Set10',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set10.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set9',
        name: 'CompetitivoEUAntiguo/Set9',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set9.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set8',
        name: 'CompetitivoEUAntiguo/Set8',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set8.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set7',
        name: 'CompetitivoEUAntiguo/Set7',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set7.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set5',
        name: 'CompetitivoEUAntiguo/Set5',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set5.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set4',
        name: 'CompetitivoEUAntiguo/Set4',
        component: () => import(/* webpackChunkName: "home" */ '@/views/competitivoEUAntiguo/Set4.vue'),
      },
      {
        path: 'termino',
        name: 'Termino',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Termino.vue'),
      },
      {
        path: 'privacidad',
        name: 'Privacidad',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Privacidad.vue'),
      },
      {
        path: 'cookies',
        name: 'Cookies',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Cookies.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

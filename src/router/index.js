// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
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
        path: 'competitivoESPAntiguo/Set7',
        name: 'CompetitivoESPAntiguo/Set7',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoESPAntiguo/Set7.vue'),
      },
      {
        path: 'competitivoEUAntiguo',
        name: 'CompetitivoEUAntiguo',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEUAntiguo.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set7',
        name: 'CompetitivoEUAntiguo/Set7',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEUAntiguo/Set7.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set5',
        name: 'CompetitivoEUAntiguo/Set5',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEUAntiguo/Set5.vue'),
      },
      {
        path: 'competitivoEUAntiguo/Set4',
        name: 'CompetitivoEUAntiguo/Set4',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CompetitivoEUAntiguo/Set4.vue'),
      },
      {
        path: 'listaLOR',
        name: 'ListaLOR',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListaLOR.vue'),
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

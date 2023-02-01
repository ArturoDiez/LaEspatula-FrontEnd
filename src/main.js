/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import Primevue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'               //core css
import 'primeicons/primeicons.css'                         //icons
import 'primevue/resources/themes/vela-orange/theme.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';  
import InputText from 'primevue/inputtext';
import Chart from 'primevue/chart';

import 'chartjs-adapter-moment';
import ScriptX from 'vue-scriptx';
import Ads from 'vue-google-adsense';

import AdsTemplate from './component/Ads.vue'

const app = createApp(App)

registerPlugins(app)

app.use(ScriptX)
app.use(Ads.Adsense)

app.use(Primevue)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Row', Row)
app.component('ColumnGroup', ColumnGroup)
app.component('InputText', InputText)
app.component('Chart', Chart)
app.component('AdsTemplate', AdsTemplate)

app.mount('#app')
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ins')
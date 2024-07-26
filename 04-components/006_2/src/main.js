import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import './theme.css'


// App -> AppNews -> AppNewsList
// App -> AppNewsList

const app = createApp(App)

// global
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(() => {
  return import('./AppAsyncComponent')
}))

app.mount('#app')

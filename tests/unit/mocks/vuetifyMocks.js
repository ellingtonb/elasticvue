import Vue from 'vue'

Vue.prototype.$vuetify = { t: () => '' }

const app = document.createElement('div')
app.setAttribute('data-app', 'true')
document.body.append(app)

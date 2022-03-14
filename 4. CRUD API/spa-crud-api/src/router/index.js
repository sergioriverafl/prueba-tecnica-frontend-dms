import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddRecord from '../views/AddRecord.vue'
import UpdateRecord from '../views/UpdateRecord.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add-record', name: 'AddRecord', component: AddRecord },
  { path: '/update-record/:id_record', name: 'UpdateRecord', component: UpdateRecord },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


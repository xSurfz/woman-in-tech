import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Events from '../pages/Events.vue'
import Programs from '../pages/Programs.vue'
import Community from '../pages/Community.vue'
import Resources from '../pages/Resources.vue'
import Testimonials from '../pages/Testimonials.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/events', name: 'Events', component: Events },
  { path: '/programs', name: 'Programs', component: Programs },
  { path: '/community', name: 'Community', component: Community },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/testimonials', name: 'Testimonials', component: Testimonials },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
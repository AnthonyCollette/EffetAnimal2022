import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mediation from '../views/Mediation.vue'
import Seances from '../views/Seances.vue'
import Avecqui from '../views/Avecqui.vue'
import Pourqui from '../views/Pourqui.vue'
import Prevention from '../views/Prevention.vue'
import Contact from '../views/Contact.vue'
import Mentions from '../views/Mentions.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/mediation',
		name: 'Mediation',
		component: Mediation,
	},
	{
		path: '/seances',
		name: 'Seances',
		component: Seances,
	},
	{
		path: '/avec-qui',
		name: 'Avecqui',
		component: Avecqui,
	},
	{
		path: '/pour-qui',
		name: 'Pourqui',
		component: Pourqui,
	},
	{
		path: '/prevention-morsures',
		name: 'Prevention',
		component: Prevention,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
	{
		path: '/mentions-legales',
		name: 'Mentions',
		component: Mentions,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Accueil from "./page/user/Accueil.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
    	{
			path: '/', 
			component: Accueil
	 	},
   ]
});

export default router;

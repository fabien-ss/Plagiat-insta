// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Bureauvote from "./components/bureauvote/Bureauvote.vue";
import Commune from "./components/commune/Commune.vue";
import District from "./components/district/District.vue";
import Fokontany from "./components/fokontany/Fokontany.vue";
import Region from "./components/region/Region.vue";


const router = createRouter({
   history: createWebHistory(),
   routes: [
    	{
		 path: '/bureauvote', 
		 component: Bureauvote 
	 },
	{
		 path: '/commune', 
		 component: Commune 
	 },
	{
		 path: '/district', 
		 component: District 
	 },
	{
		 path: '/fokontany', 
		 component: Fokontany 
	 },
	{
		 path: '/region', 
		 component: Region 
	 },
	
   ]
});

export default router;

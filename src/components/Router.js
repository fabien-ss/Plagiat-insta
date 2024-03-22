// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Categorie from "./components/categorie/Categorie.vue";
import Matiere from "./components/matiere/Matiere.vue";
import MatiereStyle from "./components/matiereStyle/MatiereStyle.vue";
import Personne from "./components/personne/Personne.vue";
import Produit from "./components/produit/Produit.vue";
import Style from "./components/style/Style.vue";


const router = createRouter({
   history: createWebHistory(),
   routes: [
    	{
		 path: '/categorie', 
		 component: Categorie 
	 },
	{
		 path: '/matiere', 
		 component: Matiere 
	 },
	{
		 path: '/matiereStyle', 
		 component: MatiereStyle 
	 },
	{
		 path: '/personne', 
		 component: Personne 
	 },
	{
		 path: '/produit', 
		 component: Produit 
	 },
	{
		 path: '/style', 
		 component: Style 
	 },
	
   ]
});

export default router;

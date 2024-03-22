<style>
    .profil-link-option{
        margin-top: 9%;
        margin-left: 5%;
    }
    .suggestion{
        margin-bottom: 5%;
        font-weight: bold;
        color: rgb(138, 136, 136);
        display: inline;
    }
    .voir-tout{
        font-size: 14px;
        margin-left: 22%;
        color: black;
    }
    .link{
        margin-bottom: 5%;
    }
</style>

<template>
    <div class="row profil-link-option">
        <ProfilLink 
            class="link"
            :imagePath="'/people/pexels-yaroslav-shuraev-4511158.jpg'" :profil-name="'Catj'"
            :profilOption="'Basculer'"
            :profilName="'Fabien'"
            :profilSpeudo="'fabien-link-option'"
            />
        <div class="row suggestion"> 
            <span>
                Suggestion pour vous
            </span>
            <span class="voir-tout">
                Voir tout
            </span>
        </div>
        <ProfilLink 
            :imagePath="'/people/pexels-min-an-1134188.jpg'" :profil-name="'Catj'"
            :profilOption="'Suivre'"
            :profilName="'Julien'"
            :profilSpeudo="'Julien le bg'"    
        />
        <ProfilLink 
            :imagePath="'/people/pexels-pixabay-247304.jpg'" :profil-name="'Catj'"
            :profilOption="'Suivre'"
            :profilName="'Conan'"
            :profilSpeudo="'Comman'"    
        />
        <ProfilLink 
            :imagePath="'/people/pexels-rajaa-lemnari-19744641.jpg'" :profil-name="'Catj'"
            :profilOption="'Suivre'"
            :profilName="'Mbappe'"
            :profilSpeudo="'stdll'"    
        />
        <ProfilLink 
            :imagePath="'/people/pexels-vetrova-z-14485068.jpg'" :profil-name="'Catj'"
            :profilOption="'Suivre'"
            :profilName="'Peter'"
            :profilSpeudo="'pet_s@s'"    
        />
        <ProfilLink 
            :imagePath="'/people/téléchargement.jpg'" :profil-name="'Catj'"
            :profilOption="'Suivre'"
            :profilName="'Rojo'"
            :profilSpeudo="'cluster'"    
        />
    </div>
</template>

<script>
    import ProfilLink from './ProfilLink.vue';

    export default {
        name: "ProfilOption",
        data(){
            return{
                imagepath:"/people/"
            }
        },
        components: {
            ProfilLink
        },
        data() {
            return {}
        }
    }
</script>
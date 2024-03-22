<style>
    .profil-stories{
        display: flex;
        margin: auto;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        width: 100;
    }
</style>

<template>
    <div class="profil-stories">
        <Profil :profil-picture="'/public/people/pexels-dina-sabry-17039654.jpg'" :profil-name="'Oboy'"/>
        <Profil :profil-picture="'/public/people/pexels-yaroslav-shuraev-4511158.jpg'" :profil-name="'Catj'"/>
        <Profil :profil-picture="this.routeImagePath + 'pexels-suliman-sallehi-1822458.jpg'" :profil-name="'o@S_joker'"/>
        <Profil :profilPicture="this.routeImagePath + 'pexels-rajaa-lemnari-19744641.jpg'" :profil-name="'uFa'"/>
        <Profil :profilPicture="this.routeImagePath + 'pexels-suliman-sallehi-1822458.jpg'" :profil-name="'dont'"/>
        <Profil :profilPicture="this.routeImagePath + 'pexels-jarod-lovekamp-2404444.jpg'" :profil-name="'nioP'"/>
        <Profil :profilPicture="this.routeImagePath + 'pexels-marcus-silva-14121919.jpg'" :profil-name="'Hiii'"/>
        <Profil :profilPicture="this.routeImagePath + 'pexels-pixabay-269809.jpg'" :profil-name="'user3'"/>
        </div>
</template>

<script>
    import Profil from '../profil/Profil.vue';
    export default {
        name: "stories",
        components: {
            Profil
        },
        data() {
            return {
                routeImagePath: "/public/people/"
            }
        }
    }
</script>
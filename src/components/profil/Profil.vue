<style>
    .profil-picture {
        width: 80%; /* or any desired width */
        aspect-ratio: 1 / 1; /* This ensures the container is a square */
        overflow: hidden; /* This hides any part of the image that extends beyond the container */
        margin: auto;
        border: 2px solid rgb(196, 11, 11);
        border-radius: 50%;
        padding: 1%;
    }
    
    .profil-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .profil{
        text-align: center;
        width: 10%;
        margin-right: 0.05%;
    }
    .profil-name{
        font-size: 14px;        
    }
</style>
<template>
    <div class="profil" >
        <div class="profil-picture">
            <img :src=profilPicture>
        </div>
        <div class="profil-name">{{ this.profilName }}</div>
    </div>
</template>

<script>
    export default {
        name: "profil",
        data() {
            return {
            }
        },
        props:{
            profilName: String,
            profilPicture: String
        }
    }
</script>
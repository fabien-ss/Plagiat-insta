<style>
    .profil-picture-link {
        width: 130%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        margin: auto;
        border-radius: 50%;
    }
    .profil-picture-link img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    #profil-pseudo-link{
        margin-top: 1%;
        font-size: 14px;
        font-weight: bold;
    }
    #profil-name-link{
        margin-top: -10%;
        font-size: 14px;
    }
    .profil-option-link a{
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
    }
    .profil-option-link{
        margin-top: 2%;
    }
    .profil-details-link p{
        font-size: 11px;
    }
</style>

<template>
    <div class="row">
    <div class="col-2">
        <div class="profil-picture-link">
            <img :src=imagePath />
        </div>
    </div>
    <div class="profil-details-link col-7">
        <p id="profil-pseudo-link">{{profilSpeudo}}</p>
        <p id="profil-name-link">{{profilName}}n</p>
    </div>
    <div class="profil-option-link col-2">
        <a href="#">{{profilOption}}</a> 
    </div>
    </div>
</template>

<script>
    export default{
        name:"ProfilLink",
        data() {
            return {
        }},
        props: {
            imagePath: String,
            profilName: String,
            profilSpeudo: String,
            profilOption: String
        }
    }
</script>
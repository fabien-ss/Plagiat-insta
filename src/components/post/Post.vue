<style>
    .post {
        width: 60%;
        margin-left: 27%;
    }
    #icon-1{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    .img-2{
        aspect-ratio: 1 / 1; /* This ensures the container is a square */
        overflow: hidden; /* This hides any part of the image that extends beyond the container */
        margin: auto;
        border: 1px solid rgb(165, 11, 196);
        border-radius: 50%;
        margin-top: 1%;
        aspect-ratio: 1 / 1; /* This ensures the container is a square */
        overflow: hidden; /* This hides any part of the image that extends beyond the container */
    }
    .details{
        margin-bottom: 1%;
        display: flex;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .icon-group{
        margin-top: 1%;
    }
    .like{
        font-weight: bold;
        font-size: 14px;
    }
</style>

<template>
    <div class="post">
        <div class="row">
            <div class="details col-11">
                <div class="img-2 col-1">
                    <img id="icon-1" class="col-1" src="/public/people/30 Inspiring Examples of Levitation Photography - Inspirationfeed.jpg">
                </div>
                <div class="col-11" style="margin-top: 3%; margin-left: 3%; font-weight: bold;">
                    Fabien 
                </div>
            </div>
            <div class="col-1" style="font-weight: bold; font-size: x-large;">
                ...
            </div>
        </div>
        <div class="row profil-post">
            <img src="/public/people/pexels-vetrova-z-14485068.jpg">
        </div>
        <div class="row icon-group">
            <div class="col-11">
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-menu-up"></i>
                <i class="bi bi-send"></i>
            </div>
            <div class="col-1">
                <i class="bi bi-box-arrow-down"></i>
            </div>
        </div>    
        <div class="like">
            49 j'aime
        </div>  
        <div class="comments">
            Ajouter un commentaire... 
            <hr>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Post",
        data(){
            return {}
        }
    }
</script>
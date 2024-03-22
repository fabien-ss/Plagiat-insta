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
    .comments{
        opacity: 50%;
    }
    i:hover{
        stroke: #f5356e;
        fill: #f5356e;
    }
    .carousel-container{
        /*aspect-ratio: 1 / 2; /* This ensures the container is a square */
        overflow: hidden;
    }
</style>

<template>
    <div class="post">
        <div class="row">
            <div class="details col-11">
                <div class="img-2 col-1">
                    <img id="icon-1" class="col-1" src="/people/30 Inspiring Examples of Levitation Photography - Inspirationfeed.jpg">
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
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner carousel-container">
                <div class="carousel-item active">
                <img class="d-block w-100" src="/people/pexels-oziel-gómez-1755385.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/people/pexels-vetrova-z-14485068.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="/people/pexels-dina-sabry-17039654.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
        </div>
        <div class="row icon-group">
            <div class="col-11">
                <i class="bi bi-suit-heart" id="like-icon"></i>
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
        },
        methods:{
           doLike(){

           } 
        }
    }
</script>
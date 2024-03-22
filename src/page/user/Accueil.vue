<template>
    <div class="main-div">
        <div class="row">
            <div class="left-content col-2 collapse-wrapper">
                <sideBar />
            </div>
            <div class="col-2"></div>
        <div class="middle-content col-6">
            <div class="row">
                <div class="stories">
                    <stories />
                </div>
            </div>
            <div class="posts row">
                <Post />
            </div>
        </div>
        <div class="right-content col-3" >
            <ProfilOption />
        </div>
        </div>
    </div>
</template>

<style>
    .left-content{
        position: fixed;
    }
    .middle-content{
        border-left: 1px solid rgb(161, 158, 158);
    }
    .right-content{     
    }
    .stories{
        margin-top: 4%;
        margin-left: 17%;
        overflow: hidden;
    }
    .posts{
        margin-top: 3%;
    }
</style>

<script>
    import sideBar from '../../components/sideBar/sideBar.vue';
    import stories from '../../components/stories/stories.vue';
    import Post from '../../components/post/Post.vue';
    import ProfilLink from '../../components/profil/link/ProfilLink.vue';
    import ProfilOption from '../../components/profil/link/ProfilOption.vue';

    export default{
        name: "Accueil",
        components: {
            sideBar,
            stories,
            Post,
            ProfilLink,
            ProfilOption
        },
        data() {
            return {
            }
        }
    }
</script>
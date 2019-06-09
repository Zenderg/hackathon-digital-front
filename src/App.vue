<template>
    <div id="app">
        <div class="header">
            <router-link class="title" to="/">
                <img src="./assets/logo.svg" alt="">
                dvizh
            </router-link>
            <router-link to="/profile" class="profile" href="">
                <img src="http://penka.studio/images/temp/avatar.jpg" alt="">
            </router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>

    export default {
        components: {}
    }
</script>

<style lang="scss" scoped>
    @font-face {
        src: url("./assets/fonts/GothaProLig.otf");
        font-family: "GoLig";
    }

    #app {
        padding: 0 0 30px;

        .header {
            width: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            box-shadow: 0 5px 20px #eee;

            .title {
                margin: 0;
                color: #000;
                font-size: 18px;
                font-weight: bold;
                font-family: "GoLig";
                display: flex;
                align-items: center;

                img{
                    margin-right: 7px;
                }
            }

            .profile {
                margin-left: auto;

                img {
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }
        }
    }
</style>

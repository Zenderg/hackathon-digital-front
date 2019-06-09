<template>
    <div id="app">
        <div class="header">
            <router-link class="title" to="/">
                События
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
    #app{
        padding: 0 0 30px;
        .header {
            width: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            box-shadow: 0px 5px 20px #eee;

            .title {
                margin: 0;
                color: #000;
                font-size: 20px;
                font-weight: bold;
            }

            .profile{
                margin-left: auto;
                img{
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }
        }
    }
</style>

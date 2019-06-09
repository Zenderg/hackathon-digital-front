<template>
    <div id="app">
        <div class="header">
            <router-link class="title" to="/">
                Название
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
    .header {
        width: 100%;
        background: linear-gradient(75.3deg, #BB63FF 0%, #8B5AF0 100%);
        padding: 31px 0 31px 28px;
        display: flex;
        align-items: center;

        .title {
            color: #ffffff;
            margin: 0;
        }

        .profile{
            margin-left: auto;
            margin-right: 26px;
            img{
                height: 34px;
                width: 34px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
</style>

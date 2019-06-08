<template>
    <div class="profile">
        <div class="header">
            <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
                 alt="">
            <div class="profile__info">
                <p class="name">Иван Иваныч</p>
                <p class="age">24 года</p>
            </div>
        </div>
        <div class="my-events">
            <p class="title">Мои события</p>
        </div>
        <button class="create-event">
            Создать событие!
        </button>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .profile {
        .header {
            padding: 25px 0 25px 25px;
            width: 100%;
            background: linear-gradient(77.07deg, #BB63FF 0%, #8B5AF0 100%);
            display: flex;
            align-items: center;

            img {
                height: 80px;
                width: 80px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 20px;
            }

            .profile__info {
                .name {
                    margin-bottom: 10px;
                }

                .age {
                    margin: 0;
                    text-align: left;
                }
            }
        }

        .my-events {
            text-align: left;
            padding: 20px 25px 0 25px;

            .title {
                display: inline;
            }
        }

        .create-event {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            background: linear-gradient(258.89deg, #895AEF 4.22%, #BA63FF 92.82%);
            color: #ffffff;
            padding: 20px 66px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
</style>
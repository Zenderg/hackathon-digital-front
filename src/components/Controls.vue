<template>
    <div class="controls">
        <div class="search">
            <input type="search" placeholder="Поиск событий">
        </div>
        <img class="filters" src="../assets/filters.svg" alt="">
        <img class="view" src="../assets/map_view.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "Controls"
    }
</script>

<style scoped lang="scss">
    .controls {
        display: flex;

        .search {
            position: relative;
            display: inline;
            flex: 1 1;

            &::before {
                content: url("../assets/search.svg");
                position: absolute;
                top: 9px;
                left: 10px;
            }

            input {
                width: 100%;
                background-color: transparent;
                border: 2px solid #CCCCCC;
                box-sizing: border-box;
                border-radius: 20px;
                outline: none;
                padding: 5px 0 5px 30px;
            }
        }

        .filters, .view {
            margin-left: 15px;
            cursor: pointer;
        }
    }
</style>
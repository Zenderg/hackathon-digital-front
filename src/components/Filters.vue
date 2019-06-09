<template lang="html">
    <div class="filters">
        <div class="block city">
            <h3>Ваш город: Воронеж</h3>
        </div>
        <div class="block categories">
            <h3>Категория</h3>
            <div class="categories__wrapper">
                <div class="category" :style="'background: linear-gradient('+ category.color +')'"
                     v-for="category in categories" :ref="'category-'+category.id" :key="category.id"
                     @click="handleChangeCategory(category.name, category.id)">
                    <p class="title">{{category.name}}</p>
                    <img class="image" :src="'http://penka.studio'+category.image" :alt="category.name">
                </div>
            </div>
        </div>
        <div class="block date">
            <h3>Когда</h3>
            <div>
                <a-checkable-tag v-for="date in dates" :key="date.id" @change="handleChangeDate(date.value, date.id)"
                                 v-model="date.checked">
                    {{date.name}}
                </a-checkable-tag>
            </div>
        </div>
        <div class="block age">
            <h3>Возраст</h3>
            <div>
                <a-checkable-tag v-for="age in ages" :key="age.id" @change="handleChangeAge(age.name, age.id)"
                                 v-model="age.checked">
                    {{age.name}}+
                </a-checkable-tag>
            </div>
        </div>
        <div class="block price">
            <h3>Стоимость</h3>
            <div>
                <a-checkable-tag v-for="price in prices" :key="price.id" @change="handleChangePrice(price.id)"
                                 v-model="price.checked">
                    {{price.name}}
                </a-checkable-tag>
            </div>
        </div>
        <div class="buttons ">
            <button class='btn' @resetFilters>Сбросить</button>
            <button class='btn primary' @click="applyFilter">Принять</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import bus from '../bus';

    export default {
        name: 'Filters',
        props: {
            categories: Array
        },
        data() {
            return {
                dates: [
                    {id: 0, value: "today", name: 'Сегодня', checked: false},
                    {id: 1, value: "tomorrow", name: 'Завтра', checked: false},
                    {id: 2, value: "week", name: 'На этой неделе', checked: false},
                    {id: 3, value: "month", name: 'В этом месяце', checked: false}
                ],
                ages: [
                    {id: 0, name: '0', checked: false},
                    {id: 1, name: '6', checked: false},
                    {id: 2, name: '12', checked: false},
                    {id: 3, name: '16', checked: false},
                    {id: 4, name: '18', checked: false}
                ],
                prices: [
                    {id: 0, name: "1 р.+", checked: false},
                    {id: 1, name: "Бесплатно", checked: false}
                ],
                filterParams: {
                    city: 1,
                    categories: [],
                    date: null,
                    age: null,
                    price: false
                }
            }
        },
        methods: {
            handleChangeDate(value, id) {
                this.removeOtherIds(this.dates, id);
                this.filterParams.date = value;
            },
            handleChangeAge(value, id) {
                this.removeOtherIds(this.ages, id);
                this.filterParams.age = value;
            },
            handleChangePrice(id) {
                this.removeOtherIds(this.prices, id);
                this.filterParams.price = id;
            },
            removeOtherIds(objs, id) {
                objs.forEach(obj => {
                    if (obj.id !== id) obj.checked = false;
                });
            },
            applyFilter() {
                axios.get('http://penka.studio/api/events', {
                    params: this.filterParams
                })
                    .then(r => {
                        console.log(r);
                        bus.$emit("filters-apply", r.data);
                    })
            },
            handleChangeCategory(name, id) {
                const index = this.filterParams.categories.indexOf(name);
                index !== -1 ? this.filterParams.categories.splice(index, 1) : this.filterParams.categories.push(name);
                const thisEl = this.$refs["category-" + id][0];
                console.log(thisEl);
                thisEl.classList.contains("active") ? thisEl.classList.remove("active") : thisEl.classList.add("active");
            }
        },
        mounted() {
            // axios.get('https://penka.studio')
        }
    }
</script>

<style lang="scss" scoped>
    button {
        cursor: pointer;
    }

    h3 {
        font-weight: bold;
        font-size: 20px;
    }

    .filters {
        margin: 30px 0;

        .block {
            margin-bottom: 20px;
        }

        .categories {
            .categories__wrapper {
                display: flex;
                overflow-x: scroll;
                margin-left: -10px;

                &::-webkit-scrollbar {
                    width: 0;
                }

                .category {
                    cursor: pointer;
                    filter: grayscale(1);
                    transition: all .3s;
                    margin: 10px 15px 10px 10px;
                    min-width: 150px;
                    min-height: 80px;
                    position: relative;
                    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
                    border-radius: 10px;

                    &:hover {
                        filter: grayscale(0);
                    }

                    &.active {
                        filter: grayscale(0);
                    }


                    .title {
                        position: absolute;
                        font-size: 13px;
                        text-transform: uppercase;
                        top: 12px;
                        left: 0;
                        z-index: 4;
                        padding: 2px 7px;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                        background: rgba(255, 255, 255, 0.69);
                    }

                    .image {
                        z-index: 3;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }

        .buttons {
            display: flex;
            justify-content: space-around;
        }

        .btn {
            background: #FFFFFF;
            border: 1px solid #CECBCB;
            box-sizing: border-box;
            border-radius: 30px;
            padding: 8px 40px;

            &.primary {
                border: 0;
                color: #fff;
                background: linear-gradient(76.49deg, #BB63FF 0%, #8B5AF0 100%);
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
            }
        }
    }

</style>

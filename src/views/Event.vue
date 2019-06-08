<template>
    <div class="event">
        <p class="category">
            {{event.category.name}}
        </p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "event",
        data(){
          return {
              event:{}
          }
        },
        mounted() {
            axios.get("http://penka.studio/api/events/"+this.$route.params.id).then((r) => {
                // console.log(r.data);
                this.event = r.data;
            })
        }
    }
</script>

<style scoped lang="scss">
.event{
    padding: 15px 30px 0 30px;
    background: linear-gradient(86.82deg, #40C6DD 0%, #A2E4EF 100%);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    .category{
        background: rgba(255, 255, 255, 0.69);
        padding: 5px 15px;
        border-radius: 30px;
        margin: 0;
        display: inline;
    }
}
</style>
<template>
  <div class="home">
    <EventsList :events="events"></EventsList>
    <Filter></Filter>
  </div>
</template>

<script>
// @ is an alias to /src
import EventsList from '@/components/EventsList.vue'
import Filter from '@/components/Filter.vue'
import axios from 'axios'

export default {
  name: 'home',
  data(){
    return {
      events: [
        {
          name: "Хакатон",
          date: "25.06.2019",
          address: "ул 20-летия Октября",
          price: "от 250Р"
        },
        {name: 2},
        {name: 3},
        {name: 4},

      ]
    }
  },
  mounted(){
    axios.get('http://penka.studio/api/events').then((r) => {
      console.log(r);
      this.events = r.data;
    })
  },
  components: {
    EventsList,
    Filter
  }
}
</script>

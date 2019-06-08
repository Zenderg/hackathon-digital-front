<template>
  <div class="home">
    <Controls></Controls>
  </div>
</template>

<script>
import Controls from '@/components/Controls.vue';

export default {
  name: 'home',
  components: {
    Controls
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding: 20px 25px 0 25px;
  }
</style>
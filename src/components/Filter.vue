<template lang="html">
  <a-checkbox
       :checked="checked"
       :disabled="disabled"
       @change="onChange"
     >
       {{label}}
     </a-checkbox>
</template>

<script>
export default {
  name: 'Filter',
  data(){
    return {
      label: '0+'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

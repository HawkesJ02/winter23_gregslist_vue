<template>
  <div class="HouseCard card">
    <!-- <img :src="house.imgUrl" :alt="house.year"> -->
<div>
  <p>{{ house.description }}</p>
</div>

  </div>
</template>


<script>
export default {
  props: {
    house: { type: Object, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
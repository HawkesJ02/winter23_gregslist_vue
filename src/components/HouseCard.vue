<template>
  <div class="HouseCard card">
    <img :src="house.imgUrl" :alt="house.year" height="200" width="200">
<div>
  <p>Description: {{ house.description }}</p>
  <p>Bathrooms: {{ house.bathrooms }}</p>
  <p>Price: ${{ house.price }}</p>
  <p>Levels: {{ house.levels }}</p>
  <p>Year: {{ house.year }}</p>
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
<template>
  <div class="HouseCard card my-3">
    <img :src="house.imgUrl" :alt="house.year" height="200" width="200">
<div>
  <p>Description: {{ house.description }}</p>
  <p>Bathrooms: {{ house.bathrooms }}</p>
  <p>Price: ${{ house.price }}</p>
  <p>Levels: {{ house.levels }}</p>
  <p>Year: {{ house.year }}</p>
</div>
<div class="card-footer text-end" v-if="showSeller">
<span class="on-hover me-2">{{ house.seller.name }}</span>
<img :src="house.seller.picture" :alt="house.seller.name" height="40" width="40" class="rounded-circle">
</div>
  </div>
</template>


<script>
export default {
  props: {
    house: { type: Object, required: true},
    showSeller: { type: Boolean, default: true }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
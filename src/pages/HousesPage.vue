<template>
  <div class="housesPage">
    <!-- <h1>This is the houses page</h1> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" v-for="h in houses">
          <HouseCard :house="h"/>
        </div>
      </div>
      <div class="row sticky-bottom">
        <div class="col-12">
          <button class="fs-5 btn btn-dark" data-bs-toggle="modal" data-bs-target="#test-modal">
            🏘
          </button>
        </div>
      </div>
    </div>
   
<Modal id="test-modal" modal-title="ADD A NEW HOUSE :)">
<HouseForm/>
</Modal>

  </div>
</template>


<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js"
import { AppState } from "../AppState.js";

export default {
  setup(){

async function get_all_houses(){
  try {
    await housesService.get_all_houses()
  } catch (error) {
    Pop.error(error)
    logger.error
  }
}

onMounted(() => {
  get_all_houses()
})

    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

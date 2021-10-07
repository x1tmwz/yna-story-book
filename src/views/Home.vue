<template>
  <div class="dash_borad_container">
    <div class="home-page-contaier">
      <p>this is home page ... magice happen here</p>
    </div>
    <RecentStories />
  </div>
</template>

<script>
import RecentStories from "../components/lists/RecentStories.vue"
export default {
  name: 'Home',
  components:{RecentStories}
  
}
</script>
<style lang="scss">
.home-page-contaier{
  background-color: rgba(155, 151, 151, 0.1);
  text-align: start;
  min-height: 85vh;
}
</style>

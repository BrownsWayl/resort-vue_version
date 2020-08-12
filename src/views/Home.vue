<template>
<div>
  <header class='defaultHero'>
    <div class="banner">
      <h1>luxurious rooms</h1>
      <div></div>
      <p>premium rooms starting at $9999.999</p>
      <router-link to='/rooms' class='btn-primary'>
        our rooms
      </router-link>
    </div>
  </header>
  <services />
  <featuredrooms />
  </div>
</template>

<script>
// @ is an alias to /src
import services from '../components/Services.vue';
import featuredrooms from '../components/FeaturedRooms.vue';
export default {
  name: "Home",
  components: {
    services,
    featuredrooms
  }

};
</script>

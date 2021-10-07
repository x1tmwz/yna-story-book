<template>
  <nav class="main-nav">
    <h1 class="">StoryBook</h1>
    <div class="main-nav_links-container">
      <router-link
        :to="{ name: 'Home' }"
        class="main-nav_link"
        active-class="main-nav_link--active"
        exact
        >Home</router-link
      >
      <router-link
        :to="{ name: 'Stories' }"
        class="main-nav_link"
        active-class="main-nav_link--active"
        >Stories</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  computed: {
    // links: function () {
    //   const role = this.$store.getters['auth/role'] + ''
    //   const links = []
    //   for (let i = 0; i < this.$router.options.routes.length; i++) {
    //     const route = this.$router.options.routes[i]
    //     if(route && route.path.indexOf("/:") !== -1){
    //       continue;
    //     }
    //     if ((!route.meta && route.name !== 'login') || (role === roles.ADMIN && route.name !== 'login')) {
    //       links.push({
    //         name: route.name,
    //         path: route.path
    //       })
    //       continue;
    //     }
    //     if (route.meta && route.meta.role === role) {
    //       links.push({
    //         name: route.name,
    //         path: route.path
    //       })
    //     }
    //   }
    //   return links
    // }
  },
  methods: {},
};
</script>

<style lang="scss">
.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  h1 {
    color: black;
    margin: 1rem;
    font-weight: 100;
  }
  .main-nav_link {
    margin: 0.2rem;
    background: rgb(71, 68, 114);
    border: none;
    color: white;
    text-decoration: none;
    padding: 0.5rem 2rem;
    border-radius: 20px;
    font-weight: lighter;
    box-shadow: 1px 1px rgb(165, 165, 165);
  }
  .main-nav_link--active {
    font-weight: bold;
  }
  .main-nav_links-container {
  }
}

@media (max-width: 850px) {
}
</style>

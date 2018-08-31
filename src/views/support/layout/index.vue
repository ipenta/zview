<template lang="html">
  <div class="layout">
    <h2>layout</h2>
    {{menus}}
    <a href="javascript://" @click="onLogout">登出</a>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  mounted: function() {
    this.initApp()
  },
  computed: {
    ...mapGetters(['menus'])
  },
  methods: {
    ...mapActions(['initApp', 'logout']),
    onLogout: function() {
      this.logout()
    }
  }

}
</script>

<style lang="css">
</style>

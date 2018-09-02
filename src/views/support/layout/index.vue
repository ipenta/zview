<template lang="html">
  <div class="layout">
    <h2>layout</h2>
    {{menus}}
    <br>
    {{identifier}}
    <div class="">
      <el-menu :default-active="defaultActive" :router="true" @select="onSelected">
        <SideMenu :menus="menus"></SideMenu>
      </el-menu>
    </div>
    <a href="javascript://" @click="onLogout">登出</a>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    let active = window.sessionStorage.defaultActive || '/'
    return {
      defaultActive: active
    }
  },
  mounted: function() {
    this.initApp()
  },
  computed: {
    ...mapGetters(['menus', 'identifier'])
  },
  methods: {
    ...mapActions(['initApp', 'logout']),
    onSelected(index) {
      window.sessionStorage.defaultActive = index
    },
    onLogout: function() {
      this.logout()
    }
  },
  components: {
    SideMenu: SideMenu
  }
}
</script>

<style lang="css">
</style>

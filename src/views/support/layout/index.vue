<template lang="html">
  <div class="layout">
    <el-row :gutter="24">
      <el-col :span="4">
        <h2>layout</h2>
        <div class="">
          <el-menu :default-active="defaultActive" :router="true" @select="onSelected" :collapse="isCollapse">
            <SideMenu :menus="menus"></SideMenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="header"><a href="javascript://" @click="onToggleSidebar">菜单</a>{{identifier}}<a href="javascript://" @click="onLogout">登出</a></div>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  mounted: function() {
    this.initApp()
  },
  computed: {
    ...mapGetters(['menus', 'isCollapse', 'defaultActive', 'identifier'])
  },
  methods: {
    ...mapMutations(['TOGGLE_SIDEBAR', 'SET_DEFAULT_ACTIVE']),
    ...mapActions(['initApp', 'logout']),
    onSelected(index) {
      this.SET_DEFAULT_ACTIVE(index)
    },
    onToggleSidebar() {
      this.TOGGLE_SIDEBAR()
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
<!-- rel="stylesheet/scss" lang="scss" scoped -->
<style rel="stylesheet/scss" lang="scss" scoped>
.layout{height: inherit;}
.header{height: 30px;line-height: 30px;}
h2{height: 40px;line-height: 40px; font-size: 24px;margin: 0;}
</style>

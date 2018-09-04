<template lang="html">
  <el-container :class="[isCollapse ? 'collapse' : '']">
    <el-aside width='200px'>
      <el-header>
        <h2><i class="el-icon-menu"></i> <span>layout</span></h2>
      </el-header>
      <el-menu :default-active="defaultActive" :router="true" @select="onSelected" :collapse="isCollapse">
        <SideMenu :menus="menus"></SideMenu>
      </el-menu>
    </el-aside>
    <el-container class="content">
      <el-header>
        <a href="javascript://" @click="onToggleSidebar"><i :class="[isCollapse ? 'el-icon-d-arrow-right': 'el-icon-d-arrow-left']" style="font-size:24px;margin-top:18px;"></i></a>
        <div class="person">{{identifier}}&nbsp;&nbsp;&nbsp;<a href="javascript://" @click="onLogout">登出</a></div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
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
.collapse .el-aside {width: 65px!important;}
.collapse h2 span {display: none;}
.sidebar{width: 200px;position :absolute;min-height:100%;}
.el-header{line-height: 59px;border-bottom: 1px solid #ddd;}
h2{line-height: 60px; font-size: 24px;margin: 0;}
.person{float: right;}
.el-menu{height: inherit;}
</style>

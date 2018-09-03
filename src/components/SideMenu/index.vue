<template lang="html">
  <div>
    <template v-for="item in menus">
      <el-submenu v-if="item.children && item.children.length>0" :key="item.name" :index="item.name">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <SideMenu :menus="item.children"></SideMenu>
      </el-submenu>
      <el-menu-item v-else-if="item.path !== null" :key="item.path ? item.path: '/'" :index="item.path ? item.path: '/'">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    menus: Array
  }
}
</script>

<style lang="css">
</style>

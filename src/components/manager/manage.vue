<template>
<el-container style="height: 920px; border: 1px solid #eee">
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="logo">
        <img alt="logo" src="../../../static/imgs/logo.png" class="logo">
      </div>

      <router-link to="/manager/managerInfo">
      <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">主页</span>
      </el-menu-item>
      </router-link>

      <el-submenu  index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/manager/teamworkermanagement">
            <el-menu-item index="2-1">团队员工管理</el-menu-item>
          </router-link>
          <router-link to="/manager/addworkers">
            <el-menu-item index="2-3">员工添加</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">项目管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/manager/creatproject" v-if="'模型主管'===staffInfo.statusType">
            <el-menu-item index="3-1">项目创建</el-menu-item>
          </router-link>
          <router-link to="/manager/file">
            <el-menu-item index="3-2">项目文件下载</el-menu-item>
          </router-link>
          <router-link to="/manager/projectaudit">
            <el-menu-item index="3-3">项目审核</el-menu-item>
          </router-link>
          <router-link to="/manager/projectback" v-if="'模型主管'!==staffInfo.statusType">
            <el-menu-item index="3-4">项目回退</el-menu-item>
          </router-link>
          <router-link to="/manager/projectswitch">
            <el-menu-item index="3-5">项目交付</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
  </el-menu>
  
  <div class="main">
    <div class="top-bar">
      <Header/>
    </div>
    <div class="mainview">
      <router-view/>
    </div>
  </div>

</el-container>
</template>

<script>
import Header from '../commons/header'
import {mapState} from 'vuex'
export default {
  components: {
    Header
  },
  computed: {
    ...mapState(['staffInfo'])
  }
}
</script>
<style>
.el-aside {
    color: #333;
}

.el-menu-vertical-demo{
    width: 200px;
    height: 100%;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.box{
    position: absolute;
    padding: 50px 50px;
    margin: 80px 200px;
    color: #000;
    width: 1600px;
    height: 740px;
}
</style>

<script setup>

</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- Header 区域 -->
      <el-header class="header">
        <span class="title">图书管理系统</span>
        <span class="right_tool">
          <a href="">
            <el-icon><EditPen /></el-icon> 修改密码 &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;
          </a>
          <a href="">
            <el-icon><SwitchButton /></el-icon> 退出登录
          </a>
        </span>
      </el-header>
      
      <el-container>
        <!-- 左侧菜单 -->
        <el-aside width="200px" class="aside">
          <!-- 左侧菜单栏 -->

          <el-menu router = "true">
            
            <el-menu-item index="/index">
              <el-icon><Monitor /></el-icon> 首页
            </el-menu-item>

            <el-sub-menu index="/manage">
              <template #title>
                <el-icon><User /></el-icon> 用户管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="/reader">用户信息</el-menu-item>
                <el-menu-item index="/record">借阅管理</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="/manageBook"> 
              <template #title>
                <el-icon><Tickets /></el-icon> 书籍管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="/book">图书管理</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="sysytem">
              <template #title>
                <el-icon><Setting /></el-icon> 系统设置
              </template>
              <el-menu-item-group>
                <el-menu-item index="/administrator">管理员控制</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>



  


        </el-aside>
        
        <el-main>
          
          <!-- 主体内容 -->
          <router-view></router-view>

        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<style scoped>
.header {
  background-image: linear-gradient(to right, #007d38, #0089a4, #0041aa, #d00068, #eb1212);
}

.title {
  color: white;
  font-size: 40px;
  font-family: 楷体;
  line-height: 60px;
  font-weight: bolder;
}

.right_tool{
  float: right;
  line-height: 60px;
}

a {
  color: white;
  text-decoration: none;
}

.aside {
  width: 220px;
  border-right: 1px solid #ccc;
  height: 730px;
}
</style>

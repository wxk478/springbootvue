<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--<el-menu :default-openeds="['1', '3']">
                  <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                      <el-menu-item index="1-4-1">选项一</el-menu-item>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>导航二</template>
                    <el-menu-item index="1-4-1">选项二</el-menu-item>
                  </el-submenu>
                </el-menu>-->

                <el-menu router :default-openeds="['0']">
                    <el-submenu v-for="(items,index) in $router.options.routes" :index="index+''" v-if="items.show">
                        <template slot="title"><i class="el-icon-message">{{items.name}}</i></template>
                        <el-menu-item v-for="(items2,index2) in items.children" :index="items2.path"
                        :class="$route.path==items2.path ? 'is-active':'' ">
                            <template slot="title"><i class="el-icon-message">{{items2.name}}</i></template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>

                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>

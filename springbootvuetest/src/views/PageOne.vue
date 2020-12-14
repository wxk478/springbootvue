<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/QQ图片20201021110335.jpg" class="image">
                    <div style="padding: 5px;" class="change">
                        <span>小勇子的菜菜香香漂漂亮亮</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" @click="lookWife(dialogTableVisibl=true)">查看信息</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="8" style="margin-left: 200px">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/QQ图片20201026110004.jpg" class="image">
                    <div style="padding: 5px;" class="change">
                        <span>哇！洪勇 牛逼逼逼逼逼逼的</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text"  @click="selectMess(dialogTableVisible=true)">查看信息</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <!-- Table -->
<!--        <el-button type="text" @click="dialogTableVisible = true">查看信息</el-button>-->
        <el-dialog title="洪勇" :visible.sync="dialogTableVisibl">
           <img src="../assets/QQ图片20201025175239.jpg" width="700px" height="300px">
        </el-dialog>


        <el-dialog title="部门信息显示" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
                <el-table-column property="id" label="编号" width="150"></el-table-column>
                <el-table-column property="deptName" label="部门名称" width="200"></el-table-column>
                <el-table-column property="name" label="操作" width="200"></el-table-column>
            </el-table>
        </el-dialog>

        <!--&lt;!&ndash; Form &ndash;&gt;
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>-->
    </div>
</template>

<script>
    export default {
        methods:{
            selectMess(){
                const _this = this;
                axios.get('http://localhost:1016/dept/findAll/1/4').then(function (resp) {
                  _this.gridData = resp.data.list;
                    // console.log(resp.data.list)
                });
            },
            lookWife(){

            }
        },
        data() {
            return {
                currentDate: new Date(),
                gridData: [
                    {
                        id:0,
                        deptName:'',
                        name:'修改'
                    }
                ],
                dialogTableVisible: false,
                dialogTableVisibl: false,
                dialogFormVisible: false,
                form: {},
                formLabelWidth: '120px'
            };
        }
    };
</script>

<style scoped>
    .change{
        width: 200px;
        height: 130px;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
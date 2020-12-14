<template>
    <el-table
            :data="tableData4"
            style="width:80%;"
            max-height="400">
        <el-table-column
                fixed
                prop="id"
                label="部门编号"
                width="300">
        </el-table-column>
        <el-table-column
                fixed
                prop="deptName"
                label="部门名称"
                width="300">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="300">
            <template slot-scope="scope">
                <el-button
                        @click="deleteRow(scope.row)"
                        type="text"
                        size="small">
                    移除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        methods: {
            deleteRow(rows) {
                        this.$alert('这是——'+rows.deptName, '消息删除提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                axios.post("http://localhost:1016/dept/del/"+rows.id).then(function (resp) {
                                    if (resp.data == 'Success') {
                                       window.location.reload();
                                    }
                                });
                            }
                        })
            }
        },
        data() {
            return {
                value:true,
                tableData4: [{
                    id:'',
                    deptName:''

           }]
        }
    },
        created() {
            const _this = this;
            axios.get("http://localhost:1016/dept/findAll").then(function (resp) {
                _this.tableData4 = resp.data;
            });
        }
    }
</script>

<style scoped>

</style>
<template>
    <el-form style="width: 50%;" :label-position="labelPosition" label-width="80px" :model="dept">
        <el-form-item label="部门编号">
            <el-input v-model="dept.id"></el-input>
        </el-form-item>
        <el-form-item label="部门名称">
            <el-input v-model="dept.deptName"></el-input>
        </el-form-item>
        <el-button style="margin-left: 30%;" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                dept: {
                    id: '9999999',
                    deptName: '王小康爱洪勇',
                }
            };
        },
        methods:{
            submitForm(formName) {
                const _this = this;

                        this.$alert('这是——'+_this.dept.deptName, '修改消息提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                axios.post("http://localhost:1016/dept/updateDept",_this.dept).then(function (resp) {
                                    if (resp.data == 'Success') {
                                        _this.$router.push('/PageOne')
                                    }
                                });
                            }
                        })


            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created() {
            // alert(1)
        }
    }
</script>

<style scoped>

</style>
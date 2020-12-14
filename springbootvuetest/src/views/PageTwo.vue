<template>
    <el-form style="width: 60%" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="部门编号" prop="deptName">
            <el-input type="text" v-model="ruleForm2.id" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
            <el-input type="text" v-model="ruleForm2.deptName" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var deptId = (rule, value, callback) => {
                if (value == null) {
                    callback(new Error('请输入部门编号!'));
                }else {
                    callback();
                }
            };
            var deptName = (rule, value, callback) => {
               if (value == null) {
                    callback(new Error('请输入部门名称!'));
                }else {
                   callback();
               }
            };
            return {
                ruleForm2: {
                    id:'',
                    deptName: '',
                },
                rules2: {
                    deptId: [
                        { validator: deptId, trigger: 'blur' }
                    ],
                    deptName: [
                        { validator: deptName, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$alert('这是——'+_this.ruleForm2.deptName, '消息提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                axios.post("http://localhost:1016/dept/save",_this.ruleForm2).then(function (resp) {
                                    if (resp.data == 'Success') {
                                        _this.$router.push("/PageOne")
                                    }
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style scoped>

</style>
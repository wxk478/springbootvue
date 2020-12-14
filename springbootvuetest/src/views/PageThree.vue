<template>
    <el-switch
            @change="jump"
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">

    </el-switch>
</template>

<script>
    export default {
        data() {
            return {
                value1: true,
                value2: true,
                id:''
            }
        },
        methods:{
            jump(){
                this.$router.push("/update")
            }
        },
       /* created() {
            const _this = this;
            axios.get("http://localhost:1016/dept/findAll").then(function (resp) {
                for(i = 0;i < resp.data.length;i++){
                    console.log(resp.data[i])

                }
                 // _this. id = resp.data.id;
            })
        }*/
    }
</script>

<style scoped>

</style>
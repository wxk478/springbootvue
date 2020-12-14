<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>部门名称</td>
            </tr>
            <tr v-for="items in books">
                <td>{{items.id}}</td>
                <td>{{items.deptName}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Book.vue",
        data(){
            return{
               msg:"nimad",
                books:[
                    {
                        id:0,
                        deptName:null
                    }
                     ]
            }
        },
        created() {
            const _this = this;
            axios.get("http://localhost:1016/dept/findAll").then(function(resp){
                _this.books = resp.data;
            })
        }
    }
</script>

<style scoped>

</style>
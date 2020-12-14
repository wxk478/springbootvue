<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default {
    methods:{
      axiosTest(){
        const that = this;
        axios.post('http://localhost/doLogin',this.loginDate).then(function (resp) {
              console.log(resp);
              if (resp.data == "ok"){
                that.$router.push({path:'/'})
              }
        })
        .error(function (error) {
              console.log(error)
        })
      }
    }
  }
</script>

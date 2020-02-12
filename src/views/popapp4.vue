<template>
  <div id = "popapp4">
      <h2>{{firstname}}</h2>
      <h2>{{lastname}}</h2>
      <h2>{{fullname}}</h2>
  </div>
</template>

<script>
export default {
    name: "popapp4",
    data(){
        return{
            firstname: "pop",
            lastname: "app"
        }
    },
    computed:{
        fullname(){
            return this.firstname+" "+this.lastname
        }
    }

}
</script>

<style>

</style>
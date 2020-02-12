<template>
  <div app="popapp2">
      <h1>Event and Methord</h1>
      <button v-on:click="clickMe">ClickMe</button>
      <button v-on:click="clickMe2('welcome to vueJS')">ClickMe2</button>
        <button @click="clickMe2('welcome to popappp2')">ClickMe3</button>
        <h3>{{getTimestamp()}}</h3>
  </div>
</template>

<script>
export default {
    name: "popapp2",
    mounted(){
        this.inital()
    },
    methods:{
        inital(){
            //console.log("Intialization")
        },
        clickMe(){
            alert("popapp2")
        },
        clickMe2(message2){
            alert(message2)
        },
        getTimestamp(){
            return Date()
        }

    }
}
</script>

<style>

</style>
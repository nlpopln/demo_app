<template>
  <div>
    <h1>v-model</h1>
    <input v-model="message" type='text' placeholder="Enter your message">
    <div>{{message}}</div>
    <button @click="message=''">reset</button>
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return{
      message:""
    }
  },
}
</script>

<style>

</style>
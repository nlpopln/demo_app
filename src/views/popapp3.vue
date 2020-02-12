<template>
    <div>
        <h1>Data</h1>
        <button @click="count++; isLogged=true">Count++</button>
        <span>{{count}}</span>
        <div>{{message}}</div>
        <div>{{isLogged}}</div>
        <input type="text" placeholder="Enter a Message" v-model="message">
        <h2 v-if="isLogged">Yahoo</h2>
        <div>{{account}}</div>
        <div>{{account.username}}</div>
        <div>{{courses[0]}}</div>
        <ul>
            <li class="content" v-for="(item,index) in courses" :key="index">{{index+1}}.{{item}}</li>
        </ul>
        <span class="title">123</span>
    </div>
</template>

<script>
export default {
    name: "popapp3",
    mounted(){
        this.message = "welcome to popapp3"
    },
    data(){
        return{
            count:0,
            message:"",
            isLogged: false,
            account:{
                username: "admin",
                password: "1234"
            },
            courses:[
                "A1","A2","B2","B2","C3"
            ]
        }
    },
}
</script>

<style scoped>
    li{
        color: red;
    }
     .title{
    color: red;
  }
</style>
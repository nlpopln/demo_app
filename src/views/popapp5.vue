<template>
    <div id="popapp5">
    <br>
    <img v-bind:src="imageUrl" v-bind:height="height" >
    <br>
    <a v-bind:href="link">google</a>
    <br><a :href="link">google2</a>
    <div :class="[error,important]">popapp</div>
    <div :class="[false ? error :'',important]">popapp1</div>
    <div :style="{color,fontSize:fontSize}">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding Style OBJ</div>
    <button @click="isActive = !isActive">ToggleAction</button>
    </div>
</template>

<script>
export default {
    name: "popapp5",
    data(){
        return{
            imageUrl:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            ,height: 50,
            link:"http://google.com",
            error: "error_class",
            important: "important",
            color: "green",
            fontSize: "30px",
            styleObj:{
                backgroundColor: 'yellow',
                color: 'green'
            },
            isActive: false

        }
    }
}
</script>

<style>
    .error_class{
        background-color: red;
        color: white;
    }
    .important{
        font-weight: 800;
    }
</style>
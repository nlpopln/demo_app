<template>
  <div id="popapp8">
      <div v-if="type === 'A'">
          I am A
      </div>
      <div v-else-if="type === 'B'">
          I am B
      </div>
      <div v-else-if="type === 'C'">
          I am C
      </div>
      <div v-else>
          Not a/b/c
      </div>

      <div v-if="isShow">
          Blink 1
      </div>
      <div v-else>
          Blink 2
      </div>

      <div v-show="isShow">
          Blink v-show
      </div>

  </div>
</template>

<script>
export default {
    name:"popapp8",
    data(){
        return{
            type: "B",
            isShow: false
        }
    },
    mounted(){
        setInterval(()=>{
            this.isShow = !this.isShow
        },1000)
    }
}
</script>

<style>

</style>
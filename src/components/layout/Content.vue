<template>
    <div id="content" class="content-wrapper">
      <router-view ></router-view>
    </div>
</template>

<script>
export default {
    name:"Content"
}
</script>

<style socped>
    .content-wrapper{
    margin: 24px;
    padding: 24px;
    border-width: 1px;
    border-color: violet;
    border-style: dashed;
  }
</style>
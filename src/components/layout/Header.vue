<template>
    <div id="Header">
        <ul>
        <li><router-link to="/"><button>HOME</button></router-link></li>
        <li><router-link to="/popapp1"><button>popapp1 intro</button></router-link></li>
        <li><router-link to="/popapp2"><button>popapp2 event</button></router-link></li>
        <li><router-link to="/popapp3"><button>popapp3 Data</button></router-link></li>
        <li><router-link to="/popapp4"><button>popapp4 Compute</button></router-link></li>
        <li><router-link to="/popapp5"><button>popapp5 Binding</button></router-link></li>
        <li><router-link to="/popapp6"><button>popapp6 form</button></router-link></li>
        <li><router-link to="/popapp7"><button>popapp7 Slot</button></router-link></li>
        <li><router-link to="/popapp8"><button>popapp8 condition</button></router-link></li>
       <li><router-link to="/popapp9"><button>popapp9 Loop</button></router-link></li>
       <li><router-link to="/demo1"><button>demo1</button></router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin-right: 1px;
  }
  .title{
    font-size: 40px;
    color: green;
  }
</style>
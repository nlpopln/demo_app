<template>
    <div id="popapp7">
        <Clock>
            <span style="color:red">เวลาปัจจุบัน </span>
        </Clock>
        <Clock>
            <span style="color:green">เวลาปัจจุบัน </span>
        </Clock>
        <!-- using fallback (default) content -->
        <Clock/>

        <Clock>
            <span style="color:orange">เวลาปัจจุบัน 1234 </span>
            <template v-slot:header>
                <h1>Header</h1>
            </template>

            <template v-slot:header>
                <h1>Header</h1>
            </template>

            <template v-slot:footer>
                <h3>Footer</h3>
            </template>
        </Clock>

    </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue"
export default {
    name:"popapp7",
    components:{
        Clock
    }
}
</script>

<style>

</style>
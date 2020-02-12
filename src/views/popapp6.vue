<template>
  <div id="popapp6">
      <form v-on:submit.prevent="submit">

            <div>
              <label for="first_name">Firstname</label>
              <input type="text" name="first_name" v-model.trim="applicant.first_name">
            </div>

            <div>
              <label for="last_name">Lastname</label>
              <input type="text" name="last_name" v-model.trim="applicant.last_name">
            </div>

            <div>
              <label class= "" for="sex">Male</label>
              <input type="radio" name="sex" value="Male" v-model="applicant.sex">
  
              <label for="sex">Female</label>
              <input type="radio" name="sex" value="Female" v-model="applicant.sex">
            </div>

            <!-- age -->
            <div>
                <label for="age">Age:</label>
                <input type="number" v-model.number="applicant.age">
            </div>

            <div>
                <select name="course" v-model="applicant.course">
                    <option value="react">react</option>
                    <option value="angular">angular</option>
                    <option value="vuejs">vuejs</option>
                </select>
            </div>

          <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
          <button type="submit">Submit</button>
      </form>

      <div style="margin-top: 16px;color: red">#Spy {{JSON.stringify(applicant)}}</div>
  </div>
</template>

<script>
export default {
    name: "popapp6",
    data(){
        return{
            count : 0
            ,
            applicant:{
                first_name:"",
                last_name:"",
                sex:"male",
                age:0,
                course:"vuejs"
            },formcall:{
                callno:0
            }

        }
    },
    methods: {
        submit(event){

           /* var first_name = this.applicant.first_name;
            if(first_name == "pop"){
                this.$emit("section", true);
                alert(first_name )
            }else{
                this.$emit("section", false);
                alert("no pop");
            }*/

            event.preventDefault();
            alert(JSON.stringify(this.applicant))
            //this.clear();
        },
        clear(){
            this.applicant={
                first_name:"",
                last_name:"",
                sex:"male",
                age:0,
                course:"vuejs"
    
            }
        },
        useDefault(){
            this.applicant={
                first_name:"pop",
                last_name:"ap",
                sex:"male",
                age:20,
                course:"angular"
    
            }
        },
    },
}
</script>

<style>

</style>
<template>
  <form @submit.prevent="addNewContact">
    <div>
      <label> Name :</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label>Phone :</label>
      <input type="text" v-model="phone">
    </div>
    <div>
      <label>Email :</label>
      <input type="text" v-model="email">
    </div>
    <button>add new contact</button>
  </form>
</template>
<script>
export default{
emits:['add-contact'],
data(){
  return{
    name:'',
    phone:'',
    email:''
  }
},
methods:{
  addNewContact(){
    this.$emit('add-contact',this.name,this.phone,this.email);
  }
}
}
</script>
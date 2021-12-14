<template>
<li>
  <h2>{{ name }}</h2>
  <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{phoneNumber}}</li>
    <li><strong>Email:</strong>{{email}}</li>
  </ul>
</li>
</template>
<script>
export default {
  props:[
    'name',
    'phoneNumber',
    'email'
  ],
data(){
  return{
    detailsAreVisible:false,
    friend:
      {
        id:'Manuel',
        name:'Manuel Lorenz',
        phone:'0123 45658 90',
        email:'manuel@gmail.com'

      }
  }
},
methods:{
  toggleDetails(){
    this.detailsAreVisible=!this.detailsAreVisible;
  }
}
};
</script>
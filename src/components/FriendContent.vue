<template>
<li>
  <h2>{{ name }}{{ favorite?' is favorite':''}}</h2>
  <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{phoneNumber}}</li>
    <li><strong>Email:</strong>{{email}}</li>
  </ul>
</li>
</template>
<script>
export default {
 /* props:[
    'name',
    'phoneNumber',
    'email'
  ],*/
  props:{
    name:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:String,
      required: true
    },
    email:{
      type:String,
      required:true
    },
    isFavorite:{
      type:Boolean,
      default:false
    }

  },
data(){
  return{
    detailsAreVisible:false,
    favorite:this.isFavorite

  }
},
methods:{
  toggleDetails(){
    this.detailsAreVisible=!this.detailsAreVisible;
  }
}
};
</script>
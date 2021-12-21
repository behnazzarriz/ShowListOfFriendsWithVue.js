<template>
<li>
  <h2>{{ name }}{{ isFavorite?' is favorite':''}}</h2>
  <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
  <br>
  <br>
  <button @click="toggleFavorite">{{isFavorite ? 'Hide' : 'Show' }} Toggle Favorite</button>
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
    id:{
      type:String,
      required:true
    },
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


  }
},
methods:{
  toggleDetails(){
    this.detailsAreVisible=!this.detailsAreVisible;
  },
  toggleFavorite(){
   this.$emit('toggle-favorite',this.id);
  }
}
};
</script>
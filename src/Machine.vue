<template>
  <div >
    <h1> Machine {{name}}</h1>
    <h3 :class="{green:status}" v-if="status"> Status OK </h3>
    <h3 :class="{red:!status}" v-else> Status KO </h3>
    <h5> Last time checked : {{checkedAt}} </h5>  
    
 
  </div>
</template>

<script>
	export default {
  props : ['name', 'status','checkedAt'],
  name: 'machine',
  // data () {
  //   return {
   // name : 'What else ?',
   // status : false,
   // checkedAt : new Date().toLocaleString(),     
  //   }
  // }
}

</script>

<style> 

.red{
	color : red;
}

.green {
	color : green;
}
</style>
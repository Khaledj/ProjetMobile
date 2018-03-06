<template>
	<div>
		<br>
		<h1>Liste des machines</h1>
		<br>
		<machine v-for="machine in machines" 
		v-bind:name='machine.name' 
		:status="machine.status" 
		:checkedAt="machine.checkedAt"></machine>
    
	</div>
</template>

<script>
import Machine from './Machine.vue';

export default {
    components:{Machine},
	name: 'liste',
	data () {
		return {
			machines: [{
				id: 1,
				name : 'What else?',
				status : true,
				checkedAt : new Date().toLocaleString(),
			}, {
				id: 2,
				name: 'Broken',
				status : false,
				checkedAt : new Date(),
			}]

			  }		  
				
		   }
}


</script>

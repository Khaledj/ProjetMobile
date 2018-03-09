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
import Machine from './Machine';
import axios from 'axios'
export default {
    components:{Machine},
	name: 'liste',
	data () {
		return {
			machines:[],
			loading:false,
			error:null
		}
	},
	created() {
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.machines = response.data
    })
    .catch(e => {
      this.error.push(e)
    })
}

			// machines: [{
			// 	id: 1,
			// 	name : 'What else?',
			// 	status : true,
			// 	checkedAt : new Date().toLocaleString(),
			// }, {
			// 	id: 2,
			// 	name: 'Broken',
			// 	status : false,
			// 	checkedAt : new Date(),
			// }]

			//   }		  
				
		 //   }


}
</script>

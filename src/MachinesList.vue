<template>
	<div >

		<h1>Liste des machines</h1>
		<machine v-bind:name='machines.name' :status="machines.status" :checkedAt="machines.checkedAt"></machine>

	</div>
</template>

<script>
import Machine from './Machine.vue';

export default {
    components:{Machine},
	name: 'liste',
	data () {
		return {
			machines: {
				name : 'What else?',
				status : true,
				checkedAt : new Date().toLocaleString(),

					  }
				}
			}

}


</script>
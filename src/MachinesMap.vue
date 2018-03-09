<template>
  <div >
    <h1> Carte des machines </h1>

    <gmap-map 
  
  :center="{lat:10, lng:10}"
  :zoom="7"
  style="width: 100%; height: 800px"
>

<gmap-marker 
:key="marker.id"
v-for="marker in markers"
:position="{lat: Number(marker.latitude), lng: Number(marker.longitude)}"
>
</gmap-marker>
</gmap-map>
</div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'carte',
  data () {
  	return {
  		markers:[],
  		loading:true,
		error:null
// markers: [{
// 				id: 1,
// 				latitude : 10,
// 				longitude : 10,
				
// 			}, {
// 				id: 2,
// 				latitude: 11,
// 				longitude : 9.6,
				
// 			}]
  	        }
         },
         created() {
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.markers = response.data
    })
    .catch(e => {
      this.error.push(e)
    })
}


}	

</script>

    
	
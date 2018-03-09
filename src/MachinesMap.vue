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
:position="{lat: marker.latitude, lng: marker.longitude}"
>
</gmap-marker>
</gmap-map>
</div>

</template>

<script>

export default {
  name: 'carte',
  data () {
  	return {
markers: [{
				id: 1,
				latitude : 10,
				longitude : 10,
				
			}, {
				id: 2,
				latitude: 11,
				longitude : 9.6,
				
			}]
  	        }
         }

}	

</script>

    
	
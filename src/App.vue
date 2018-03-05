<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <button v-on:click="onMachinesListClick" type="button" class="btn btn-success"> Consulter la liste des machines</button>

    <button v-on:click="onMapClick" type="button" class="btn btn-success"> Voir la carte</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Que voulez-vous faire ?',
      
    }
  },
  methods : {
  onMachinesListClick : function() {
    window.alert("L'utilisateur à cliquer sur consulter la liste des machines");
  },
  onMapClick : function() {
    window.alert("L'utilisateur à cliquer sur voir la carte");
  }
}

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

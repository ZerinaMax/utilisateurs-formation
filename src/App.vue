<template>
  <nav>
    <img alt="Vue logo" src="logo-Id-Formation.png">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/utilisateurs">Utilisateurs</router-link> |
    <router-link to="/ajouter">Ajouter</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
    components: {
    },
    data: function (){
      return {
        data:[],
        dataListe:{},
      }
    },
    beforeMount () {
    fetch ('https://jsonplaceholder.typicode.com/users') 
    .then (response => response.json ())
    .then(json => {
      this.data=json;
            console.log(this.data)
            this.$store.commit("DATA_UPDATE", this.data);
    })
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

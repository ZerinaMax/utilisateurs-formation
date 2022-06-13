<template>
  <nav>
    <img alt="Vue logo" src="logo-Id-Formation.png">
    <div>
    <router-link to="/">Accueil</router-link> 
    <router-link to="/utilisateurs">Utilisateurs</router-link> 
    <router-link to="/ajouter">Ajouter</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  beforeMount() { 
    const headers = {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin" : "*"
    }
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
      this.data = json ;
      this.$store.commit("setColumns", Object.keys(this.data[0]));
      this.allColumns = Object.keys(this.data[0]);
      this.$store.commit("setUsers", this.data);
      })
    }
}
</script>

<style scoped>
img {
  width: 10%;
  border-radius: 20%;
  box-shadow: 10px 10px 5px  black;
}

nav {
  padding: 30px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  background: grey;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
	padding: 1rem 1.5rem;
	background-color: rgb(197, 197, 238);
	border-radius: 0.5rem;
	box-shadow: 5px 5px 5px whitesmoke;
	margin-bottom: 1.5rem;
}

nav a.router-link-exact-active {
  color: #fbc522;
}
</style>

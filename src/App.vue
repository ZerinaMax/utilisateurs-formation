<template>
  <body>
  <nav>
      <img alt="logo" src="logo-Id-Formation.png">
      <div class="liens-router">
        <router-link to="/">Accueil</router-link> 
        <router-link to="/utilisateurs">Utilisateurs</router-link> 
        <router-link to="/ajouter">Ajouter</router-link>
      </div>
    </nav>
  <router-view/>
  </body>
  <footer>
    <div class="footer">
      © 2022-Zerina Maxhuni
      <div>
      ID Formation Strasbourg
      </div>
    </div>
  </footer>
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
      // this.allUsers= Object.keys(this.data[0]);
      })
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1061px) {
*::before, *::after {     
  box-sizing: border-box;     
  margin: 0;      
  padding: 0;     
}

img {
  width: 10%;
  border-radius: 20%;
  box-shadow: 10px 10px 5px  black;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background: #7C8D5B;
}

a {
  display: flex;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
	background-color: #4E7B7F;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 5px whitesmoke;
  padding: 1.5rem;
}

nav a.router-link-exact-active {
  color: #fbc522;
}

.liens-router {
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  align-items: center;
}

footer{
    background: #7C8D5B;
    text-align: center;
    margin-top: 2rem;
    height: 2.5rem;
}
}

@media only screen and (max-width: 1060px){
*::before, *::after {     
  box-sizing: border-box;     
  margin: 0;      
  padding: 0;     
}

img {
  width: 10%;
  border-radius: 20%;
  box-shadow: 10px 10px 5px  black;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background: #7C8D5B;
}

a {
  display: flex;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
	background-color: #4E7B7F;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 5px whitesmoke;
  padding: 1.5rem;
}

nav a.router-link-exact-active {
  color: #fbc522;
}

.liens-router {
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  align-items: center;
}

footer{
    background: #7C8D5B;
    text-align: center;
    margin-top: 1rem;
    height: 1.5rem;
}
}
</style>

<template>
<div class="bonjour">
  <div class="hello">
    <h1>Bienvenue sur l'interface de gestion des utilisateurs</h1>
  </div>
  <img src="images-tete.png" alt="image" class="image-tetes">
</div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
@media only screen and (min-width: 1061px) {
.bonjour {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5rem;
  width: 50%;
  justify-content: center;
}

.hello {
  justify-content: center;
}

h1 {
  border-radius: 1rem;
  background-color: #4E7B7F;
  text-align: center;
  padding: 0.5rem;
}

.image-tetes {
  width: 65rem;
  border-radius: 2rem;
  padding: 1rem;
}
}

@media only screen and (max-width: 1060px){

}
</style>

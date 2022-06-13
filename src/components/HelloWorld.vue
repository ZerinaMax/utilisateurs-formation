<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <img src="images-tete.png" alt="image">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
    width: 30%;
    height: auto;
    border-radius: 1rem;
    background-color: #7C8D5B;
    margin: auto;
    text-align: center;
}
h3 {
  margin: 40px 0 0;
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
h1 {
  font-display: ;
}
img {
  margin: auto;
  width: 20rem;
}
</style>

<template>
  <div class="about">
    <h1>Liste des utilisateurs</h1>
    <div>
      <table id="liste-utilisateurs">
        <!-- {{this.$store.state.data}} -->
      </table>
      <thead>
        <tr>
          <th v-for="(column,index) in columns" :key="index">
            {{column.toUpperCase()}}
          </th>
          <th>
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
              <!-- <td v-for="(object, name) in this.$store.state.data" :key="name">
        {{object.name}}
      </td> -->
      <!-- <tr v-for="(object,data) in this.$store.data" :key="data">
        {{data.object}}
      </tr> -->
      <tr v-for="(data, index) in dataList" :key="index" v-bind:id="data.id">

      </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import Modifier from '@/components/Modifier.vue'

export default {
  name: 'UtilisateursView',
  components: {
    Modifier
  }
}
</script>

<style scoped>

</style>

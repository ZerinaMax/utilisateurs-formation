<template>
  <Utilisateurs/>
</template>

<script>
import ModifierView from '@/views/ModifierView.vue'
import Utilisateurs from '@/components/Utilisateurs.vue'

export default {
  name: 'UtilisateursView',
  components: {
    Utilisateurs, 
    ModifierView,
  },
}
</script>

<style scoped>
</style>

<template>
    <!-- <router-link :to="{ name: 'modifyUser', params: { id: user.id} }">
    </router-link> -->
    <div class="formulaire">
        <h2>Ajouter un utilisateur</h2>
        <form action="valider" class="valider" @submit.prevent="addEntry">
            <label class="nouvel-utilisateur" v-for="column in allColumns">
                {{column.toUpperCase()}}

                <input type="text" name="" id="input_formulaire"/>
            </label>    
            <input type="button" @click="addEntry" value="valider" id="bouton_valider"/>
        </form>
    </div>
</template>

<script>
import inputAsObjectMixin from '@/mixins/inputAsObjectMixin';
export default {
    name: 'AjouterView',
    data: function (){
    return {
    data:{},
    allColumns: [],
    allUsers: {}
    }
    },
    mixins: [inputAsObjectMixin],
    beforeMount () {
    this.allColumns=this.$store.state.columns;
    this.allUsers=this.$store.state.users;
    }
}
</script>

<style scoped>
.formulaire {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-self: center;
}
h2 {
    background-color: #4E7B7F;
    border-radius: 15px;
    text-align: center;
}
.valider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(195, 194, 194);
    border-radius: 15px;
}
.nouvel-utilisateur {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    text-align: center;
}
#bouton-valider {
    width: 30%;
    height: 40px;
    margin-top: 2rem;
    background-color: #7C8D5B;
    border-radius: 15px;
    align-self: center;
}
#input-formulaire {
    width: 40%;
    align-self: center;
    height: auto;
}
label:first-child {
    display: none;
}
</style>
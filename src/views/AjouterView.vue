<template>
    <div class="formulaire">
        <h2>Ajouter un utilisateur</h2>
        <form id="addUser" action="ajouter" class="valider" method="post">
            <label for="newUser" class="nouvel-utilisateur" v-for="column in allColumns">
                {{column.toUpperCase()}}
                <input type="text" id="input_formulaire" v-model="text"> 
            </label> 
            <router-link :to="{name: 'utilisateurs'}">
                <input type="button" @submit.preventDefault="addUser" value="valider" id="bouton_valider">
            </router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: 'AjouterView',
    data: function (){
    return {
    data:{},
    allColumns: [],
    allUsers: {},
    }
    },
    beforeMount () {
    this.allColumns=this.$store.state.columns;
    this.allUsers=this.$store.state.users;
    },
    methods: {
        addUser(user) {
        this.$store.push('addUSer', user);
        }
    }
}
</script>

<style scoped>
.formulaire {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
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
#bouton-valider:hover {
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
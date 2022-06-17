<template>
    <div class="formulaire">
        <h2>Ajouter un utilisateur</h2>
        <form id="addUser" action="ajouter" class="valider" method="post">
            <label for="newUser" class="nouvel-utilisateur" v-for="column in allColumns" :key="column">
                {{column.toUpperCase()}}
                <input type="text" id="input_formulaire" v-model="newUser[column]"> 
            </label> 
            <router-link :to="{name: 'utilisateurs'}">
                <input type="button" @click="addUser()" value="Valider" id="bouton_valider">
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AjouterView',
    data: function (){
    return {
    newUserInputs: [],
    newUser: {id:this.$store.state.counter},
    newUserDatas: {}
    }
    },
    // mounted(){
    //     if(this.$store.state.user) {
    //         this.user=JSON.parse(this.$store.state.user)
    //     }
    // },
    // watch: {
    //     user: {
    //         handler(addUser) {
    //         this.$store.state.user = JSON.stringify(addUser)
    //         },
    //         deep: true
    //     }
    // },
    beforeMount () {
        this.allColumns=this.$store.state.columns;
        this.allUsers=this.$store.state.users;
    },
    methods: {
        addUser() {
            this.$store.commit('addUser', this.newUser);
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1061px) {
.formulaire {
    display: flex;
    flex-direction: column;
    width: 60%;
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
    text-align: center;
}

#bouton_valider {
    width: 30%;
    height: 40px;
    margin-top: 2rem;
    background-color: #7C8D5B;
    border-radius: 15px;
}

#input-formulaire {
    align-self: center;
    height: auto;
}

label:first-child {
    display: none;
}
}

@media only screen and (max-width: 1060px){
.formulaire {
    display: flex;
    flex-direction: column;
}

h2 {
    background-color: #4E7B7F;
    border-radius: 15px;
    text-align: center;
}

.valider {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 15px;
}

.nouvel-utilisateur {
    display: flex;
    flex-direction: column;
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
}
</style>
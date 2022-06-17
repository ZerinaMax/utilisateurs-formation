<template>
    <body>
        <div class="utilisateurs">
            <h1>Liste des utilisateurs</h1>
            <div>
                <table id="liste_utilisateurs">
                    <caption></caption>
                    <thead>
                        <tr>
                            <th v-for="column in allColumns" id="entry">
                            {{column.toUpperCase()}}
                            </th>
                            <th>
                            ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in allUsers" :key="index" v-bind="user.id">
                            <td v-for="(info, key, index) in user" :key="index">
                                {{key === 'address' ? info.city : key === 'company' ? info.name : info}}
                            </td>
                            <td>
                                <input type="button" value="Supprimer" class="button-supprimer" @click="afficherModal(user.id, user.username)">
                                <router-link :to="{ name: 'modifier', params: { id: user.id, currentUser: user.username } }"> 
                                    <button>Modifier</button>
                                    <Teleport to="body">
                                        <modal :show="showModal" :userId="activeUserId" :userName="activeUserName" @cancel="showModal = false" @confirm="supprimerLigne">
                                        </modal>
                                    </Teleport>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    name: 'UtilisateursView',
    components: {
        Modal
    },
    data: function (){
    return {
        data:{},
        allColumns: [],
        allUsers: [],
        showModal: false,
        activeUserId: 0,
        activeUserName: ""
    }
    },
    methods:{
        afficherModal: function (userId, usernameUser) {
        this.activeUserId = userId;
        this.activeUserName = usernameUser;
        this.showModal = true;
    },
        supprimerLigne(idUser) {
        this.$store.commit('deleteUser', idUser);
        this.showModal=false;
        }
    },
        beforeMount () {
        this.allColumns=this.$store.state.columns;
        this.allUsers=this.$store.state.users;
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1061px) {
body{
    overflow: hidden;
}

.utilisateurs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
}

h1 {
    width: 30%;
    height: auto;
    border-radius: 1rem;
    background-color: #4E7B7F;
    margin: auto;
    padding: auto;
    text-align: center;
}

table {
    padding: 3rem;
}

thead, th, td {
    border: 1px solid black;
    padding: 10px;
}

th {
    background-color: #7C8D5B;
}

tr:nth-child(even){
    background-color: #7C8D5B;
}

button {
    color:black ;
    background-color: antiquewhite ;
    width: auto;
    border-radius: 15px;
    text-decoration: none;
}

.button-supprimer {
    color: black;
    background-color: yellowgreen;
    border-radius: 35px;
    margin-top: 5px;
}

button default-button:hover {
    color: white;
    background-color: #4e7b7f;
    box-shadow: black 1.95px 1.95px 2.6px;
}
}

@media only screen and (max-width: 1060px){
    body{
    overflow: hidden;
}

.utilisateurs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
}

h1 {
    width: 30%;
    height: auto;
    border-radius: 1rem;
    background-color: #4E7B7F;
    margin: auto;
    padding: auto;
    text-align: center;
}

table {
    padding: 3rem;
}

thead, th, td {
    border: 1px solid black;
    padding: 10px;
}

th {
    background-color: #7C8D5B;
}

tr:nth-child(even){
    background-color: #7C8D5B;
}

button {
    color:black ;
    background-color: antiquewhite ;
    width: auto;
    border-radius: 15px;
    text-decoration: none;
}

.button-supprimer {
    color: black;
    background-color: yellowgreen;
    border-radius: 35px;
    margin-top: 5px;
}

button default-button:hover {
    color: white;
    background-color: #4e7b7f;
    box-shadow: black 1.95px 1.95px 2.6px;
}
}
</style>

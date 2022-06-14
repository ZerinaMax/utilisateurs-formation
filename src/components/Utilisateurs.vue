<template>
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
                <tr v-for="(users, index) in allUsers" :key="index" v-bind="users.id">
                    <td v-for="(user, key, index) in users" :key="index">
                        {{key === 'address' ? user.city : key === 'company' ? user.name : user}}
                    </td>
                    <td>
                        <input type="button" value="Supprimer" class="button-supprimer" @click="afficherModal(user.id, user.username)">
                        <router-link :to="{ name: 'ModifierView', params: { id: users.id, currentUser: users.username } }"> 
                            <span>Modifier</span>
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
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    name: 'Utilisateurs',
    data: function (){
    return {
        data:{},
        allColumns: [],
        allUsers: {},
        showModal: false,
        activeUserId: 0,
        activeUserName: ""
    }
    },
    components: {
        Modal
    },
    methods:{
        afficherModal: function (userId, usernameUser) {
        this.activeUserId = userId;
        this.activeUserName = usernameUser;
        this.showModal = true;
    }
    },
    beforeMount () {
    this.allColumns=this.$store.state.columns;
    this.allUsers=this.$store.state.users;
    }
    }
</script>

<style scoped>
body{
    margin: 0px;
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
.button-modifier {
    color:black ;
    background-color: antiquewhite ;
    border-radius: 35px;
}
.button-supprime {
    color: black;
    background-color: yellowgreen;
    border-radius: 35px;
    margin-top: 5px;
}
</style>
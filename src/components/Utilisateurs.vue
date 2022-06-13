<template>
    <div class="about">
<h1>Liste des utilisateurs</h1>
<div>
    <table id="liste-utilisateurs">
    </table>
    <thead>
    <tr>
        <th v-for="column in allColumns">
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
    </tr>
    </tbody>
</div>
</div>
</template>

<script>
export default {
    name: 'Utilisateurs',
    data: function (){
    return {
    data:{},
    allColumns: [],
    allUsers: {}
    }
    },
    beforeMount () {
    this.allColumns=this.$store.state.columns;
    this.allUsers=this.$store.state.users;
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
    padding: auto;
    text-align: center;
}
thead, th, td {
    border: 1px solid black;
    padding: 10px;
    margin: auto;
}
th {
    background-color: #7C8D5B;
}
tr:nth-child(even){
    background-color: #7C8D5B;
}
</style>
<template>
    <h2>
        Modification de l'utilisateur {{currentUser}}
    </h2>
    <form>
        <div>
            <label v-for="(key,info) in userDatas" :key="info">
                    <span>{{info.toUpperCase()}}</span>
                <input type="text" v-bind:value="info"> 
            </label>   
            <input type="button" value="Modifier" id="bouton_valider">
        </div>
    </form>
</template>

<script>

export default {
    name: "ModifierView",
    data: function (){
    return {
    data:{},
    allColumns: [],
    allUsers: {},
    activeUserId: 0,
    activeUserName: ""
    }
    },
    props: ["id","currentUser"],
    beforeMount () {
        this.userDatas=
        this.$store.state.users
        this.$store.state.users.findIndex((v)=>v.id == this.id)
        // state.users.splice(state.users.findIndex(user => user.id == id), 1);
    }
}
</script>

<style scoped>
h2{
    background-color: #4E7B7F;
    border-radius: 15px;
    text-align: center;
    width: 50%;
    margin: auto;
}
div{
    display: flex;
    flex-direction: column;
    margin: 2rem;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(195, 194, 194);
    border-radius: 15px;
    width: 50%;
    margin: auto;
}
label {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    text-align: center;
}
</style>
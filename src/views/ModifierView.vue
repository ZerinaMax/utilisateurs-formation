<template>
    <h2>
        Modification de l'utilisateur {{currentUser}}
    </h2>
    <form>
        <div>
            <label v-for="(key,info) in userDatas" :key="info" v-bind:for="info">
                <span>{{info.toUpperCase()}}</span>
                <div v-if="info==='id'">
                <input type="text"  v-bind:id="info" disabled v-bind:value="info">
                </div>
                <div v-else-if="info==='address'"> 
                    <textarea v-bind:id="info">
                    </textarea>
                </div>
                <div v-else-if="info==='company'">
                    <textarea v-bind:id="info">
                    </textarea>
                </div>
                <div v-else>
                    <input type="text" v-bind:id="info" v-bind:value="key">
                </div> 
            </label>   
            <router-link :to="{name: 'utilisateurs'}">
                <button class="bouton-modifier" @click="modifyUser(user)">Valider</button>
            </router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: "ModifierView",
    el: '.app',
    data: function (){
        return {
        user: "",
        data:{},
        userDatas: {}
        }
    },
    methods:{
        modifyUser() {
            this.$store.commit('updateInfo',this.userDatas)
        }
    },
    props: ["id","currentUser"],
    beforeMount () {
        this.userDatas=this.$store.state.users[ this.$store.state.users.findIndex((v)=>v.id == this.id)]
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1061px) {
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
    .bouton-modifier{
        color: white;
        background-color: #4e7b7f;
        border-radius: 35px;
        box-shadow: black 1.95px 1.95px 2.6px;
        align-items: center;
    }
}

@media only screen and (max-width: 1060px){
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
    .bouton-modifier{ 
        color: white;
        background-color: #4e7b7f;
        border-radius: 35px;
        box-shadow: black 1.95px 1.95px 2.6px;
        align-items: center;
    }
}
</style>
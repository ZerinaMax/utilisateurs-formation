export default {
    methods: {
        inputAsObject(column) {
            return 
            Object.fromEntries(entriesFromInput);
        },
        addUser: (user) => {
            this.users.push(user)
        }
    }
}
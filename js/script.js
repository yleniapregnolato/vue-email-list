const { createApp } = Vue

createApp({
    data() {
        return {
            emailsArray: [],
            emails: "",
            isLoading: false
        };
    },
    // created() {
    //     this.generateEmail()
    // },
    methods: {
        generateEmail: function () {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                    // console.log("random email", email.data.response);
                    this.emails = email.data.response;
                    this.emailsArray.push(this.emails);                
                    this.isLoading = false;
                })
            }
            this.emailsArray = [];
        }

    },
}).mount('#app')
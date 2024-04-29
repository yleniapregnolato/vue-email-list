const { createApp } = Vue

createApp({
    data() {
        return {
            emailsArray: [],
            emails: ""
        };
    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
            console.log(email);
            this.emails = email.data.response
        });
    },
    methods: {
        generateEmail: function () {                
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                    // console.log("random email", email.data.response);
                    this.emails = email.data.response;
                    this.emailsArray.push(this.emails);
                })
            }

        },
}).mount('#app')
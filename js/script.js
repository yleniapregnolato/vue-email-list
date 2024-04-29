const { createApp } = Vue

createApp({
    data() {
        return {
            emailsArray: [],
            isLoading: false
        };
    },
    // created() {
    //     this.generateEmail()
    // },
    methods: {
        generateEmail: function () {
            this.isLoading = true;
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    console.log("random email", resp.data.response);
                    const email = resp.data.response;
                    this.emailsArray.push(email);

                    if (this.emailsArray.length == 10) {
                        this.isLoading = false;
                    }             
                })
            }
            this.emailsArray = [];
        }

    },
}).mount('#app')
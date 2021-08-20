<template>
    <div>

        <button @click="loginToGame">Login</button>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

    export default {
        name: "LoginPage",
        methods: {
            loginToGame(){
                axios.request({
                    url: "https://reqres.in/",
                    method: "POST",
                     headers: {
                       'Content-Type': 'application/json', 
                    },
                    data: {
                        "email": "eve.holt@reqres.in",
                        "password": "cityslicka"
                    }
                }).then((response) => {
                    cookies.set ('loginToken', response.data.token);
                    console.log(response.data.token);
                }).catch ((error) => {
                    console.error("Something went wrong, pleae try login again"+error);
                })
            }
        }
    }
</script>

<style lang="postcss" scoped>

</style>
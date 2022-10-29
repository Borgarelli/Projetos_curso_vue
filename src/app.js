const MyNameApp = { //Para retornar um nome predefinido e uma idade
    data(){
        return{
            name: "Kauã",
            age: 19,
            input_name:""//Linkando o v-model com o data, semrpe que um usuário digitar um nome no formulário, sera armazenado aqui

        }
    },
    methods: { //Onde armazena as funções da aplicação
        submitForm(e) {
            e.preventDefault();
        }

    }
}
Vue.createApp(MyNameApp).mount("#app");//Referenciando onde ela irá retornar os valores, no caso na div #app
const MyNameApp = { //Para retornar um nome predefinido e uma idade
    data(){
        return{
            name: "",
            age: 19,
            input_name:""//Linkando o v-model com o data, semrpe que um usuário digitar um nome no formulário, sera armazenado aqui

        }
    },
    methods: { //Onde armazena as funções da aplicação
        submitForm(e) {
            e.preventDefault(); //Um evento para evitar que o formulário seja enviado para o servidor

            console.log(this.input_name); //Evento para retornar no console o nome inserido pelo usuário

            this.name = this.input_name; //Aqui o Vue irá transformar o input de nome, no valor que o input_name recebe através do v-model utilizado dentro do input, exemplo: o name recebe um valor nulo de inicio, e o valor que input_name receber será atribuido a name pelo vue

        }

    }
}
Vue.createApp(MyNameApp).mount("#app");//Referenciando onde ela irá retornar os valores, no caso na div #app
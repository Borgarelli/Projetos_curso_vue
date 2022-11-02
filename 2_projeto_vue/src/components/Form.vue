<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit="enviarFormulario($event)"> <!--Atribuindo um evento ao formulário de quando ele enviar algum valor dentro dos inputs, ele recarregar a página por padrão, porém com esse $event atual, definido dentro do methods ele impede de cumprir esse evento, não tendo um reload na página, mas ainda recebendo um valor quando é feio o submit, porém só pode ser visto atráves do console-->
            <div> <!--Só para quebrar linha-->
                <!--<InputText /> retirado parra a aula de eventos-->
                <input type="text" v-model="name"> <!--Esse input está conectado diretamente com o data, que vai armazenar os valores ali-->
            </div>

            <div>
                <!--<InputText /> Aqui ele está fazendo duas requisições, porém o Vue enxerga como valores diferentes -->
                <input type="email" v-model="email">
            </div>

            <div>
                <Submit />
            </div>
        </form>
        <p>Conteudo</p> <!--Só para espaçamento-->
    </div>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                name: '',
                email:''
            }
        },
        methods: {
            enviarFormulario(e) {

                e.preventDefault(); //Evento que previne que o site tenha um reload quando enviado os valores inseridos no formulário

                const name = this.name; //Aqui vai pegar os dados armazenados dentro do data e definilos como os valores inseridos
                const email = this.email;

                console.log("Formulário Enviado");
                console.log("O nome é: " + name); //Aqui vai imprimilos dentro do console
                console.log("O email é: " + email);

                // Ajax em um projeto real, aqui seria feito uma requisição em Ajax para tratar os dados inseridos nos formulários

                // Inserir no banco os dados / E aqui seria feito a requisição para armazenar esses dados dentro de um banco
            }
        }
    }
</script>

<style scoped>
    p{
        margin: 50px;
    }
</style>
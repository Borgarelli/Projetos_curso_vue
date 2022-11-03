<template>
    <div>
        <h2>Essa é uma descrição da Pessoa: {{nome}}</h2>
        <!--<Info  email="borgarellitavares@gmail.com"/> Exemplo da utilização do Props, enviando essa informação para o parametro de compEmail dentro de Info.vue-->
        <Info :email="email" :esta_trabalhando=false /> <!--Passando dados de forma dinamica, utilizando props com v-bind, primeiro ele pega o dado armazenado em data e envia para Info e o armazena dentro do props, e assim o Info.vue vai utilizar em todas as referencias de email, o email definido dentro de Pessoa-->
        <Form />
    </div>
</template>

<script>
import Info from './Info.vue'; //Aqui não precisou referenciar a pasta components, pois ele já está na mesma pasta que Pessoa.vue
import Form from './Form.vue';
    export default {
        name: 'Pessoa', //Componente criado para implementação da Hierarquia de components, ele usa como base informações de outros 2 components, que por eles também utilizam outros componentes como base para suas informações, formando uma verdadeira arvore
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome:'Kauã',
                email:'Borgarellitavares@outlook.com'
            }
        }
    }
</script>
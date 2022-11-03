<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contatos</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li> <!--Exemplo de utilização de props em formato array, com um v-if dando a condição que só vai mostrar esse elemento da lista, caso o parametro boleano passado em app.vue seja true-->
        <li v-else="esta_logado"><a href="#">Faça Login</a></li> <!-- Caso o parametro enviado pelo App.vue seja enviado como false, esse será o 4º elemento da lista-->
    </ul>
</template>

<script>
    export default {
        name:'Header',
        props: ["esta_logado"] //Exemplo de props estilo array, ao invés de objeto como props comum é utilizado

        
    }
</script>

<style scoped> /*Exemplo do estilo scoped, que altera de forma individual um component, além de apenas alterando ele mesmo acaba salvando-o de alterações feitas no estilo global */
    ul {
        list-style: none;
        display: flex;
        background-color: #999;       
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #ddd;
        text-decoration: none;
        transition: .5;
    }

    a:hover{
        color: turquoise;
    }
</style>
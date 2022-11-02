<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contatos</a></li>
    </ul>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {

            }
        }
        
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
<template>
    <div>
        <p v-if="esta_trabalhando">No momento eu estou trabalhando</p> <!--Aqui ele introduz a condicional utilizando prorpio do Vue, o v-if, caso o parametro esteja defindo como true, a mensagem ira retornar na tela, caso esteja defindo como falso, ele não ira retornar nada-->
        <p v-else>Estou em busca de novas oportunidades</p><!--Mensagem padrão que irá retornar quando a condição do v-if não for cumprida, detalhe: v-else sempre tem que estar abaixo do v-if para funcionar-->
        <p>Utilizo as seguintes tecnologias: </p>
        <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Vue</li>
            <li>JavaScript</li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para esse email {{email}}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p><!--v-bind é o responsavel por conseguir mudar o link para o parametro definido no data, conseguindo fazer conexão dos 2-->
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue';
    export default {
        name: 'Info',
        components: {
            Picture
        },
        data() {
            return {              
                esta_trabalhando: false, //Cria o parametro de que caso seja true ele irá retornar a mensagem, e caso seja falso não retorna mensagem nenhuma
                mostrar_email: true,
                email:'borgarelli@outlook.com',
                meu_link: 'https://google.com'
            }
        }
    }
</script>
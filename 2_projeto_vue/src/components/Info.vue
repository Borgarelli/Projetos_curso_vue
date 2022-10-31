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
        <div>
            <button @click="showEmail">{{texto_button}}</button><!--O @click está prrporcionado um evento para o button, sendo referenciado pelo metodo passado dentro do export default como objeto methods-->
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para esse email {{email}}</p><!--Cria como se fosse uma requisição estilo v-if e else, porém o v-show apenas mostra caso seja uma condição true, caso seja false ela não retorna nada-->
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
                mostrar_email: false, //Alterado para false para mostrar o funcionamento do metodo criado para mostrar o paragrafo com o email
                email: 'borgarelli@outlook.com',
                meu_link: 'https://google.com',
                texto_button: 'Mostrar e-mail'
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email //Cria o metodo para quando o usuário clicar no botão, ele mostre a mensagem que contém o email, e quando ele clicar denovo ele esconda o paragrafo com o email
                if(!this.mostrar_email) { //Caso mostrar email esteja definido como false ele irá trocar o texto do botão para Mostrar emial, caso esteja como verdadeiro ele mostra a mensagem de esconder, sincronizando com os eventos do botão
                    this.texto_button = 'Mostrar e-mail'
                } else {
                    this.texto_button = 'Esconder e-mail'
                }
            }
        }
    }
</script>
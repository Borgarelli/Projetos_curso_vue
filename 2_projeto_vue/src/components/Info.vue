<template>
    <div>
        <!-- <p>{{compEmail}} - {{email}}</p> Exemplo utilizado para passar o dado de Pessao.vue pelo Props -->
        <p v-if="esta_trabalhando">No momento eu estou trabalhando</p> <!--Aqui ele introduz a condicional utilizando um componente proprio do Vue, o v-if, caso o parametro esteja definido como true, a mensagem ira retornar na tela, caso esteja definido como falso, ele não ira retornar nada-->
        <p v-else>Estou em busca de novas oportunidades</p> <!--Mensagem que irá retornar quando a condição do v-if não for cumprida, detalhe: v-else sempre tem que estar abaixo do v-if para funcionar-->
        <p>Utilizo as seguintes tecnologias para front-end: </p>
        <ul> 
            <li v-for="(technology, index) in frontend_technologies" v-bind:key="index">
                {{technology}}
            </li> <!--Implementando o v-for, primeiro dando a condição do technology como se fosse uma string de referencia, e assim utilizando-o para imprimir o array (lista) definida dentro do data -->   
            <!--O v-for por padrão ele irá repetir o elemento pai de acordo com o número de elementos definidos dentro do array. Ele funciona, porém gera um erro de semantica que é necessário como se fosse inserir um id proprio para repetição, para consertar esse erro é necessário criar um v-bind:key dentro da tag para armazenar esse id, e para gerar esse id é bem simples, basta abrir um () onde ele define a condição, no caso desse exemplo é o technology e colocar um index, no caso vai ficar 
v-for ="(technology, index) in frontend_technology" v-bind:key="index"-->
        </ul>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <li v-for="technology in backend_technologies" :key="technology.id"> <!--Aqui não precisa do index, pois como ela é um array de objeto ela ja vem definida com uma chave propria para cada repetição, então é só puxar através do technology.id-->
            {{technology.language}} <!--Aqui para retornar apenas a linguagem defindia no array na tela-->
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{texto_button}}</button> <!--O @click está proporcionado um evento para o button, sendo referenciado pelo método passado dentro do export default como objeto no methods-->
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para esse email {{email}}</p> <!--Cria como se fosse uma requisição estilo v-if e else, porém o v-show apenas mostra caso seja uma condição true, caso seja false ela não retorna nada-->
        <p class="teste">Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p> <!--v-bind é o responsavel por conseguir mudar o link para o parametro definido no data, conseguindo fazer conexão dos 2-->
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
        props: { //Aqui recebe todas as informações enviadas de forma hardcode pelo Pessoa.vue
            email: String, //Foi necessário criar essa "chave" para armazenar o dado enviado e assim, podendo ser referenciada lá emcima como se fosse um parametro passado dentro do data
            esta_trabalhando: Boolean // Nova chave para receber o valor Boolean de dentro de Pessoa.vue, por ser um valor boleano ele não precisou ser refernciado dentro de data no Pessoa.vue, apenas ja definindo se era true ou false dentro da importação de Info.vue
        },
        data() {
            return {              
              
                // esta_trabalhando: false, Comitado pela aula de props // Cria o parametro de que caso seja true ele irá retornar a mensagem, e caso seja falso não retorna mensagem nenhuma, sendo chamado no primeiro parágrafo
                mostrar_email: false, //Alterado para false para mostrar o funcionamento do metodo criado para mostrar o paragrafo com o email
                // email: 'borgarelli@outlook.com', Comitado pela aula de Props
                meu_link: 'https://google.com',
                texto_button: 'Mostrar e-mail',
                frontend_technologies: ['Html', 'CSS', 'Vue'], //Criando um array de formato simples
                backend_technologies: [ //Trazendo mais um Array porém em formato de objetos, para caso seja uma lista com mais complexidade
                    {id: 1, language: 'Python'},
                    {id: 2, language: 'Java'},
                    {id: 3, language: 'JavaScript' }
                ]
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email //Cria o metodo para quando o usuário clicar no botão, ele mostre a mensagem que contém o email na tela, e quando ele clicar denovo ele esconda o paragrafo com o email
                if(!this.mostrar_email) { //Caso mostrar email esteja definido como false ele irá trocar o texto do botão para Mostrar email, caso esteja como verdadeiro ele mostra a mensagem de esconder, sincronizando com os eventos do botão
                    this.texto_button = 'Mostrar e-mail'
                } else {
                    this.texto_button = 'Esconder e-mail'
                }
            }
        }
    }
</script>

<style> /*Outro exemplo de Css global, que atinge de forma global o App.vue, mesmto estando dois niveis abaixo na arvore hierarquica */
    .paragrafo-pai{
        color: red;
    }
</style>
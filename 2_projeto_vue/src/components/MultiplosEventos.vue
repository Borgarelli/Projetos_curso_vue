<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro(txt3, $event)">Ativar Multiplos Eventos</button> <!--Criou um evento que assim que o usuário clicar no botão ativa o metódo "Primeiro", que envia um valor para o data, e o metodo "Primeiro" pega esse valor e atribui uma mensagem a esse valor e assim imprime uma mensagem na tela-->
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
    export default {
        name:'MultiplosEventos',
        data() {
            return {
                multiplos_eventos: "",
                txt1: 'Primeiro evento',
                txt2: 'Segundo evento',
                
            }
        },
        methods: {
            primeiro(txt, e) {
                this.multiplos_eventos = txt;
            },
            segundo(txt, e) {
                setTimeout(() => {
                this.multiplos_eventos = txt}, 500); //Cria o segundo evento, que assim que o usuário clicar no botão e ativar o primeiro evento, depois de alguns segundo irá ativar o segundo, mudando a mensagem para a mensagem armazenada no data
        },
            terceiro(txt, e) {
                setTimeout(() => {
                    this.multiplos_eventos = ''}, 700); //terceiro evento para limpar a mensagem
            }
    }
}
</script>

<style scoped>
    div{
        margin:100px;
    }
</style>
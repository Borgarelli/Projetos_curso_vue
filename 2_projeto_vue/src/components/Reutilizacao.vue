<template>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">Ativado</span>
    </div>
</template>

<script>
    export default {
        name: 'Reutilizacao',
        data() {
            return {
                ativou: false
            }
        },
        methods: {
            ativar(e) {
                this.ativou = !this.ativou //Metódo utilizado para sempre mudar o valor armazenado: seja ele True ou false para um valor ao contrário, ou seja se o valor for false quando o usuário clicar no botão mudara o valor para true mostrando a mensagem de span.
            }
        }
    }
</script>
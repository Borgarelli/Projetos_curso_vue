<template>
    <div>
        <img :src="avatar" :alt="descricao"> <!--Esses : são o v-binde de forma resumida, gastando menos tempo na hora de defini-los-->
        <MudarImagem @mudar-Imagem="trocarImagem" /> <!--Aqui cria a requisição que conecta com o emmit criado dentro do MudarImagem, sendo necessário haver uma separação por um traço e depois referenciando com um metodo criado dentro do Picture-->
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';

    export default {
        name:'Picture',
        components: {
            MudarImagem
        },
        data() {
            return {
                avatar: '/img/avatar.png',
                descricao: 'kauã'
            }
        },
        methods: {
            trocarImagem() {
                this.avatar ='/img/avatar2.png'
            }
        }
    }
</script>
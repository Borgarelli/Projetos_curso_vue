<template>
    <div>
        <img :src="avatar" :alt="descricao"> <!--Esses : são o v-binde de forma resumida, gastando menos tempo na hora de defini-los-->
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';

    export default {
        name:'Picture',
        components: {
            Reutilizacao,
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
                this.avatar ="/img/avatar2.png"
            }
        }
    }
</script>
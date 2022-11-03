<template>
    <div>
        <img :src="avatar" :alt="descricao"> <!--Esses : são o v-binde de forma resumida, gastando menos tempo na hora de defini-los-->
        <Reutilizacao /> <!--Exeplo de reutilização-->
    </div>
</template>

<script>
import Reutilizacao from './Reutilizacao.vue';
    export default {
        name:'Picture',
        components: {
            Reutilizacao
        },
        data() {
            return {
                avatar: '/img/avatar.png',
                descricao: 'kauã'
            }
        }
    }
</script>
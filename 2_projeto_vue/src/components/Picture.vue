<template>
    <img :src="avatar" :alt="descricao"> <!--Esses : são o v-binde de forma resumida, gastando menos tempo na hora de defini-los-->
</template>

<script>
    export default {
        name:'Picture',
        data() {
            return {
                avatar: '/img/avatar.png',
                descricao: 'kauã'
            }
        }
    }
</script>
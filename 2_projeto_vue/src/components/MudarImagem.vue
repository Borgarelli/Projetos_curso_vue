<template>
    <div>
        <button @click="$emit('mudarImagem')">Clique aqui para mudar a imagem</button>
    </div>
</template>

<script>
    export default {
        name: 'MudarImagem',
        emits: ['mudarImagem']
    }
</script>

<template>
    <div>
        <button @click="$emit('mudarimagem')">Clique aqui para mudar a imagem</button>
    </div>
</template>

<script>
    export default {
        name: 'MudarImagem',
        emits: [
            'mudarimagem'
        ]
    }
</script>

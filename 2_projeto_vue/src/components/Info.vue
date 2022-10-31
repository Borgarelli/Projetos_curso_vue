<template>
    <div>
        <p>No momento eu sou um {{profissão}}</p>
        <p>Utilizo as seguintes tecnologias: </p>
        <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Vue</li>
            <li>JavaScript</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return {
                profissão: 'Aluno'
            }
        }
    }
</script>
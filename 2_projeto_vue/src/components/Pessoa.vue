<template>
    <div>
        <h2>Essa é uma descrição da Pessoa: {{nome}}</h2>
        <Info />
        <Form />
    </div>
</template>

<script>
import Info from './Info.vue'; //Aqui não precisou referenciar a pasta components, pois ele já está na mesma pasta que Pessoa.vue
import Form from './Form.vue';
    export default {
        name: 'Pessoa', //Componente criado para implementação da Hierarquia de components, ele usa como base informações de outros 2 components, que por eles também utilizam outros componentes como base para suas informações, formando uma verdadeira arvore
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome:'Kauã'
            }
        }
    }
</script>
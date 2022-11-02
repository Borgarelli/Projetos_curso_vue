<template>
    <div> <!--Por questões de semantica o Vue só pode fazer uma requisição do data por vez, então o certo seria colocar todas as requisições dentro de uma div-->
        <h1>Olá Vue</h1>
        <p>Meu nome é {{nome}} e trabalho como {{profissão}}</p> 
        <MultiplosEventos />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';
    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos
        },
        data() {
            return { // Instancia os dados que iram ser retornados quando requisitados dentro do template ou mais conhecidos como chaves
                nome: "Kauã", 
                profissão: "Web developer"
            }
        }
    }
</script>
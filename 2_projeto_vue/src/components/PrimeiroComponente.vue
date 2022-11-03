<template>
    <div> <!--Por questões de semantica o Vue só pode fazer uma requisição do data por vez, então o certo seria colocar todas as requisições dentro de uma div-->
        <Reutilizacao />
        <h1>Olá Vue</h1>
        <p>Meu nome é {{nome}} e trabalho como {{profissão}}</p> 
        <MultiplosEventos />
        <Reutilizacao />
        <Reutilizacao /> <!--Exemplo de reutilização, mostrando que independente do número de vezes que seja importado, cada importação é unica e não interfere no evento de outras importações-->
        <Reutilizacao />
        <Reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
            Reutilizacao
        },
        data() {
            return { // Instancia os dados que iram ser retornados quando requisitados dentro do template ou mais conhecidos como chaves
                nome: "Kauã", 
                profissão: "Web developer"
            }
        }
    }
</script>
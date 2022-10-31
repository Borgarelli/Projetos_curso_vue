<template>
    <div> <!--Por questões de semantica o Vue só pode fazer uma requisição do data por vez, então o certo seria colocar todas as requisições dentro de uma div-->
        <h1>Olá Vue</h1>
        <p>Meu nome é {{nome}} e trabalho como {{profissão}}</p> 
    </div>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return { // Instancia os dados que iram ser retornados quando requisitados dentro do template
                nome: "Kauã", 
                profissão: "Web developer"
            }
        }
    }
</script>
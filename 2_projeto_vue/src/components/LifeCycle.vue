<template>
    <h1>Meu nome é: {{nome}}</h1>
</template>

<script>
    export default {
        name:'LifeCycle',
        data() {
            return {
                nome:'Ainda não sei'
            }
        },
        created() { //Evento que irá mudar o valor atribuido a nome dentro de data, após o reload da pagina feito automaticamente
            setTimeout(() => {  //Aqui define o tempo em que ocorrerá a substituição desses dados após o carregamento da página, Exemplo: A página irá carregar por padrão com o valor 'Ainda não sei', porém 1 segundo depois ocorrerá essa troca de valores pelo valor inserido dentro timeOut
                this.nome = 'Kauã'
            }, 1000);

            this.lifeCycle() //Instancia o metodo, mostrando que foi executado corretamente no console do navegador
        },
        mounted() {//Evento que está acima da hierarquia do created que acaba "passando por cima" e realocando outro dado em cima dele
            setTimeout(() => {
                this.nome = 'Borgarelli'
            }, 2000); 
            
            this.lifeCycle()
        },
        methods: {
            lifeCycle() {
                console.log("Executado") //Metódo criado apenas para mostrar que methods funcionava dentro dos triggers
            }
        }
    }
</script>
<template>
  <div>
    <PrimeiroComponente /> <!--Aqui puxa todo o conteudo aramzenado no componente PrimeiroComponente-->
    <p>Eu estou {{teste}} o projeto Vue em funcionamento</p>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default { //exportando as configurações estabelecidas no main.js
  name: 'App',
  components: { // define quais os componetes que serão requisitados 
    PrimeiroComponente
  },
  data() {
    return {
      teste: "testando"
    }
  }
}
</script>

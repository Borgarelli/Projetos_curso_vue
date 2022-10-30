<template>
  <PrimeiroComponente /> <!--Aqui puxa todo o conteudo aramzenado no componente PrimeiroComponente-->
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default { //exportando as configurações estabelecidas no main.js
  name: 'App',
  components: { // define quais os componetes que serão requisitados 
    PrimeiroComponente
  }
}
</script>

<template>
  <div>
    <PrimeiroComponente /> <!--Aqui puxa todo o conteudo aramzenado no componente PrimeiroComponente-->
    <p>Eu estou {{teste}} o projeto Vue em funcionamento</p>
    <LifeCycle /> <!--Implementação do LifeCycle-->
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';

export default { //exportando as configurações estabelecidas no main.js
  name: 'App',
  components: { // define quais os componetes que serão requisitados 
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  },
  data() {
    return {
      teste: "testando"
    }
  }
}
</script>

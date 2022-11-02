<template>
  <div>
    <Header />
    <PrimeiroComponente /> <!--Aqui puxa todo o conteudo aramzenado no componente PrimeiroComponente-->
    <p class="paragrafo-pai">Eu estou {{teste}} o projeto Vue em funcionamento</p>
    <LifeCycle /> <!--Implementação do LifeCycle-->
    <Pessoa />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';

export default { // exportando as configurações estabelecidas no main.js
  name: 'App',
  components: { // define quais os componetes que serão requisitados 
    Header,
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

 <style> /*Demonstração do CSS global, que atinge todos os componentes ligados ao App, sejam eles até mesmo refrenciados dentro de outros componentes */
  body{
    background-color: #333;
    color: white;
  }

  a{
    color: red;
  }
  
  .teste{
    background-color: black;
  }
</style>

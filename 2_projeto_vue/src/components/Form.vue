<template>
    <div>
        <h2>Meu formulário</h2>
        <form>
            <div> <!--Só pra quebrar linha-->
                <InputText />
            </div>

            <div>
                <InputText /> <!--Aqui ele está fazendo duas requisições, porém o Vue enxerga como valores diferentes -->
            </div>

            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        }
    }
</script>
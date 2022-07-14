<template>
    <div class="contenedor">
        <input class="form-control form-control-lg" v-model='texto' type="text" placeholder="¿Qué deseas hacer?"
            aria-label=".form-control-lg example">
        <button type="button" class="btn btn-warning añadir" @click="addTask(texto)">
        <img id="img" src="https://64.media.tumblr.com/8fb38636d48ba2a755a0a7c3b0931c04/f0fcbb69789bc5e0-4c/s540x810/287393156a41ded8c8499d1526c419e7a055dc7c.pnj" alt="">
        </button>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
    data(){
        return {texto:''}
    },
    computed:{
        ...mapState(['tasks'])
    },
    methods:{
        ...mapMutations(['addTask'])
    }

}
</script>

<style>

.añadir {
    margin-left: 0px;
     margin-bottom: 45px;
    width: 80px;
    height: 45px;
    border-radius: 0% !important;
    background-color: transparent !important;
    border-color:     transparent !important;
}
#img{
    margin-left: 10px;
    margin-top: 8px;
    width: 55px;
    height: 55px;
    border-radius: 0% !important;
    background-color: transparent !important;
    border-color:     transparent !important;
}
.contenedor{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    max-width: 400px;
}
</style>

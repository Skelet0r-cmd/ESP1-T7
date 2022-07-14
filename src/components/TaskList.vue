<template>
    <div v-for="(tasks,index) of tasks" :key="tasks.id">
        <div class="input-group contenedor taskk7">
            <div class="form-control form-control-lg" v-if="tasks.isComplete===false">{{tasks.detail}}</div>
            <div class="buttonss">
                <button class="boton" type="button"  v-on:click="markComplete(index)"><img
                        src="https://64.media.tumblr.com/3523340025248bfcefe94fc6460e4c30/20b55d735858091e-66/s540x810/e094e8c1692c83564687d9150f2e8007cd0e069f.pnj"
                        :width="38" alt=""></button>
                <button id="xButton" class="boton" type="button"  v-on:click="deleteTask(index)">
                <img src="https://64.media.tumblr.com/a2b00a1a00cba23c1f841ce9aaae0200/f896db2459e6a669-96/s540x810/91e67e27ffe5388b1b55f94af2988d7462c7098e.pnj"
                        :width="38" alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
    computed:{
        ...mapState(['tasks'])
    },
    methods:{
        ...mapMutations(['deleteTask','markComplete'])
    }

}
</script>

<style>

.contenedor{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    width: 400px !important;
}

.buttonss{
    display: none;
}

.taskk7:hover .buttonss{
        display: block;
}

.boton{
    outline:none !important;
    border: none;
    background: none;
}
#xButton{
    margin-top: 15px;
}


</style>

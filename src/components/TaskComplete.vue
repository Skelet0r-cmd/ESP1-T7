<template>
    <div v-for="(tasks, index) of tasks" :key="tasks.id">
        <div class="input-group contenedor taskk7">
            <div class="form-control form-control-lg" v-if="tasks.isComplete===true">{{tasks.detail}}</div>
            <div class="buttonss">
                <button id="buttonAlineation" class="buttonClass" type="button" v-on:click="markIncomplete(index)"><img
                        src="https://64.media.tumblr.com/643b28a1df5639367613d5bc27f068be/52188e4b07781b5b-4c/s540x810/69ffa14e132b2158f748c31b28ba08e041767dca.pnj"
                        :width="42" alt=""></button>
                <button id="buttonAlineation" class="buttonClass" type="button" v-on:click="deleteTask(index)">
                <img src="https://64.media.tumblr.com/a2b00a1a00cba23c1f841ce9aaae0200/f896db2459e6a669-96/s540x810/91e67e27ffe5388b1b55f94af2988d7462c7098e.pnj" :width="38"  alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    computed:{
        ...mapState(['tasks'])
    },
    methods:{
        ...mapMutations(['deleteTask','markIncomplete'])
    }
}
</script>

<style>
.contenedor{
    margin-top: 10px;
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

.buttonClass{
    outline:none !important;
    border: none;
    background: none;
}
#buttonAlineation{
    margin-top: 10px;
}
</style>

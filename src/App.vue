<template>
  <NavBar/>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <NewTask class="NewTask"/>
    <TaskList/>
    <br>
    <div>
<button
      id="TaskCompleteButton"
      class="btn btn-primary TaskComplete"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample"
      aria-expanded="false"
      aria-controls="collapseWidthExample"
    >TASK COMPLETE</button>
    <img id="imgTaskComplete" src="https://64.media.tumblr.com/74d6aa667c77cde65e51d3f6698a6508/4ce7d5e0ae17fa42-35/s540x810/d0501c67e406801c2b2ae76cba0e2aa7f43f3347.pnj" alt="">
    </div>
    <p></p>
    <div id="divTaskComplete">
      <div class="collapse" id="collapseWidthExample">
        <TaskComplete/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NewTask from "./components/NewTask.vue";
import TaskList from "./components/TaskList.vue";
import TaskComplete from "./components/TaskComplete.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NewTask,
    TaskList,
    TaskComplete,
  },
};
</script>

<style>
#app {
  font-family: Times, "Times New Roman";
}

.TaskComplete {
  padding-top: 30px;
  padding-bottom: 30px;
}

.NewTask {
  padding-top: 30px;
  padding-bottom: 30px;
}
#divTaskComplete{
min-height: 100px;
min-width: 400px;
}
#TaskCompleteButton{
  background-color: #8064A2 !important;
  border-color: #8064A2 !important;
}
#imgTaskComplete{
  margin-left: 10px;
  width: 55px;
}
</style>

import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      { detail: "Comprar pan integral", isComplete: true },
      { detail: "Comprar pan", isComplete: false },
      { detail: "Cocinar", isComplete: false },
    ],
  },
  getters: {},
  mutations: {
    markIncomplete(state, index) {
      state.tasks[index].isComplete = false;
    },
    markComplete(state, index) {
      state.tasks[index].isComplete = true;
    },
    addTask(state, texto) {
      console.log(texto);
      state.tasks.push({ detail: texto, isComplete: false });
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});

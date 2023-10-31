const {createApp} = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: 'Completa il milestone 1', done: true, id: 1 },
        { text: 'Completa il milestone 2', done: true, id: 2 },
        { text: 'Completa il milestone 3', done: true, id: 3 },
        { text: 'Procedi con bonus 1', done: true, id: 4 },
        { text: 'Continua con bonus 2', done: true, id: 5 },
        { text: 'Trasforma questa lista scarna in una todo list più articolata', done: false, id: 5 }
      ],
      newActivity: ''
    }
  },
  methods: {

    addTask() {
      if (this.newActivity !== '') {
        this.tasks.push({
          text: this.newActivity,
          done: false, 
          id: this.tasks.length + 1,
        });
        this.newActivity = '';
      }
    },

    removeTask(todoId) {
      const index = this.tasks.findIndex(todo => todo.id === todoId);
      if (index >= 0) {
        this.tasks.splice(index, 1);
      }
    },
    
    invertVal(todo) {
      todo.done = !todo.done;
    }
  }
}).mount('#app');
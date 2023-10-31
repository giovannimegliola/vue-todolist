const {createApp} = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: 'Inserisci task 1', done: true, id: 1 },
        { text: 'Inserisci task 2', done: false, id: 2 },
        { text: 'Inserisci task 3', done: true, id: 3 },
        { text: 'Inserisci task 4', done: false, id: 4 },
        { text: 'Inserisci task 5', done: true, id: 5 }
      ]
    }
  }
}).mount('#app');
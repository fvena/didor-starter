class Task {
  constructor(title) {
    if (!title) throw new Error('We need a title!!!');
    this.title = title;
    this.completed = false;
  }
}

class TaskList {
  constructor() {
    this.tasks = [
      { title: 'Aprender Firebase', completed: false },
      { title: 'Aprender CSS', completed: true },
      { title: 'Aprender HTML', completed: true },
    ];
  }

  // STATICS
  // Métodos públicos no requiere instanciar la clase
  //
  // TaskList.normaliceTask('  esto es una tarea  ');
  static normaliceTask(title) {
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.substring(1);
  }

  // GETTERS
  //
  // const tareas = new TaskList();
  // const uncompleted = tareas.uncompleted;  // Sin paréntesis

  get uncompleted() {
    return [...this.tasks].filter(task => !task.completed);
  }

  get completed() {
    return [...this.tasks].filter(task => task.completed);
  }

  // SETTERS
  //
  // const tareas = new TaskList();
  // const tarea = new Task('Aprender Vuex');
  // tareas.addTask = tarea;        // La añade como clase
  // tareas.addTask = {...tarea};   // La añade como un objeto

  set addTask(task) {
    this.tasks.push(task);
  }

  // Métodos
  // const tareas = new TaskList()
  // const search = tareas.search('Vuex')

  search(search) {
    return this.tasks.find(task => task.title.includes(search));
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

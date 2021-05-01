# Vue Models

## ¿Que és Vue Models?

## Instalación

Puedes instalar Vue Models mediante NPM o Yarn. Vue Model es un plugin para Vue 3, por lo que no funcionará en versiones anteriores.

### Instalación usando NPM

```bash
npm install vue-models --save
```

### Instalación usando Yarn

```bash
yarn add vue-models
```

Para usuarios que no utilicen Typescript, deberías instalar y configurar el siguiente plugin de Babel.

{ "plugins": [ "@babel/plugin-proposal-class-properties" ] }

## Comenzando

### Definir modelos

Comenzaremos declarando nuestros propios modelos extendiendo el `modelo` de vue-model.

```javascript
// Task Model

import { Model } from 'vue-models';

export default class Task extends Model {
  static entity = 'Task';

  // Default fields that define the "empty" state.
  static fields() {
    return {
      id: null,
      name: '',
      done: false,
    };
  }

  // Field validation
  validation() {
    return {
      id: integer.and(min(1)).or(equal(null)),
      name: string.and(required),
      done: boolean,
    };
  }
}
```

```javascript
// TaskList Model

import { Model } from 'vue-models';

export default class TaskList extends Model {
  static entity = 'TaskList';

  // Default fields that define the "empty" state.
  static fields() {
    return {
      id: null,
      tasks: [],
    };
  }

  // Number of tasks to be completed.
  get todo() {
    return this.tasks.filter(task => !task.done).length;
  }

  // Will be `true` if all tasks have been completed.
  get done() {
    return this.todo == 0;
  }
}
```

### Registrar los modelos y crear el store

```javascript
import { createApp } from 'vue';
import store from '/Core/plugins/vue-models';

// Models
import Task from './models/Task.model';
import TaskList from './models/TaskList.model';

// App
import App from './App.vue';

const app = createApp(App);
app.use(store, {
  models: [Task, TaskList],
});
app.mount('#app');
```

### Insertar datos

## Modelos

### Definiendo modelos

Los modelos definen las propiedades y métodos de nuestros datos. Puedes definir todos los modelos que necesites.

Para definir un modelo, crea una clase que extienda el `model` de vue-model.

```javascript
import { Model } from 'vue-models';

export default class Task extends Model {
  static entity = 'Task';

  // Default fields that define the "empty" state.
  static fields() {
    return {
      id: null,
      name: '',
      done: false,
    };
  }
}
```

#### Entity

La propiedad `static entity` indica el nombre del modelo que será utilizado como `key` en el store. Piensa que se trata del nombre de una tabla en una base de datos.

```javascript
class Task extends Model {
  static entity = 'Task';
}
```

En el ejemplo anterior, el estado del modelo `Task` será accesible mediante:

```javascript
import { useStore } from 'vue-models';

const { Task } = useStore();
```

In the above example, state for the User Model will be accessible by store.state.entities.users. Notice there is an entities state. This state is created by Vuex ORM automatically, and all of the Model data will be stored in this namespace.

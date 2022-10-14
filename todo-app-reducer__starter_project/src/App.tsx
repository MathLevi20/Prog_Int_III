import { useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';
import { useReducer } from 'react';


export default function App() {
  // const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  /* function handleAddTask(text: string) {
     setTasks([
       ...tasks,
       {
         id: nextId++,
         text: text,
         done: false,
       },
     ]);
   }*/
  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  /* function handleChangeTask(task: Task) {
     setTasks(
       tasks.map((t) => {
         if (t.id === task.id) {
           return task;
         } else {
           return t;
         }
       })
     );
   }*/
  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }
  /*function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }*/

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="App">
      <h1 >React + Reducer</h1>
      <h3>Tasks</h3>

      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />

    </div>
  )
}

export interface Task {
  id: number
  text: string
  done: boolean
}

function tasksReducer(tasks: Task, action: any) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t: Task) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      let task = tasks.filter((t: Task) => t.id !== action.id);
      return task
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
let nextId = 3;

const initialTasks: Task[] = [
  { id: 0, text: 'Elaborar Aulas', done: true },
  { id: 1, text: 'Estudar Flutter - Estados', done: false },
  { id: 2, text: 'Correr avenida Raul Lopres', done: false },
];

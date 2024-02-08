import { ToDoInterface } from '../Interfaces/i-toDo'
export interface stateToDos {
    toDos:ToDoInterface[],
    task: ToDoInterface | null,
    filter: string,
    loading: Boolean;
    error: string | null;
  }
  
  
  export const initialStateToDos: stateToDos = {
    toDos: [],
    task: null,
    filter: 'ALL',
    loading: false,
    error: null,
  };
  
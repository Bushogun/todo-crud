import { ToDoInterface } from '../Interfaces/i-toDo'
export interface stateToDos {
    query: string | null,
    toDos:ToDoInterface[],
    task: ToDoInterface | null,
    filter: string,
    loading: Boolean;
    error: string | null;
  }
  
  
  export const initialStateToDos: stateToDos = {
    query: '',
    toDos: [],
    task: null,
    filter: 'ALL',
    loading: false,
    error: null,
  };
  
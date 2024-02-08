import { setLoading } from '../redux/features/toDosSlice';
import type { AppDispatch } from "../redux/store";

const fetchData = async (url: string, dispatch: AppDispatch, options?: RequestInit) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error al cargar datos desde ${url}`);
    }
    const data = await response.json();
    dispatch(setLoading(false));
    return data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const fetchTodos = async (dispatch: AppDispatch, requestTodos: string) => {
  return fetchData(requestTodos, dispatch);
};

export const postTodo = async (dispatch: AppDispatch, requestTodos: string, todoInput: { title: string, isComplete: boolean }) => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoInput)
  };

  return fetchData(requestTodos, dispatch, options);
};

export const updateTodoStatus = async (dispatch: AppDispatch, requestUrl: string, id: number, isComplete: boolean, title: string ) => {
  const url = `${requestUrl}/${id}`; 
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id,  title: title, isComplete: !isComplete }) 
  };
  console.log(JSON.stringify({ id: id,  title: title, isComplete: !isComplete }) )
  console.log( "a la url " + `${requestUrl}/${id}`)
  return fetchData(url, dispatch, options); 
};
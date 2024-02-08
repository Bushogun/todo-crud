import React, { useEffect } from 'react';
import Error from '../Error';
import Loading from '../Loading';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchTodos } from '../../utils/api-utils';
import { SearchBox } from '../Search-bar';
import '../layout/layout.css';
import { TodoList } from '../Todo-list';
import ButtonAdd from '../Button-add';
import { Filters } from '../Filters';
import { API_KEY, OPERATIONS_TODOS } from '../../Api/index'
import { setToDos } from '../../redux/features/toDosSlice';

export const Layout = () => {
  const loading = useAppSelector(state => state.toDosReducer.loading);
  const error = useAppSelector(state => state.toDosReducer.error);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const todos = await fetchTodos(dispatch, API_KEY + OPERATIONS_TODOS);
        console.log(todos);
        dispatch(setToDos(todos));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchInitialData();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <div className="container-searchbar">
        <SearchBox />
      </div>
      <div className='filters-container'>
        <Filters />
      </div>
      <TodoList />
      <ButtonAdd />
    </div>
  )
}

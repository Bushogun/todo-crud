import { useAppSelector } from '../../redux/hooks';
import { TodoItem } from '../Todo-item'; 
import './TodoList.css';

export const TodoList = () => {
  const todos = useAppSelector(state => state.toDosReducer.toDos);
  const searchQuery = useAppSelector(state => state.toDosReducer.query);

  const filteredTodos = searchQuery 
    ? todos.filter(todo => 
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todos;
  
  const handleChangeStatus = () => {
    window.location.reload();
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} changeStatus={handleChangeStatus} /> 
        ))}
      </div>
    </div>
  );
};

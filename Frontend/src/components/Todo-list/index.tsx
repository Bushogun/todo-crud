import { useAppSelector } from '../../redux/hooks';
import { TodoItem } from '../Todo-item'; 
import './TodoList.css';

export const TodoList = () => {
  const todos = useAppSelector(state => state.toDosReducer.toDos);
  
  const handleChangeStatus = () => {
    window.location.reload();
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} changeStatus={handleChangeStatus} /> 
        ))}
      </div>
    </div>
  );
};

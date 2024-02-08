import React, { useState } from 'react';
import { CheckBox } from '../Check-box'; 
import { ToDoInterface } from '../../Interfaces/i-toDo';
import { MdDelete } from "react-icons/md";
import './TodoItem.css'
import { useAppDispatch } from '../../redux/hooks';
import { fetchTodos, updateTodoStatus } from '../../utils/api-utils';
import { API_KEY, OPERATIONS_TODOS } from '../../Api';

interface TodoItemProps {
    todo: ToDoInterface;
    changeStatus: () => void; 
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, changeStatus }) => { 
    const dispatch = useAppDispatch();
    const [isChecked, setIsChecked] = useState(todo.isComplete);

    const handleChangeStatus = async (checked: boolean) => {
        try {
            setIsChecked(checked);
            await updateTodoStatus(dispatch, `${API_KEY}${OPERATIONS_TODOS}`, todo.id, todo.isComplete, todo.title );
            await fetchTodos(dispatch, `${API_KEY}${OPERATIONS_TODOS}`);
            changeStatus(); 
        } catch (error) {
            setIsChecked(!checked);
            console.error('Error al cambiar el estado del todo:', error);
        }
    };

    const handleDeleteTodo = async () => {
        try {
            await fetch(`${API_KEY}${OPERATIONS_TODOS}/${todo.id}`, { method: 'DELETE' });
            await fetchTodos(dispatch, `${API_KEY}${OPERATIONS_TODOS}`);
            changeStatus();
        } catch (error) {
            console.error('Error al eliminar el todo:', error);
        }
    };

    const handleCheckBoxChange = (checked: boolean) => {
        setIsChecked(checked);
        handleChangeStatus(checked);
    };

    return (
        <div className="todo-item">
            <CheckBox checked={isChecked} onChange={handleCheckBoxChange} />
            <span className={`todo-text ${isChecked ? 'completed' : ''}`}>
                {todo.title}
            </span>
            <button onClick={handleDeleteTodo}><MdDelete /></button> 
        </div>
    );
}

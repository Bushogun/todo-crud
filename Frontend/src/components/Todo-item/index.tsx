import React from 'react';
import { CheckBox } from '../Check-box'; 
import { ToDoInterface } from '../../Interfaces/i-toDo';
import { MdDelete } from "react-icons/md";
import './TodoItem.css'
import { useAppDispatch } from '../../redux/hooks';
import { setAddTask } from '../../redux/features/toDosSlice'; 

interface TodoItemProps {
    todo: ToDoInterface;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    const handleChangeStatus = (checked: boolean) => {
    };

    return (
        <div className="todo-item">
            <CheckBox checked={todo.isComplete} onChange={handleChangeStatus} todoId={todo.id}/>
            <span className={`todo-text ${todo.isComplete ? 'completed' : ''}`}>
                {todo.title}
            </span>
            <button><MdDelete /></button>
        </div>
    );
}

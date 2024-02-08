import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilters } from '../../redux/features/toDosSlice';
import './filters.css';

export const Filters: React.FC = () => {
    const dispatch = useAppDispatch();
    const activeFilter = useAppSelector(state => state.toDosReducer.filter); 

    useEffect(() => {
        setSelectedFilter(activeFilter); 
    }, [activeFilter]);

    const [selectedFilter, setSelectedFilter] = useState<string>('');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        dispatch(setFilters(filter));
    };

    return (
        <div className='radio-input'>
            <input
                value="ALL"
                name="category-radio"
                id="category-all"
                type="radio"
                checked={selectedFilter === 'ALL'}
                onChange={() => handleFilterChange('ALL')}
            />
            <label htmlFor="category-all">All</label>
            
            <input
                value="ACTIVE"
                name="category-radio"
                id="category-active"
                type="radio"
                checked={selectedFilter === 'ACTIVE'}
                onChange={() => handleFilterChange('ACTIVE')}
            />
            <label htmlFor="category-active">Active</label>
            
            <input
                value="COMPLETE"
                name="category-radio"
                id="category-complete"
                type="radio"
                checked={selectedFilter === 'COMPLETE'}
                onChange={() => handleFilterChange('COMPLETE')}
            />
            <label htmlFor="category-complete">Complete</label>
        </div>
    );
};

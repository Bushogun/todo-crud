// import React, { ChangeEvent } from 'react';
import { FiSearch } from "react-icons/fi";
import './search-bar.css'

interface SearchBoxProps {
    // query: string;
    // setSearchQuery: (query: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <form
            aria-label="form-search"
            className="container-form"
            onSubmit={handleSubmit}
        >
            <div className="input-group">
                <input
                    type="text"
                    autoFocus
                    className="form-control"
                    name="search"
                    placeholder="Search"
                // value={query}
                // onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="input-group-append">
                <button className="btn btn-search" type="submit">
                    <FiSearch />
                </button>
            </div>
        </form>
    );
}



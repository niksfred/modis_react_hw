import React from 'react'
import { FilterOptions } from '../App';

interface FilterSetterInterface {
    setFilterState: React.Dispatch<React.SetStateAction<React.ComponentState>>;
}

const CommentsFilter = ({setFilterState}: FilterSetterInterface) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setFilterState(e.target.value);
    }

  return (
    <div><h3 className="text-4xl text-white text-center">Comments:</h3>
    <select onChange={handleChange}>
        <option value={FilterOptions.ALL}>All</option>
        <option value={FilterOptions.ACTIVE}>Active</option>
        <option value={FilterOptions.SUSPENDED}>Suspended</option>
    </select>
    </div>
  )
}

export default CommentsFilter
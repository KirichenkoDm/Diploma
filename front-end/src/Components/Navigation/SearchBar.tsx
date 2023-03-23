import React from 'react';
import { Topics } from '../../Utils/enums';
export function SearchBar () {

    const opts: React.ReactElement[] = []
    const topics = Object.keys(Topics);    
    topics.forEach(topic => {
        opts.push(<option value={topic}></option>)
    });
    return (
        <div>
            <input
                type="search"
                placeholder="Search..."
            />
            <select>
                <option value="Topic"></option>
                {opts}
            </select>

        </div>
        
    )
}
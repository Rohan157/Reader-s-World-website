import React from 'react'
import './searchbox.scss'

const SearchBox = ({placeholder, handleChange}) => (
    <div className='container1'>
    <input className='search1' type='search' placeholder = {placeholder} onChange= {handleChange} 
    />
    <div class="search2"></div>
    </div>

)
export default SearchBox;
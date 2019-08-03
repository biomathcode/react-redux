import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext'
const Navbar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Pratik Reading list</h1>
            <p>Currenty you have {books.length} books to get through... </p>
        </div>
     );
}
 
export default Navbar;
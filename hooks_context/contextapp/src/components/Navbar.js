import React, {Component} from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <h1>Context Api</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
            );
    }
}
 
export default Navbar ;

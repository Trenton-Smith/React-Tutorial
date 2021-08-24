import { useState } from "react";
import { Link } from 'react-router-dom';  //replaces <a href=""> with <Link to="">


const Navbar = () => {

    const [title, setTitle] = useState('The Dojo Blog'); // state hook

    return ( 
        <nav className="navbar">
            <h1><a href="/" onMouseOver={() => setTitle('The D -jo Blog')} onMouseLeave={() => setTitle('The Dojo Blog')}
                style={{
                color: 'inherit', 
                fontSize: '30px', 
                margin: 'inherit', 
                padding: 'inherit'}}>{title}</a></h1>
            <div className='links'>
                {/* <a href="/home">Home</a> */}
                <Link to="/">Home</Link>
                <Link className='buttonlink' to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
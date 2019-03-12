import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Navbar = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/About');
//                },2000)
    return(
        <nav className='nav-wrapper pink'>
            <Link to='/' className='logo left'>Personal Details</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Person'>Person</Link></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);
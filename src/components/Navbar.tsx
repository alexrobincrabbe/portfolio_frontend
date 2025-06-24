import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='flex justify-around'>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/chat/">Profile</NavLink>
        </nav>
    )
}

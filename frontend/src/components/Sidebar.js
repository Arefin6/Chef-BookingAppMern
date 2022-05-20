import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-dark text-white sidebar'>
           <ul className='nav nav-link'>
               <li>
                   <Link to='/dashboard' className='sidebar-link text-white'>DashBoard</Link>
               </li>
               <li>
                <Link to='/slots' className='sidebar-link text-white'>Slots</Link>
               </li>
               <li>
               <Link to='/bookings' className='sidebar-link text-white'>Bookings</Link>
               </li>
           </ul>
        </div>
    );
};

export default Sidebar;
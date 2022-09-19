import React from 'react';
import {Link, Outlet} from "react-router-dom";

const NavHeaders = (props) => {
    return (
        <div className='nav__header'>
            <div className="greenBox"></div>
            <Link to={props.srcOfLink}>{props.itemContent}</Link>
        </div>
    );
};

export default NavHeaders;
import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom';
import { FaBars, FaHome, FaUsers } from 'react-icons/fa';
import 'app/common/navBar/NavBar.css';

const NavBar = () => {
    const [ checked, setChecked ] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        if (checked) {
            document.body.style.overflowY = 'scroll';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    return (
        <>
            <input type="checkbox" id="navBar-chk-menu" checked={checked} onChange={handleChange} />
            <header className="navBar-header">
                <label htmlFor="navBar-chk-menu">
                    <FaBars className="navBar-icon-menu" />
                </label>
                <img src="https://i.ibb.co/h1XY2qh/my-logo.png" alt="my-logo" />
                <h1>My CRUD</h1>
            </header>
            <div className="navBar-body">
                <header className="navBar-header">
                    <label htmlFor="navBar-chk-menu">
                        <FaBars className="navBar-icon-menu" />
                    </label>
                    <img src="https://i.ibb.co/h1XY2qh/my-logo.png" alt="my-logo" />
                    <h1>My CRUD</h1>
                </header>
                <ul>
                    <li>
                        <NavLink to="/home" className="navBar-opt" activeClassName="active">
                            <FaHome className="navBar-icon" />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoriaList" className="navBar-opt" activeClassName="active">
                            <FaUsers className="navBar-icon" />Categoria
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/empresaList" className="navBar-opt" activeClassName="active">
                            <FaUsers className="navBar-icon" />Empresa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/personalList" className="navBar-opt" activeClassName="active">
                            <FaUsers className="navBar-icon" />Personal
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
import React from 'react';
import NavHeaders from "../nav/navHeaders";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className='menuMain'>
            <nav className='leftMenu__nav nav'>
                <ul>
                    <li>
                        <NavHeaders srcOfLink='FirstBike' itemContent='Выбор вервого велосипеда'/>
                    </li>
                    <li>

                        <NavHeaders srcOfLink='repair' itemContent='Обслуживание велосипедов'/>
                        <div className="nav__options">
                            <ul>
                                <li><Link to='/lubrication'>Смазка цепи</Link></li>
                                <li><Link to='/brakes'>Тормозная система</Link></li>
                                <li><Link to='/changeChain'>Смена цепи</Link></li>
                                <li><Link to='/changeSpeeds'>Замена скоростника</Link></li>
                                <li><Link to='/ajustSpeed'>Регулировка скоростников</Link></li>
                                <li><Link to='/optionsMore'>Больше</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavHeaders srcOfLink='AllAbout' itemContent='Все о комплектующих'/>
                        <div className="nav__options">
                            <ul>
                                <li><Link to='/accWheeld'>Все о колесах</Link></li>
                                <li><Link to='/accBrakes'>Все о тормозах</Link></li>
                                <li><Link to='/accTransmission'>Все о трансмисии</Link></li>
                                <li><Link to='/accRama'>Все о раме</Link></li>
                                <li><Link to='/accAmortizators'>Все о амортизаторах</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavHeaders srcOfLink='bikesHistory' itemContent='Общая история велосипедов'/>
                    </li>
                    <li>
                        <NavHeaders srcOfLink='BikeAndHealth' itemContent='Велосипед и здоровье'/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
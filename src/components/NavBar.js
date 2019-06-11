import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <div className="brand-logo"><a href="https://grapheo12.github.io">grapheo12</a></div>
                        <a href="#" data-target="mobile-compress" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to='/tech'>Tech Blog</NavLink></li>
                            <li><NavLink to='/lit'>Literature</NavLink></li>
                            <li><NavLink to='/meme'>Memes</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id="mobile-compress" className="sidenav">
                <div className="red btn btn-large waves-effect" style={{width: 100+'%'}}>
                    <span className="left">Menu</span>
                    <NavLink to="#" className="right sidenav-close" style={{width: 20+'%'}}><i className="material-icons black-text">closes</i></NavLink>
                </div>
                <ul>
                    <li className="sidenav-close"><NavLink to='/tech'>Tech Blog</NavLink></li>
                    <li className="sidenav-close"><NavLink to='/lit'>Literature</NavLink></li>
                    <li className="sidenav-close"><NavLink to='/meme'>Memes</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
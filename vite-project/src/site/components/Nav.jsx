import React from 'react';
import Logo from "../assets/images/ki-pilot.png";

function Nav(){

    return (

        <header class="header__menu">
          <div className='header-logo '  ><img className='logo-pilot' src= {Logo} alt="logo" /></div>  
            <nav class="header__menu">
                <ul class="menu__items">
                    <li class="menu__item">
                        <a href="/" class="menu__link" rel="internal">Home</a>
                    </li>
                    <li class="menu__item menu__item--is-gallery">
                        <a href="http://localhost:5173/InfoSection" class="menu__link" rel="internal">Infos</a>
                    </li>
                    <li class="menu__item menu__item--is-editor">
                        <a href="http://localhost:5173/quiz" class="menu__link" rel="internal">Quiz</a>
                    </li>
                    <li class="menu__item">
                        <a href="http://localhost:5173/about" class="menu__link" rel="internal">About</a>
                    </li>
                </ul>
            </nav>
    </header>

    );
}
export default Nav;
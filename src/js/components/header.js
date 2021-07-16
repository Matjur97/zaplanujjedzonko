import React from 'react';
import '../../scss/style.scss';

const HeaderMain = () => {

    const localName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <header className="head-main">
            <div className="page-title">
                <h1>
                    <a>
                        <span class="first">Zaplanuj</span>
                        <span class="second">Jedzonko</span>
                    </a>
                </h1>
            </div>

            <div className="user-info">
                <span id="user">{localStorage.getItem('userName') ? localName : "Zaloguj się"}</span>
                <i class="fas fa-user"></i>
                <button onClick={localStorage.getItem('userName') ? handleLogout : null}><i class="fas fa-power-off"></i></button>
            </div>
        </header>
    )
};

export default HeaderMain;
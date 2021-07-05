import React from 'react';
import '../../scss/style.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Navigation = () => {
    return (
            <section className="navigation">
                <div className="nav">
                    <ul>
                        <li><Link to="/">Pulpit</Link></li>
                        <li><Link to="/recipelist">Przepisy</Link></li>
                        <li><Link to="/schedulesList">Plany</Link></li>
                    </ul>
                </div>
            </section>
    )
}

export default Navigation;
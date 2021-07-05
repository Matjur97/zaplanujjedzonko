import React, { useEffect, useState } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import '../../scss/style.scss';
import WeekPlan from './weekPlan';

const Main = () => {
    return (
        <section className="application">
            <div className="main-page">
                <div className="container-app">
                    <div className="features">
                        <div className="widgets">
                            <div className="add add-recipe">
                                <Link to="/addRecipe"><i class="far fa-plus-square"></i></Link>
                                <h3>dodaj przepis</h3>
                            </div>
                            <div className="add add-plan">
                                <Link to="/addSchedule"><i class="far fa-plus-square"></i></Link>
                                <h3>dodaj plan</h3>
                            </div>
                            <div className="add add-shop">
                                <i class="far fa-plus-square"></i>
                                <h3>dodaj zakupy</h3>
                            </div>
                        </div>
                        <div className="notifications">
                            <div className="notif notif-info">
                                <i class="fas fa-info-circle"></i>
                                <h3>Masz 99 przepisów</h3>
                            </div>
                            <div className="notif notif-warn">
                                <i class="fas fa-exclamation-circle"></i>
                                <h3>Pamiętaj o dodawaniu przepisów</h3>
                            </div>
                            <div className="notif notif-hello">
                                <i class="fas fa-check-circle"></i>
                                <h3>Witaj {localStorage.getItem("userName")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="week-plan">
                        <WeekPlan />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
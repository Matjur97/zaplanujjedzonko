import React, { useEffect, useState } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import '../../scss/style.scss';

const WeekPlan = () => {
    return (
        <div className="plan-table">
            <table>
                <tbody>
                    <tr className="title">
                        <th colSpan="7" >Twój plan na nr_tygodnia tydzień:</th>
                    </tr>
                    <tr className="day">
                        <td>Poniedziałek</td>
                        <td>Wtorek</td>
                        <td>Środa</td>
                        <td>Czwartek</td>
                        <td>Piątek</td>
                        <td>Sobota</td>
                        <td>Niedziela</td>
                    </tr>
                    <tr>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                        <td>Śniadanie</td>
                    </tr>
                    <tr>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                        <td>Drugie śniadanie</td>
                    </tr>
                    <tr>
                        <td>Zupa</td>
                        <td>Zupa</td>
                        <td>Zupa</td>
                        <td>Zupa</td>
                        <td>Zupa</td>
                        <td>Zupa</td>
                        <td>Zupa</td>
                    </tr>
                    <tr>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                        <td>Drugie danie</td>
                    </tr>
                    <tr>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                        <td>Kolacja</td>
                    </tr>
                </tbody>
            </table>
            <div className="change-week">
                <a><i class="fas fa-chevron-left"></i>poprzedni</a>
                <a>następny<i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
    )
}

export default WeekPlan;
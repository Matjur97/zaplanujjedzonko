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
    const [scheduleList, setScheduleList] = useState(null);
    const [weekNumber, setWeekNumber] = useState()

    useEffect(() => {
        const currentdate = new Date();
        const oneJan = new Date(currentdate.getFullYear(), 0, 1);
        const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
        setWeekNumber(result)
    }, [])

    const localUser = localStorage.getItem('userName')
    const asd = weekNumber

    useEffect(() => {
        fetch(`http://localhost:3005/schedules?user=${localUser}&week=${weekNumber}`)
            .then(res => res.json())
            .then(data => data)
            .then(scheduleList => setScheduleList(scheduleList))
            .catch((err) => console.warn(err))
    }, []);

    console.log(scheduleList)
    console.log(weekNumber)

    return (
        <div className="plan-table">
            <table>
                <tbody>
                    <tr className="title">
                        <th colSpan="7" >Twój plan na {weekNumber} tydzień:</th>
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
                <button onClick={() => setWeekNumber(weekNumber - 1)}><i class="fas fa-chevron-left"></i>poprzedni</button>
                <button onClick={() => setWeekNumber(weekNumber + 1)}>następny<i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default WeekPlan;
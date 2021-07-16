import React, { useEffect, useState } from 'react';
import '../../scss/style.scss';

const WeekPlan = () => {
    const [weekNumber, setWeekNumber] = useState(29)
    const [scheduleList, setScheduleList] = useState(null);

    const localUser = localStorage.getItem('userName')

    useEffect(() => {
        fetch(`http://localhost:3005/schedules?user=${localUser}&week=${weekNumber}`)
            .then(res => res.json())
            .then(data => data)
            .then(scheduleList => setScheduleList(scheduleList))
            .catch((err) => console.warn(err))
    }, [weekNumber]);

    return scheduleList ?
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
                        <td>{scheduleList.map((el) => {
                           return el.recipes.MondayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.TuesdayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.WednesdayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.ThursdayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.FridayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SaturdayBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SundayBreakfast
                        })}</td>
                    </tr>
                    <tr>
                    <td>{scheduleList.map((el) => {
                           return el.recipes.MondaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.TuesdaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.WednesdaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.ThursdaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.FridaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SaturdaySecBreakfast
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SundaySecBreakfast
                        })}</td>
                    </tr>
                    <tr>
                    <td>{scheduleList.map((el) => {
                           return el.recipes.MondaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.TuesdaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.WednesdaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.ThursdaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.FridaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SaturdaySoup
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SundaySoup
                        })}</td>
                    </tr>
                    <tr>
                    <td>{scheduleList.map((el) => {
                           return el.recipes.MondayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.TuesdayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.WednesdayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.ThursdayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.FridayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SaturdayLunch
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SundayLunch
                        })}</td>
                    </tr>
                    <tr>
                    <td>{scheduleList.map((el) => {
                           return el.recipes.MondayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.TuesdayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.WednesdayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.ThursdayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.FridayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SaturdayDinner
                        })}</td>
                        <td>{scheduleList.map((el) => {
                           return el.recipes.SundayDinner
                        })}</td>
                    </tr>
                </tbody>
            </table>
            <div className="change-week">
                <button onClick={() => setWeekNumber(weekNumber - 1)}><i class="fas fa-chevron-left"></i>poprzedni</button>
                <button onClick={() => setWeekNumber(weekNumber + 1)}>następny<i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    : <h1>Ładowanie danych</h1>
}

export default WeekPlan;
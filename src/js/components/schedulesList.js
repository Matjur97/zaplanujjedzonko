import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';

const ScheduleList = () => {
    const [schedulesList, setSchedulesList] = useState(null)
    const [ID, setID] = useState(localStorage.getItem('editScheduleID'))
    const localUser = localStorage.getItem('userName')
    const API = "http://localhost:3005/schedules";

    useEffect(() => {
        fetch(`${API}?user=${localUser}`)
            .then(res => res.json())
            .then(data => data)
            .then(schedulesList => setSchedulesList(schedulesList))
            .catch((err) => console.warn(err))
    }, []);

    const handleDelete = (id, event) => {
        event.preventDefault();
        fetch(API + "/" + id, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(res => console.log(res))
        window.location.reload();
    }

    const handleEdit = (id, event) => {
        event.preventDefault();
        if (typeof ID === 'number'){
            localStorage.removeItem('editScheduleID')
        };

        localStorage.setItem('editScheduleID', id)
    }

    return schedulesList ?
        <section className="application">
            <div className="display-schedule-list">
                <div className="schedule-list-page">
                    <div className="container-schedule">
                        <div className="content-schedule">
                            <div className="header">
                                <h1>lista planów</h1>
                                <Link to="/addSchedule"><i class="fas fa-plus-square"></i></Link>
                            </div>
                            <div className="schedule-table">
                                <table>
                                    <tbody>
                                        <tr className="titles">
                                            <th>id</th>
                                            <th>nazwa</th>
                                            <th>opis</th>
                                            <th>tydzień</th>
                                            <th>akcje</th>
                                        </tr>
                                        {schedulesList.map((el, i) => {
                                            return <tr>
                                                <td>{el.id}</td>
                                                <td>{el.scheduleName}</td>
                                                <td>{el.description}</td>
                                                <td>{el.week}</td>
                                                <td>
                                                    <button onClick={event => handleDelete(el.id, event)}>
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                    <button onClick={event => handleEdit(el.id, event)}>
                                                        <Link to="/editSchedule"><i class="fas fa-edit"></i></Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        : <h1>Ładowanie danych</h1>
}

export default ScheduleList;
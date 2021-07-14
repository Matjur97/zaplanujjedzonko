import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import '../../scss/style.scss';

const ScheduleList = () => {
    return (
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ScheduleList;
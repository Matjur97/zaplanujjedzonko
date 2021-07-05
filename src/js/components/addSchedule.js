import React, { useEffect, useState } from 'react';
import '../../scss/style.scss';

const AddSchedule = () => {
    const [schedule, setSchedule] = useState({
        name: "",
        description: "",
        week: "",
    });
    const [warn, setWarn] = useState("")
    const [warnIcon, setWarnIcon] = useState("disabled")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const handleBlur = (e) => {
        if (schedule.name.length > 10) {
            return (
                setWarn("Nazwa powinna mieć maksymalnie 60 znaków"),
                setWarnIcon("")
            )
        }
        else if (schedule.description.length > 10) {
            setWarn("Opis powinien mieć maksymalnie 360 znaków"),
                setWarnIcon("")
        }
        else if (schedule.week < 1 && schedule.week > 52 && isNaN) {
            setWarn("Numer tygodnia powinien być liczbą w przedziale 1 - 52"),
                setWarnIcon("")
        }
        else {
            return (
                setWarn(""),
                setWarnIcon("disabled")
            )
        }
    }

    const handleWarnChange = (e) => {
        if (warn !== 0) {
            return setWarnIcon("warn")
        }
    }

    return (
        <section className="application">
            <div className="display-add-schedule">
                <div className="add-schedule-page">
                    <div className="container-schedule">
                        <div className="content-schedule">
                            <div className="header">
                                <h1>nowy plan</h1>
                                <button><a>Zapisz zmiany</a></button>
                            </div>
                            <div className="about-schedule">
                                <form>
                                    <label> Nazwa planu
                                        <input type="text" name="name"
                                            value={schedule.name} onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </input>
                                    </label>
                                    <label> Opis planu
                                        <textarea type="text" name="description" rows="4"
                                            value={schedule.description} onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </textarea>
                                    </label>
                                    <label> Numer tygodnia
                                        <div className="week"><input type="text" name="week"
                                            value={schedule.week} onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </input></div>
                                    </label>
                                </form>
                                <div className="warn"><span className={warnIcon}>
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                    <span>{warn}</span>
                                </div>
                            </div>
                            <div className="table">
                                <table>
                                    <tbody>
                                        <tr className="header">
                                            <th></th>
                                            <th>śniadanie</th>
                                            <th>drugie śniadanie</th>
                                            <th>zupa</th>
                                            <th>drugie danie</th>
                                            <th>kolacja</th>
                                        </tr>
                                        <tr className="day">
                                            <th>poniedziałek</th>
                                        </tr>
                                        <tr className="day">
                                            <th>wtorek</th>
                                        </tr>
                                        <tr className="day">
                                            <th>środa</th>
                                        </tr>
                                        <tr className="day">
                                            <th>czwartek</th>
                                        </tr>
                                        <tr className="day">
                                            <th>piątek</th>
                                        </tr>
                                        <tr className="day">
                                            <th>sobota</th>
                                        </tr>
                                        <tr className="day">
                                            <th>niedziela</th>
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

export default AddSchedule;
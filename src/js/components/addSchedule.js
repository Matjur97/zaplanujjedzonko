import React, { useEffect, useState, } from 'react';
import { createSchedule, newSchedule } from './dataFunc';
import '../../scss/style.scss';
import AddSchedulePlan, { scheduleState } from './addSchedulePlan';

const AddSchedule = () => {
    const [schedule, setSchedule] = useState({
        name: "",
        description: "",
        week: "",
    });
    const [recipeSelect, setRecipeSelect] = useState({
        MondayBreakfast: "",
        MondaySecBreakfast: "",
        MondaySoup: "",
        MondayLunch: "",
        MondayDinner: "",
        TuesdayBreakfast: "",
        TuesdaySecBreakfast: "",
        TuesdaySoup: "",
        TuesdayLunch: "",
        TuesdayDinner: "",
        WednesdayBreakfast: "",
        WednesdaySecBreakfast: "",
        WednesdaySoup: "",
        WednesdayLunch: "",
        WednesdayDinner: "",
        ThursdayBreakfast: "",
        ThursdaySecBreakfast: "",
        ThursdaySoup: "",
        ThursdayLunch: "",
        ThursdayDinner: "",
        FridayBreakfast: "",
        FridaySecBreakfast: "",
        FridaySoup: "",
        FridayLunch: "",
        FridayDinner: "",
        SaturdayBreakfast: "",
        SaturdaySecBreakfast: "",
        SaturdaySoup: "",
        SaturdayLunch: "",
        SaturdayDinner: "",
        SundayBreakfast: "",
        SundaySecBreakfast: "",
        SundaySoup: "",
        SundayLunch: "",
        SundayDinner: "",
    })
    const [recipesList, setRecipesList] = useState(null);
    const [warn, setWarn] = useState("");
    const [warnIcon, setWarnIcon] = useState("disabled");
    const [createScheduleValid, setcreateScheduleValid] = useState(false);

    const localUser = localStorage.getItem('userName')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const handleSelect = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRecipeSelect(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    useEffect(() => {
        fetch(`http://localhost:3005/recipes?user=${localUser}`)
            .then(res => res.json())
            .then(data => data)
            .then(recipesList => setRecipesList(recipesList))
            .catch((err) => console.warn(err))
    }, []);

    const handleBlur = () => {
        const week = schedule.week;
        if (schedule.name.length > 10) {
            setWarn("Nazwa powinna mieć maksymalnie 60 znaków")
            setWarnIcon("")
        }
        else if (schedule.description.length > 360) {
            setWarn("Opis powinien mieć maksymalnie 360 znaków")
            setWarnIcon("")
        }
        else if (schedule.week.length < 1 && schedule.week.length > 52) {
            setWarn("Numer tygodnia powinien być liczbą w przedziale 1 - 52")
            setWarnIcon("")
        }
        else if (isNaN(week)) {
            setWarn("Numer tygodnia musi być liczbą")
            setWarnIcon("")
        }
        // else if()
        else {
            setWarn(""),
            setWarnIcon("disabled")
            setcreateScheduleValid(true)
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        const newSchedule = {
            user: localUser,
            scheduleName: schedule.name,
            description: schedule.description,
            week: schedule.week,
            recipes: recipeSelect
        };
        createSchedule(newSchedule);
    }

    return recipesList ?
        <section className="application">
            <div className="display-add-schedule">
                <div className="add-schedule-page">
                    <div className="container-schedule">
                        <div className="content-schedule">
                            <div className="header">
                                <h1>nowy plan</h1>
                                <button onClick={onClick}><a>Zapisz zmiany</a></button>
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
                                        <tr className="table-header">
                                            <th></th>
                                            <th>śniadanie</th>
                                            <th>drugie śniadanie</th>
                                            <th>zupa</th>
                                            <th>drugie danie</th>
                                            <th>kolacja</th>
                                        </tr>
                                        <tr className="day">
                                            <th>poniedziałek</th>
                                            <td>
                                                <form>
                                                    <select name="MondayBreakfast" value={recipeSelect.MondayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="MondaySecBreakfast" value={recipeSelect.MondaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="MondaySoup" value={recipeSelect.MondaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="MondayLunch" value={recipeSelect.MondayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="MondayDinner" value={recipeSelect.MondayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>wtorek</th>
                                            <td>
                                                <form>
                                                    <select name="TuesdayBreakfast" value={recipeSelect.TuesdayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="TuesdaySecBreakfast" value={recipeSelect.TuesdaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="TuesdaySoup" value={recipeSelect.TuesdaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="TuesdayLunch" value={recipeSelect.TuesdayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="TuesdayDinner" value={recipeSelect.TuesdayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>środa</th>
                                            <td>
                                                <form>
                                                    <select name="WednesdayBreakfast" value={recipeSelect.WednesdayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="WednesdaySecBreakfast" value={recipeSelect.WednesdaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="WednesdaySoup" value={recipeSelect.WednesdaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="WednesdayLunch" value={recipeSelect.WednesdayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="WednesdayDinner" value={recipeSelect.WednesdayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>czwartek</th>
                                            <td>
                                                <form>
                                                    <select name="ThursdayBreakfast" value={recipeSelect.ThursdayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="ThursdaySecBreakfast" value={recipeSelect.ThursdaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="ThursdaySoup" value={recipeSelect.ThursdaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="ThursdayLunch" value={recipeSelect.ThursdayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="ThursdayDinner" value={recipeSelect.ThursdayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>piątek</th>
                                            <td>
                                                <form>
                                                    <select name="FridayBreakfast" value={recipeSelect.FridayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="FridaySecBreakfast" value={recipeSelect.FridaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="FridaySoup" value={recipeSelect.FridaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="FridayLunch" value={recipeSelect.FridayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="FridayDinner" value={recipeSelect.FridayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>sobota</th>
                                            <td>
                                                <form>
                                                    <select name="SaturdayBreakfast" value={recipeSelect.SaturdayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SaturdaySecBreakfast" value={recipeSelect.SaturdaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SaturdaySoup" value={recipeSelect.SaturdaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SaturdayLunch" value={recipeSelect.SaturdayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SaturdayDinner" value={recipeSelect.SaturdayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr className="day">
                                            <th>niedziela</th>
                                            <td>
                                                <form>
                                                    <select name="SundayBreakfast" value={recipeSelect.SundayBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SundaySecBreakfast" value={recipeSelect.SundaySecBreakfast} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SundaySoup" value={recipeSelect.SundaySoup} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SundayLunch" value={recipeSelect.SundayLunch} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <select name="SundayDinner" value={recipeSelect.SundayDinner} onChange={handleSelect}>
                                                        {recipesList.map((el, i) => {
                                                            return <option key={i} value={el.recipeName}>{el.recipeName}</option>
                                                        })}
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </section >
                                :<h1>Ładowanie</h1>
}

export default AddSchedule;
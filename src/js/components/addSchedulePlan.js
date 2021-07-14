import React, { createContext, useEffect, useState } from 'react';
import { newSchedule } from './dataFunc';
import '../../scss/style.scss';

const AddSchedulePlan = () => {
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

    const localUser = localStorage.getItem('userName');

    useEffect(() => {
        fetch(`http://localhost:3005/recipes?user=${localUser}`)
            .then(res => res.json())
            .then(data => data)
            .then(recipesList => setRecipesList(recipesList))
            .catch((err) => console.warn(err))
    }, [])

    console.log(recipesList)

    const scheduleState = createContext({
        monBreakfast: recipeSelect.MondayBreakfast,
        monSecBreakfast: recipeSelect.MondaySecBreakfast,
        monSoup: recipeSelect.MondaySoup,
        monLunch: recipeSelect.MondayLunch,
        monDinner: recipeSelect.MondayDinner
    });

    return recipesList ? 
        <>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="MondaySecBreakfast" value={recipeSelect.MondaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="MondaySoup" value={recipeSelect.MondaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="MondayLunch" value={recipeSelect.MondayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="MondayDinner" value={recipeSelect.MondayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="TuesdaySecBreakfast" value={recipeSelect.TuesdaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="TuesdaySoup" value={recipeSelect.TuesdaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="TuesdayLunch" value={recipeSelect.TuesdayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="TuesdayDinner" value={recipeSelect.TuesdayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="WednesdaySecBreakfast" value={recipeSelect.WednesdaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="WednesdaySoup" value={recipeSelect.WednesdaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="WednesdayLunch" value={recipeSelect.WednesdayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="WednesdayDinner" value={recipeSelect.WednesdayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="ThursdaySecBreakfast" value={recipeSelect.ThursdaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="ThursdaySoup" value={recipeSelect.ThursdaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="ThursdayLunch" value={recipeSelect.ThursdayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="ThursdayDinner" value={recipeSelect.ThursdayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="FridaySecBreakfast" value={recipeSelect.FridaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="FridaySoup" value={recipeSelect.FridaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="FridayLunch" value={recipeSelect.FridayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="FridayDinner" value={recipeSelect.FridayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="SaturdaySecBreakfast" value={recipeSelect.SaturdaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SaturdaySoup" value={recipeSelect.SaturdaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SaturdayLunch" value={recipeSelect.SaturdayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SaturdayDinner" value={recipeSelect.SaturdayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
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
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <select name="SundaySecBreakfast" value={recipeSelect.SundaySecBreakfast} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SundaySoup" value={recipeSelect.SundaySoup} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SundayLunch" value={recipeSelect.SundayLunch} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                            <td>
                            <form>
                                    <select name="SundayDinner" value={recipeSelect.SundayDinner} onChange={handleSelect}>
                                        {recipesList.map((el, i) => {
                                            return <option  key={i} value={el.recipeName}>{el.recipeName}</option>
                                        })}
                                    </select>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    :<h1>Ładowanie</h1>
}

export default AddSchedulePlan;
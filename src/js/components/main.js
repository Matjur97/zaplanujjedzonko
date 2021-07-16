import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';
import WeekPlan from './weekPlan';

const Main = () => {
    const [recipesList, setRecipesList] = useState(null);

    const localUser = localStorage.getItem("userName")

    useEffect(() => {
        fetch(`http://localhost:3005/recipes?user=${localUser}`)
        .then(res => res.json())
        .then(data => data)
        .then(recipesList => setRecipesList(recipesList))
        .catch(err => console.warn(err))
      })

    return recipesList ?
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
                                <h3>Masz {recipesList.length} przepisów</h3>
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
    :<h1>Ładowanie danych</h1>
}

export default Main;
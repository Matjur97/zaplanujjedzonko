import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import '../scss/style.scss';
import HeaderMain from './components/header';
import LogoutPage from './components/logoutPage';
import Navigation from './components/navigation';
import RecipeList from './components/recipelist';
import ScheduleList from './components/schedulesList';
import AddRecipe from './components/addRecipe';
import Main from './components/main';
import AddSchedule from './components/addSchedule';
import EditRecipe from './components/editRecipe';
import EditSchedule from './components/editSchedule'

function App() {

    return (
        <HashRouter>

            <HeaderMain />
            <section className="layout">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={localStorage.getItem('userName') ? Main : LogoutPage} />
                    <Route exact path="/recipelist" component={localStorage.getItem('userName') ? RecipeList : LogoutPage} />
                    <Route exact path="/schedulesList" component={localStorage.getItem('userName') ? ScheduleList : LogoutPage} />
                    <Route exact path="/addRecipe" component={localStorage.getItem('userName') ? AddRecipe : LogoutPage} />
                    <Route exact path="/addSchedule" component={localStorage.getItem('userName') ? AddSchedule : LogoutPage} />
                    <Route exact path="/editRecipe" component={localStorage.getItem('userName') ? EditRecipe : LogoutPage} />
                    <Route exact path="/editSchedule" component={localStorage.getItem('userName') ? EditSchedule : LogoutPage} />
                </Switch>
            </section>

        </HashRouter >
    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)
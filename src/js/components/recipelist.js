import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import '../../scss/style.scss';

const RecipeList = () => {
    return (
        <section className="application">
            <div className="display-recipe-list">
                <div className="recipe-list-page">
                    <div className="container-recipe">
                        <div className="content-recipe">
                            <div className="header">
                                <h1>lista przepisów</h1>
                                <Link to="/addRecipe"><i className="fas fa-plus-square"></i></Link>
                            </div>
                            <div className="recipe-table">
                                <table>
                                    <tbody>
                                        <tr className="titles">
                                            <th>id</th>
                                            <th>nazwa</th>
                                            <th>opis</th>
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

export default RecipeList;
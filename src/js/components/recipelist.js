import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/style.scss';

const RecipeList = () => {
    const [recipesList, setRecipesList] = useState(null)
    const [ID, setID] = useState(localStorage.getItem('editRecipeID'))
    const localUser = localStorage.getItem('userName')
    const API = "http://localhost:3005/recipes";

    useEffect(() => {
        fetch(`${API}?user=${localUser}`)
            .then(res => res.json())
            .then(data => data)
            .then(recipesList => setRecipesList(recipesList))
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
            localStorage.removeItem('editRecipeID')
        };
         
        localStorage.setItem('editRecipeID', id)
    }

    return recipesList ?
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
                                        {recipesList.map((el, i) => {
                                            return <tr>
                                                <td>{el.id}</td>
                                                <td>{el.recipeName}</td>
                                                <td>{el.description}</td>
                                                <td>
                                                    <button onClick={event => handleDelete(el.id, event)}>
                                                        <i class="fas fa-trash-alt"></i>
                                                        </button>
                                                        <button onClick={event => handleEdit(el.id, event)}>
                                                            <Link to="/editRecipe"><i class="fas fa-edit"></i></Link>
                                                            </button>
                                                        </td>
                                                <td></td>
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

export default RecipeList;
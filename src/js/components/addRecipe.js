import React, { useEffect, useState } from 'react';
import '../../scss/style.scss';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        recipeName: "",
        description: "",
        instruction: [],
        ingredients: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const onClick = (e) => {
        e.preventDefault();

    }

    return (
        <section className="application">
            <div className="display-add-recipe">
                <div className="add-recipe-page">
                    <div className="container-recipe">
                        <div className="content-recipe">
                            <div className="header">
                                <h1>nowy przepis</h1>
                                <button><a>Zapisz i zamknij</a></button>
                            </div>
                            <div className="about-recipe">
                                <form>
                                    <label> Nazwa przepisu
                                        <input type="text" name="recipeName"
                                            value={recipe.name} onChange={handleChange}>
                                        </input>
                                    </label>
                                    <label> Opis przepisu
                                        <textarea rows="4" name="description"
                                            value={recipe.description} onChange={handleChange}>
                                        </textarea>
                                    </label>
                                </form>
                            </div>
                            <div className="recipe-instruction">
                                <div className="recipe">
                                    <h1>instrukcje</h1>
                                    <div className="input">
                                        <form>
                                            <textarea rows="4" name="instruction"
                                                value={recipe.instruction} onChange={handleChange}>
                                            </textarea>
                                            <button className="fas fa-plus-square"></button>
                                        </form>

                                    </div>
                                    <div className="list">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                                <div className="recipe">
                                    <h1>składniki</h1>
                                    <div className="input">
                                        <form>
                                            <input type="text" name="ingredients"
                                                value={recipe.ingredients} onChange={handleChange}>
                                            </input>
                                            <button className="fas fa-plus-square"
                                                type="submit" >
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddRecipe;
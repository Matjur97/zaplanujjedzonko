import React, { useEffect, useState } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    useHistory,
} from 'react-router-dom';
import { createRecipe } from './dataFunc';
import '../../scss/style.scss';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        recipeName: "",
        description: "",
        instruction: "",
        ingredients: "",
    });
    const [instructionsArr, setInstructionsArr] = useState([]);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const [warn, setWarn] = useState("");
    const [warnIcon, setWarnIcon] = useState("disabled");
    const [createRecipeValid, setCreateRecipeValid] = useState(false);

    const localUser = localStorage.getItem('userName');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const handleBlur = () => {
        if (recipe.recipeName.length === 0){
            setWarn("Żadne pole nie może być puste")
            setWarnIcon("")
        }
        else if (recipe.description.length === 0){
            setWarn("Żadne pole nie może być puste")
            setWarnIcon("")
        }
        else if (recipe.recipeName.length <3){
            setWarn("Minimalna ilość znaków to 3")
            setWarnIcon("")
        }
        else if (recipe.description.length <3){
            setWarn("Minimalna ilość znaków to 3")
            setWarnIcon("")
        }
        else if (recipe.recipeName.length > 60) {
            setWarn("Nazwa powinna mieć maksymalnie 60 znaków")
            setWarnIcon("")
        }
        else if (recipe.description.length > 360) {
            setWarn("Opis powinien mieć maksymalnie 360 znaków")
            setWarnIcon("")
        }
        else {
            setWarn("")
            setWarnIcon("disabled")
            setCreateRecipeValid(true)
        }

    }

   const onClick = (e) => {
        e.preventDefault();
        if(createRecipeValid === true){
            const newRecipe = {
                user: localUser,
                recipeName: recipe.recipeName,
                description: recipe.description,
                instruction: instructionsArr,
                ingredients: ingredientsArr
            };
        createRecipe(newRecipe)
        };
    }

    const handleInstArrClick = (e) => {
        e.preventDefault();
        if(recipe.instruction.length !== 0){
        setInstructionsArr([
            ...instructionsArr,
            recipe.instruction
        ]);
        setRecipe({ instruction: "" })};
    };
    const handleIngrArrClick = (e) => {
        e.preventDefault();
        if(recipe.ingredients.length !== 0){
        setIngredientsArr([
            ...ingredientsArr,
            recipe.ingredients
        ]);
        setRecipe({ingredients: ""})};
    };

    return (
        <section className="application">
            <div className="display-add-recipe">
                <div className="add-recipe-page">
                    <div className="container-recipe">
                        <div className="content-recipe">
                            <div className="header">
                                <h1>nowy przepis</h1>
                                <button onClick={onClick}><a>Zapisz i zamknij</a></button>
                            </div>
                            <div className="about-recipe">
                            <div className="warn"><span className={warnIcon}>
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                    <span>{warn}</span>
                                </div>
                                <form>
                                    <label> Nazwa przepisu
                                        <input type="text" name="recipeName" onBlur={handleBlur}
                                            value={recipe.name} onChange={handleChange}>
                                        </input>
                                    </label>
                                    <label> Opis przepisu
                                        <textarea rows="4" name="description" onBlur={handleBlur}
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
                                            <button onClick={handleInstArrClick} className="fas fa-plus-square"></button>
                                        </form>

                                    </div>
                                    
                                </div>
                                <div className="recipe">
                                    <h1>składniki</h1>
                                    <div className="input">
                                        <form>
                                            <input type="text" name="ingredients"
                                                value={recipe.ingredients} onChange={handleChange}>
                                            </input>
                                            <button onClick={handleIngrArrClick} className="fas fa-plus-square"
                                                type="submit" >
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="list">
                            <div className="list-map">
                                        <ul>
                                            {instructionsArr.map((el, i) => {
                                                return <li key={i}><span>{i + 1}. </span>{el}</li>
                                            })}
                                        </ul>
                                    </div>
                            <div className="list-map">
                                <ul>
                                    {ingredientsArr.map((el, i) => {
                                        return <li key={i}><span>{i + 1}. </span>{el}</li>
                                    })}
                                </ul>
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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { putRecipe } from "./dataFunc";
import '../../scss/style.scss';

const EditRecipe = () => {
    const [editRecipe, setEditRecipe] = useState({
        recipeName: "",
        description: "",
        instruction: "",
        ingredients: ""
    });
    const [editInstructionsArr, setEditInstructionsArr] = useState([]);
    const [editIngredientsArr, setEditIngredientsArr] = useState([]);
    const [warn, setWarn] = useState("");
    const [warnIcon, setWarnIcon] = useState("disabled");
    const [updateRecipeValid, setUpdateRecipeValid] = useState(true);

    const localUser = localStorage.getItem('userName');
    const API = "http://localhost:3005/recipes";
    const editID = localStorage.getItem("editRecipeID");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditRecipe(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    useEffect(() => {
        fetch(`${API}/${editID}`)
            .then(res => res.json())
            .then(data => {
                setEditRecipe({recipeName: data.recipeName, 
                    description: data.description,
                })
                setEditInstructionsArr(data.instruction)
                setEditIngredientsArr(data.ingredients)
            })
            .catch((err) => console.warn(err))
    }, []);

    const handleBlur = () => {
        if (editRecipe.recipeName.length === 0){
            setWarn("Żadne pole nie może być puste")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else if (editRecipe.description.length === 0){
            setWarn("Żadne pole nie może być puste")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else if (editRecipe.recipeName.length <3){
            setWarn("Minimalna ilość znaków to 3")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else if (editRecipe.description.length <3){
            setWarn("Minimalna ilość znaków to 3")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else if (editRecipe.recipeName.length > 60) {
            setWarn("Nazwa powinna mieć maksymalnie 60 znaków")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else if (editRecipe.description.length > 360) {
            setWarn("Opis powinien mieć maksymalnie 360 znaków")
            setWarnIcon("")
            setUpdateRecipeValid(false)
        }
        else {
            setWarn("")
            setWarnIcon("disabled")
            setUpdateRecipeValid(true)
        }

    }

   const onClick = (e) => {
        e.preventDefault();
        if(updateRecipeValid === true){
            const updateRecipe = {
                user: localUser,
                recipeName: editRecipe.recipeName,
                description: editRecipe.description,
                instruction: editInstructionsArr,
                ingredients: editIngredientsArr
            };
        putRecipe(updateRecipe, editID)
        };
        localStorage.removeItem("editRecipeID")
        window.location.reload();
    }

    const handleInstArrClick = (e) => {
        e.preventDefault();
        if(editRecipe.instruction.length !== 0){
        setEditInstructionsArr([
            ...editInstructionsArr,
            editRecipe.instruction
        ]);
        setEditRecipe({ instruction: "" })};
    };
    const handleIngrArrClick = (e) => {
        e.preventDefault();
        if(editRecipe.ingredients.length !== 0){
        setEditIngredientsArr([
            ...editIngredientsArr,
            editRecipe.ingredients
        ]);
        setEditRecipe({ingredients: ""})};
    };

    return editRecipe ?
        <section className="application">
            <div className="display-add-recipe">
                <div className="add-recipe-page">
                    <div className="container-recipe">
                        <div className="content-recipe">
                            <div className="header">
                                <h1>edytuj przepis</h1>
                                <button onClick={onClick}><Link to="/recipelist"><a>Zapisz i zamknij</a></Link></button>
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
                                            value={editRecipe.recipeName} onChange={handleChange}>
                                        </input>
                                    </label>
                                    <label> Opis przepisu
                                        <textarea rows="4" name="description" onBlur={handleBlur}
                                            value={editRecipe.description} onChange={handleChange}>
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
                                                value={editRecipe.instruction} onChange={handleChange}>
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
                                                value={editRecipe.ingredients} onChange={handleChange}>
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
                                            {editInstructionsArr.map((el, i) => {
                                                return <li key={i}><span>{i + 1}. </span>{el}</li>
                                            })}
                                        </ul>
                                    </div>
                            <div className="list-map">
                                <ul>
                                    {editIngredientsArr.map((el, i) => {
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
    : <h1>Ładowanie danych</h1>
}

export default EditRecipe;
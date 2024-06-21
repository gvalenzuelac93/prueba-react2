import { IoPizzaOutline } from "react-icons/io5";

const Ingredients = ({ ingredients })=> {
    return(
       <div className="ingredients">
            <p className="bold">Ingredientes:</p>
            <ul>
                {
                    ingredients.map((ingredient)=>{
                        return (
                            <li key={ingredient}><IoPizzaOutline /> {ingredient}</li>
                        )
                    })
                }
            </ul>
       </div>
    )
}

export default Ingredients
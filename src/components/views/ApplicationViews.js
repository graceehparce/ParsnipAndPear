import { Outlet, Route, Routes } from "react-router-dom"
import { Phases } from "../phases/phases"
import { RecipeList } from "../recipes/recipeList"
import { RecipeProfile } from "../recipes/recipeProfile"
import { PhaseProfile } from "../phases/phaseDetails"
import { MyRecipes } from "../recipes/myRecipe"
import { ShoppingList } from "../recipes/shoppingList"
import { NewRecipeForm } from "../recipes/newRecipeForm"
import { IngredientEdit } from "../recipes/ingredientEdit"
import banner from "../images/banner.jpg"
import "./views.css"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
                <>
                    <div className="banner">
                        <img src={banner} alt="banner_img" className="banner_img" style={{ width: '650px', height: '150px' }} />
                    </div>
                    <Outlet />
                </>
            }>
                <Route path="phases" element={<Phases />} />
                <Route path="recipes/:phaseId" element={<RecipeList />} />
                <Route path="recipe/:recipeId" element={<RecipeProfile />} />
                <Route path="phase/:phaseId" element={<PhaseProfile />} />
                <Route path="myRecipes" element={<MyRecipes />} />
                <Route path="shoppingList" element={<ShoppingList />} />
                <Route path="recipeForm" element={<NewRecipeForm />} />
                <Route path="ingredientEdit/:userIngredientId" element={<IngredientEdit />} />





            </Route>
        </Routes>
    </>
}
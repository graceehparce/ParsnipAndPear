import { Outlet, Route, Routes } from "react-router-dom"
import { Phases } from "../phases/phases"
import { RecipeList } from "../recipes/recipeList"
import { RecipeProfile } from "../recipes/recipeProfile"
import { PhaseProfile } from "../phases/phaseDetails"
import { MyRecipes } from "../recipes/myRecipe"
import { ShoppingList } from "../recipes/shoppingList"
import { NewRecipeForm } from "../recipes/newRecipeForm"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Parsnip And Pear</h1>
                    <div>parse your cycle, pair your life</div>

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





            </Route>
        </Routes>
    </>
}
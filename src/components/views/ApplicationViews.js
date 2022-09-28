import { Outlet, Route, Routes } from "react-router-dom"
import { Phases } from "../phases/phases"
import { RecipeList } from "../recipes/recipeList"
import { RecipeProfile } from "../recipes/recipeProfile"
import { PhaseProfile } from "../phases/phaseDetails"
import { MyRecipes } from "../recipes/myRecipe"
import { ShoppingList } from "../recipes/shoppingList"
import { NewRecipeForm } from "../recipes/newRecipeForm"
import { IngredientEdit } from "../recipes/ingredientEdit"
import { PhaseInfoGraphic } from "../phases/phaseInfoGraphic"
import { Home } from "../home/home"
import { Resources } from "../resources/resources"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="" element={<Home />} />
                <Route path="phases" element={<Phases />} />
                <Route path="recipes/:phaseId" element={<RecipeList />} />
                <Route path="recipe/:recipeId" element={<RecipeProfile />} />
                <Route path="phase/:phaseId" element={<PhaseProfile />} />
                <Route path="myRecipes" element={<MyRecipes />} />
                <Route path="shoppingList" element={<ShoppingList />} />
                <Route path="recipeForm" element={<NewRecipeForm />} />
                <Route path="resources" element={<Resources />} />
                <Route path="phaseInfoGraphic/:phaseId" element={<PhaseInfoGraphic />} />
                <Route path="ingredientEdit/:userIngredientId" element={<IngredientEdit />} />





            </Route>
        </Routes>
    </>
}
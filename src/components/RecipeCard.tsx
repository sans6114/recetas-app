import { Recipe } from '@/interfaces/recipe.interface';

import { PrimaryBtn } from './common/PrimaryBtn';

interface Props {
    recipeCardProps: Recipe
}


export const RecipeCard = ({ recipeCardProps }: Props) => {
    return (

        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                <img
                    className="w-full h-full object-cover"
                    src={recipeCardProps.strMealThumb}
                    alt="profile-picture"
                />
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                    {recipeCardProps.strMeal}
                </h4>
                <p className="text-sm font-semibold text-slate-500 uppercase">
                    category: {recipeCardProps.strCategory}
                </p>
                <p className="text-base text-slate-600 mt-4 font-light">
                    intructions: {recipeCardProps.strInstructions}
                </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                <PrimaryBtn btnTitle='...more' btnUrl={`/recipe/${recipeCardProps.idMeal}`} />
            </div>
        </div>
    )
}

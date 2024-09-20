import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Heading } from '@/components/common/Heading';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchRecipe } from '@/components/SearchRecipe';
import { Recipe } from '@/interfaces/recipe.interface';

export const RecetasApp = () => {
  //array de strings siempre
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [search, setSearch] = useState<string>('Arrabiata')

  const fetchRecipes = useCallback(async (search: string) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      if (!res.ok) {
        throw new Error('error with response')
      }
      const data = await res.json()
      if (data.meals) {
        setRecipes(data.meals)
      } else {
        setRecipes([])
      }
    } catch (error) {
      console.log(error)
      setRecipes([])
    }
  }, [])

  useEffect(() => {
    fetchRecipes(search)
  }, [search])
  const onAddSearch = useCallback((inputValue: string) => {
    setSearch(inputValue)
  }, [search])

  return (
    <>
      <main className="flex flex-col max-w-7xl mx-auto items-center p-10 gap-y-10">
        <Heading heading='Recipe App' />
        {/* search-recipe component */}
        <SearchRecipe onAddRecipe={onAddSearch} />
        {/* recipe component */}

        <div className="flex gap-x-2 justify-center">
          {
            recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipeCardProps={recipe}/>)
          }
        </div>

      </main>

    </>
  )
}

import { useState } from 'react';

import Swal from 'sweetalert2';

import { Heading } from '@/components/common/Heading';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchRecipe } from '@/components/SearchRecipe';
import { Recipe } from '@/interfaces/recipe.interface';

import { getByName } from './helpers/getRecipeByName';

interface Error {
  message?: string,
  isError: boolean
}

export const SearchPage = () => {
  // const MySwal = withReactContent(Swal)
  //array de strings siempre
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [error, setError] = useState<Error>({
    message: '',
    isError: false
  })

  

  const getRecipes = async (search: string) => {
    if (search.trim().length === 0) {
      setError({
        message: 'Haz una busqueda valida',
        isError: true
      })
    } else {
      try {
        const data = await getByName(search)
        if (!data) {
          setError(
            {
              message: 'No hay busquedas relacionadas con el nombre de la comida',
              isError: true
            }
          )
          return
        }
        setRecipes(data)
        setError({
          isError: false
        })
      } catch (error) {
        setRecipes([])
        if (error) {
          Swal.fire({
            title: 'Error en la busqueda',
            icon: 'error'
          })
          throw new Error('nombre de meal invalido, prueba con otra')
        }
      }
    }
  }
  return (
    <section className='flex flex-col items-center gap-y-4 w-full'>
      <Heading heading='Search your recipe' />
      {/* search-recipe component */}
      <SearchRecipe onAddRecipe={getRecipes} />
      {/* recipe component */}
      {
        error.isError ? (
          <div>
            <p>{error.message}</p>
          </div>
        ) : (
          <div className="flex gap-x-2 justify-center">
            {
              recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipeCardProps={recipe} />)
            }
          </div>
        )
      }
    </section>
  )
}

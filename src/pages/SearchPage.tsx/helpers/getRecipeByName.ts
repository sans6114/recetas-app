import { Recipe } from '@/interfaces/recipe.interface';

export const getByName = async (name: string): Promise<Recipe[]> => {
    name = name.toLowerCase().trim()
    if (name.length === 0) {
        return
    }
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const data = await res.json()
    return data.meals as Recipe[]
}
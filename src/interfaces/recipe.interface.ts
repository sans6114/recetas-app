export interface Recipe {
        idMeal: string;
        strMeal: string;
        strCategory: string;
        strArea: string;
        strInstructions: string;
        strMealThumb: string;
        strTags?: string;
        strYoutube?: string;
        ingredients: {
          ingredient: string;
          measure: string;
        }[];
}
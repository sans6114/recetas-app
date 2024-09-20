import { Heading } from '@/components/common/Heading';
import { SearchRecipe } from '@/components/SearchRecipe';

export const RecetasApp = () => {
  return (
    <>
      <main className="flex flex-col max-w-7xl mx-auto items-center">
        <Heading heading='Recipe App' />
        {/* search-recipe component */}
        <SearchRecipe />
        {/* recipe component */}

      </main>

    </>
  )
}

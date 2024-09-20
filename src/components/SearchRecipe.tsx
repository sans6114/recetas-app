export const SearchRecipe = () => {

  return (
    <form
      aria-label='form'
      className='flex bg-gray-500 rounded-2xl p-2'
    >
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name='recipe'
        placeholder="Search recipe"
        type="text"
      />


      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Search</button>
    </form>
  )
}

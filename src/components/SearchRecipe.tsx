import { useState } from 'react';

interface Props {
  onAddRecipe: (recipe: string) => void,
}

export const SearchRecipe = ({ onAddRecipe }: Props) => {
  const [inputValue, setinputValue] = useState('')


  const onInputChange = ({ target }) => {
    setinputValue(target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    onAddRecipe(inputValue)
    setinputValue('')
  }

  return (
    <form
      aria-label='form'
      className='flex bg-gray-200 shadow-xl rounded-2xl p-2'
      onSubmit={onSubmit}
    >
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name='recipe'
        value={inputValue}
        onChange={onInputChange}
        placeholder="Search recipe"
        type="text"
      />


      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Search</button>
    </form>
  )
}

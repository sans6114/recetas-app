import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
<nav className='flex justify-around shadow-2xl fixed top-0 w-full p-2 border-b-2 border-black bg-gray-100 py-3 z-50'>
<NavLink
  to="/categories-recipe"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold border-b-2 border-blue-500" : ""
  }
>
  Categories
</NavLink>
<NavLink
  to="/search-recipe"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold border-b-2 border-blue-500" : ""
  }
>
  Search recipe
</NavLink>
<NavLink
  to="/favourites-recipe"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold border-b-2 border-blue-500" : ""
  }
>
  Favourites
</NavLink>
</nav>
  )
}

import { Outlet } from 'react-router';

import { NavBar } from '@/components/common/NavBar';

export const RecetasApp = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow mx-auto px-4 py-8 absolute top-1/4 z-0">
          <Outlet />
        </main>
        <footer className="bg-gray-100 py-4 fixed bottom-0 w-full">
          <div className="container mx-auto px-4 text-center">
            © {new Date().getFullYear()} RecetasApp
          </div>
        </footer>
      </div>

    </>
  )
}

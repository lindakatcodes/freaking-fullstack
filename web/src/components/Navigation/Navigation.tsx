import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Navigation = () => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <nav className="z-1 col-start-1 col-end-2 row-start-1 row-end-2 flex h-11 items-center justify-end gap-1 bg-black p-3 drop-shadow-md">
      {isAuthenticated ? (
        <div className="grid w-full grid-flow-col grid-cols-6 items-center">
          <div className="col-span-4 flex">
            <Link to={routes.feed()} className="mx-4 font-bold text-white">
              Links Shared
            </Link>
            <Link to={routes.feed()} className="mx-4 font-bold text-white">
              Comments
            </Link>
            <Link to={routes.feed()} className="mx-4 font-bold text-white">
              Favorites
            </Link>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="button"
              onClick={logOut}
              className="mx-4 font-bold text-white"
            >
              Logout
            </button>
            <Link
              to={routes.feed()}
              className="mx-4 bg-blue px-4 py-1 font-bold"
            >
              My Profile
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link to={routes.signup()} className="mx-4 font-bold text-white">
            Sign Up
          </Link>
          <Link
            to={routes.login()}
            className=" mx-4 bg-blue px-4 py-1 font-bold"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation

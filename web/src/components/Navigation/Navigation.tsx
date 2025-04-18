import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Navigation = () => {
  const { isAuthenticated, logOut, currentUser } = useAuth()

  return (
    <nav className="flex h-12 w-full items-center justify-end gap-1 bg-black text-xs drop-shadow-md md:absolute md:top-0 md:z-10 md:p-3 md:text-base">
      {isAuthenticated ? (
        <div className="grid w-full grid-flow-col grid-cols-6 items-center">
          <div className="col-span-4 flex items-center md:items-stretch">
            <Link
              to={routes.userLinks({ id: currentUser.id })}
              className="mx-2 font-bold text-white md:mx-4"
            >
              Links Shared
            </Link>
            <Link
              to={routes.userComments({ id: currentUser.id })}
              className="mx-2 font-bold text-white md:mx-4"
            >
              Comments
            </Link>
            <Link
              to={routes.editProfile()}
              className="mx-2 font-bold text-white md:mx-4"
            >
              Edit Profile
            </Link>
            <Link
              to={routes.submitLink()}
              className="mx-2 font-bold text-white md:mx-4"
            >
              Submit Link
            </Link>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="button"
              onClick={logOut}
              className="mx-2 font-bold text-white md:mx-4"
            >
              Logout
            </button>
            <Link
              to={routes.userProfile({ id: currentUser.id })}
              className="mx-2 bg-blue px-2 py-0 font-bold md:mx-4 md:px-4 md:py-1"
            >
              My Profile
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link
            to={routes.signup()}
            className="mx-2 font-bold text-white md:mx-4"
          >
            Sign Up
          </Link>
          <Link
            to={routes.login()}
            className="mx-2 bg-blue px-2 py-0 font-bold md:mx-4 md:px-4 md:py-1"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation

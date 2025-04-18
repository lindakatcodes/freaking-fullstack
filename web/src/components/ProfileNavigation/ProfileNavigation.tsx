import { Link, NavLink, routes, useParams } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const ProfileNavigation = () => {
  // converting the id to a number is necessary here because we're getting it from useParams, which is always going to be a string
  const { id } = useParams()
  const { currentUser } = useAuth()

  const isCurrentUser = currentUser && currentUser.id === Number(id)

  return (
    <>
      <nav className="flex items-center justify-between gap-4 md:justify-normal">
        <NavLink
          className="text-md w-min font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-md md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userLinks({ id: Number(id) })}
        >
          Links Shared
        </NavLink>
        <NavLink
          className="text-md w-min font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-md md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userComments({ id: Number(id) })}
        >
          Comments
        </NavLink>
        <NavLink
          className="text-md w-min font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-md md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userProfile({ id: Number(id) })}
        >
          Profile
        </NavLink>
        <div className="invisible md:visible md:flex-grow"></div>
        {isCurrentUser && (
          <Link
            className="text-md w-min font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
            to={routes.editProfile()}
          >
            Edit Profile
          </Link>
        )}
      </nav>
      <div className="mb-1 mt-3 border border-yellow" />
    </>
  )
}

export default ProfileNavigation

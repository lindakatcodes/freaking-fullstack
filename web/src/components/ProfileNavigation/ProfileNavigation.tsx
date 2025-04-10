import { Link, NavLink, routes } from '@redwoodjs/router'

const ProfileNavigation = () => {
  return (
    <>
      <nav className="flex items-center justify-between gap-4 md:justify-normal">
        <NavLink
          className="w-min text-lg font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userLinks()}
        >
          Links Shared
        </NavLink>
        <NavLink
          className="w-min text-lg font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userComments()}
        >
          Comments
        </NavLink>
        <NavLink
          className="w-min text-lg font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          activeClassName="md:w-auto w-min text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userProfile()}
        >
          Profile
        </NavLink>
        <div className="invisible md:visible md:flex-grow"></div>
        <Link
          className="w-min text-lg font-bold uppercase tracking-tighter text-blue md:w-auto md:text-2xl lg:text-3xl"
          to={routes.editProfile()}
        >
          Edit Profile
        </Link>
      </nav>
      <div className="mb-1 mt-3 border border-yellow" />
    </>
  )
}

export default ProfileNavigation

import { Link, NavLink, routes } from '@redwoodjs/router'

const ProfileNavigation = () => {
  return (
    <>
      <nav className="flex gap-4">
        <NavLink
          className="text-3xl font-bold uppercase tracking-tighter text-blue"
          activeClassName="text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userLinks()}
        >
          Links Shared
        </NavLink>
        <NavLink
          className="text-3xl font-bold uppercase tracking-tighter text-blue"
          activeClassName="text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userComments()}
        >
          Comments
        </NavLink>
        <NavLink
          className="text-3xl font-bold uppercase tracking-tighter text-blue"
          activeClassName="text-3xl font-bold uppercase tracking-tighter text-yellow"
          to={routes.userProfile()}
        >
          Profile
        </NavLink>
        <div className="flex-grow"></div>
        <Link
          className="text-3xl font-bold uppercase tracking-tighter text-blue"
          to={routes.editProfile()}
        >
          Edit My Profile
        </Link>
      </nav>
      <div className="mb-1 mt-3 border border-yellow" />
    </>
  )
}

export default ProfileNavigation

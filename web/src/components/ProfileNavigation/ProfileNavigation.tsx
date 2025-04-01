import { NavLink, routes } from '@redwoodjs/router'

const ProfileNavigation = () => {
  return (
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
        to={routes.home()}
      >
        Profile
      </NavLink>
    </nav>
  )
}

export default ProfileNavigation

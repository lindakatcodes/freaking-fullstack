const Header = () => {
  return (
    <div>
      <nav className="flex h-16 w-full items-center justify-end gap-1 bg-black p-3 drop-shadow-md">
        <p className="text-white mx-2 font-bold">Sign Up</p>
        <p className=" mx-2 bg-blue p-2 font-bold">Login</p>
      </nav>
      <div className="relative h-[8.5rem] w-full bg-black">
        <h1 className="text-nowrap font-serif text-[11rem] font-bold leading-[0.875] tracking-wider text-yellow">
          Brazilian Nut <span className="text-outline text-black">News</span>
        </h1>
        <p className="fixed right-0 top-20 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </div>
  )
}

export default Header

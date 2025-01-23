const Header = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[0.75fr_1fr]">
      <nav className="h-10 col-start-1 col-end-2 row-start-1 row-end-2 z-1 flex items-center justify-end gap-1 bg-black p-3 drop-shadow-md">
        <p className="text-white mx-2 font-bold">Sign Up</p>
        <p className=" mx-2 bg-blue p-2 font-bold">Login</p>
      </nav>
      <div className="h-28 col-start-1 col-end-2 row-start-1 row-end-3 bg-black">
        <h1 className="mx-auto text-center text-nowrap text-9xl font-serif font-bold tracking-wider text-yellow">
          Brazilian Nut <span className="text-outline text-black">News</span>
        </h1>
        <p className="absolute top-20 right-4 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </div>
  )
}

export default Header

import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[0.75fr_1fr]">
      <Navigation />
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 h-28 bg-black">
        <h1 className="mx-auto text-nowrap text-center font-serif text-[clamp(4rem,8.5vw,9rem)] font-bold leading-[1.5] tracking-wider text-yellow">
          Brazilian Nut{' '}
          <span className="text-stroke-width text-stroke-color-yellow text-transparent">
            News
          </span>
        </h1>
        <p className="absolute right-4 top-20 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </div>
  )
}

export default Header

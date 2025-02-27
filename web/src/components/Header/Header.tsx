import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="pointer-events-none relative w-full bg-black">
        <h1 className="whitespace-nowrap pt-4 text-center font-serif text-[11vw] font-bold leading-[0.875] tracking-wider text-yellow md:text-[10vw]">
          Brazilian Nut{' '}
          <span className="text-stroke-width text-stroke-color-yellow text-transparent">
            News
          </span>
        </h1>
        <p className="absolute bottom-9 right-0 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </>
  )
}

export default Header

import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="pointer-events-none relative bg-black">
        <h1 className="text-nowrap pt-4 text-center font-serif text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.875] tracking-wider text-yellow">
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

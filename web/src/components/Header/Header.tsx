const Header = () => {
  return (
    <>
      <div className="@container pointer-events-none relative w-full bg-black">
        <h1 className="whitespace-nowrap pt-4 text-center font-serif text-[11cqw] font-bold leading-[0.875] tracking-wider text-yellow">
          Brazilian Nut{' '}
          <span className="text-outline-yellow text-black">News</span>
        </h1>
        <p className="absolute bottom-9 right-0 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </>
  )
}

export default Header

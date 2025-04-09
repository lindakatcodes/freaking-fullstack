const Header = () => {
  return (
    <>
      <div className="@container pointer-events-none relative w-full bg-black">
        <h1 className="whitespace-nowrap pt-6 text-center font-serif text-[11cqw] font-bold leading-[0.875] tracking-wider text-yellow md:pt-4">
          Brazilian Nut{' '}
          <span className="text-outline-yellow text-black">News</span>
        </h1>
        <p className="bg-black px-2 text-center font-display text-xs uppercase text-yellow md:px-4 md:text-base lg:absolute lg:bottom-5 lg:right-0 lg:text-right 2xl:bottom-9">
          Where the best news rises to the top
        </p>
      </div>
    </>
  )
}

export default Header

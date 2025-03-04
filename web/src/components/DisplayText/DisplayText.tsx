const DisplayText = ({
  solidText,
  outlineText,
}: {
  solidText: string
  outlineText: string
}) => {
  return (
    <div className="pl-4">
      <p
        className={`inline-block w-min font-serif text-[30vw] font-bold uppercase leading-none tracking-wide text-white xl:text-[22vw] 2xl:text-[19vw]`}
      >
        {solidText}
      </p>
      <p
        className={`text-outline-blue inline-block w-min font-serif text-[30vw] font-bold uppercase leading-none tracking-wide text-black xl:text-[22vw] 2xl:text-[19vw]`}
      >
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

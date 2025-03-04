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
        className={`font-serif text-[25vw] font-bold uppercase leading-none tracking-wide text-white`}
      >
        {solidText}
      </p>
      <p
        className={`text-outline-blue font-serif text-[25vw] font-bold uppercase leading-none tracking-wide text-black`}
      >
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

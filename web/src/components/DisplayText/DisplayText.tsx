const DisplayText = ({
  solidText,
  outlineText,
}: {
  solidText: string
  outlineText: string
}) => {
  return (
    <>
      <p className={`font-serif text-[11vw] font-bold uppercase tracking-wide`}>
        {solidText}
      </p>
      <p className={`font-serif text-[11vw] font-bold uppercase tracking-wide`}>
        {outlineText}
      </p>
    </>
  )
}

export default DisplayText

const DisplayText = ({
  solidText,
  outlineText,
}: {
  solidText: string
  outlineText: string
}) => {
  return (
    <div>
      <p className="font-serif text-9xl font-bold uppercase">{solidText}</p>
      <p className="text-stroke-width text-stroke-color-blue font-serif text-9xl font-bold uppercase">
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

const DisplayText = ({
  solidText,
  solidTextColor,
  outlineText,
  outlineColor,
}: {
  solidText: string
  solidTextColor: 'white' | 'black'
  outlineText: string
  outlineColor: 'black' | 'blue'
}) => {
  const solidTextColorClasses = {
    white: 'text-white',
    black: 'text-black',
  }

  const outlineColorClasses = {
    black: 'text-stroke-color-black',
    blue: 'text-stroke-color-blue',
  }

  return (
    <div className="flex w-full flex-wrap gap-2 leading-none">
      <p
        className={`min-w-fit font-serif text-[min(20vw,14rem)] font-bold uppercase ${solidTextColorClasses[solidTextColor]}`}
      >
        {solidText}
      </p>
      <p
        className={`text-stroke-width min-w-fit ${outlineColorClasses[outlineColor]} font-serif text-[min(20vw,14rem)] font-bold uppercase text-transparent`}
      >
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

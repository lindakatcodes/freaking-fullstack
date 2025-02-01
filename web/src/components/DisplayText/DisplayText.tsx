const DisplayText = ({
  solidText,
  outlineText,
  outlineColor,
}: {
  solidText: string
  outlineText: string
  outlineColor: 'black' | 'blue' | 'yellow'
}) => {
  const outlineColorClasses = {
    black: 'text-stroke-color-black',
    blue: 'text-stroke-color-blue',
    yellow: 'text-stroke-color-yellow',
  }

  return (
    <div className="flex w-full flex-wrap gap-2 leading-none">
      <p className="min-w-fit font-serif text-[min(20vw,14rem)] font-bold uppercase">
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

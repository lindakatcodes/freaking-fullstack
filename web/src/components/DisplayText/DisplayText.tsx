const DisplayText = ({
  solidText,
  outlineText,
}: {
  solidText: string
  outlineText: string
}) => {
  return (
    <div className="@container pl-4">
      <p className="inline-block font-serif text-[20cqw] font-bold uppercase leading-none tracking-wide text-white">
        {solidText}
      </p>
      <p className="text-outline-blue inline-block font-serif text-[20cqw] font-bold uppercase leading-none tracking-wide text-black">
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

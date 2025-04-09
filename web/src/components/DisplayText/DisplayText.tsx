const DisplayText = ({
  solidText,
  outlineText,
}: {
  solidText: string
  outlineText: string
}) => {
  return (
    <div className="@container lg:pl-4">
      <p className="inline-block font-serif text-[25cqw] font-bold uppercase leading-none tracking-wide text-white lg:text-[20cqw]">
        {solidText}
      </p>
      <p className="text-outline-blue inline-block font-serif text-[25cqw] font-bold uppercase leading-none tracking-wide text-black lg:text-[20cqw]">
        {outlineText}
      </p>
    </div>
  )
}

export default DisplayText

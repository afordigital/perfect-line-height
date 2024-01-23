type Props = {
  onClick: () => void
  children: string
}

export const Button = (props: Props) => {
  const { onClick, children } = props

  return (
    <button
      onClick={onClick}
      className='flex items-center h-10 px-8 text-lg text-cTextPrimary font-semibold transition-colors duration-150 bg-cPrimary rounded-[4px] cursor-pointer focus:shadow-outline hover:bg-[#374257]'
    >
      {children}
    </button>
  )
}

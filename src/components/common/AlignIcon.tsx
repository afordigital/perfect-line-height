import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  active: boolean
  onClick: () => void
}

export const AlignIcon = (props: Props) => {
  const { children, active, onClick } = props
  return (
    <button
      onClick={onClick}
      className={`bg-cPrimary hover:bg-[#374257] p-1 text-cTextPrimary rounded-[4px] ${
        active && 'border-2 border-bluegray'
      }  `}
    >
      {children}
    </button>
  )
}

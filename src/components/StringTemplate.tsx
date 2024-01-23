import { useState } from 'react'
import { AlignIcon } from './common/AlignIcon'
import { AlignLeft, AlignJustify, AlignRight } from 'lucide-react'
import { MODE, MODE_VIEW_TO_ALIGNMENT } from '../constants'

export const StringTemplate = ({
  fontSize,
  fontFamily
}: {
  fontSize: number
  fontFamily: string
}) => {
  const [modeView, setModeView] = useState(MODE.LEFT)

  const handleView = (view: string) => {
    setModeView(view)
  }

  return (
    <div className='space-y-4'>
      <div className='flex gap-x-2 w-fit h-fit'>
        <AlignIcon
          active={modeView === MODE.LEFT}
          onClick={() => handleView(MODE.LEFT)}
        >
          <AlignLeft />
        </AlignIcon>
        <AlignIcon
          active={modeView === MODE.CENTER}
          onClick={() => handleView(MODE.CENTER)}
        >
          <AlignJustify />
        </AlignIcon>
        <AlignIcon
          active={modeView === MODE.RIGHT}
          onClick={() => handleView(MODE.RIGHT)}
        >
          <AlignRight />
        </AlignIcon>
      </div>
      <article
        className='custom-lines p-6 w-full text-cTextSecondary font-semibold'
        style={{ fontSize: fontSize }}
      >
        <p className={`${MODE_VIEW_TO_ALIGNMENT[modeView]} font-${fontFamily}`}>
          Lorem Ipsum is simply the filler text of the printing presses template
        </p>
      </article>
    </div>
  )
}

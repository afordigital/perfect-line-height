import { ChevronDown, ChevronUp } from 'lucide-react'
import { TYPOGRAPHY } from '../constants'

type Props = {
  fontSize: number
  fontFamily: string
  setFontSize: React.Dispatch<React.SetStateAction<number>>
  setFontFamily: React.Dispatch<React.SetStateAction<string>>
}

export const FontSizeSlider = (props: Props) => {
  const { fontSize, fontFamily, setFontSize, setFontFamily } = props

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10)
    setFontSize(newSize)
  }

  const handleChangeTypography = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setFontFamily(event?.target.value)

  const optionStyle = 'bg-cPrimary h-10 text-lg text-cTextPrimary font-semibold'

  return (
    <>
      <div className='grid'>
        <div className='relative w-full flex items-center'>
          <select
            onChange={handleChangeTypography}
            value={fontFamily}
            className='grow appearance-none bg-transparent row-start-1 col-start-1 border-2 border-cPrimary text-cTextPrimary p-2 font-semibold'
          >
            <option className={optionStyle} value={TYPOGRAPHY.INTER}>
              Inter
            </option>
            <option className={optionStyle} value={TYPOGRAPHY.ROBOTO}>
              Roboto
            </option>
            <option className={optionStyle} value={TYPOGRAPHY.MONTSERRAT}>
              Montserrat
            </option>
          </select>
          <ChevronDown className='text-cTextPrimary absolute right-4' />
        </div>
      </div>
      <div className='flex justify-between items-center font-semibold mb-4 text-[24px]'>
        <label>
          <p className='text-cTextPrimary'>Font Size</p>
        </label>
        <p className='p-2 text-cTextPrimary border-2 border-cPrimary rounded-[4px] flex items-center justify-center w-[64px] h-[40px]'>
          {fontSize}
        </p>
      </div>
      <div className='grid place-items-center'>
        <input
          type='range'
          min='8'
          max='72'
          value={fontSize}
          onChange={handleFontSizeChange}
          className='custom-slider bg-transparent appearance-none cursor-pointer w-60'
        />
      </div>
    </>
  )
}

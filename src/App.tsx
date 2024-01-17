import { useState } from 'react'

function App() {
  const [fontSize, setFontSize] = useState(16)

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10)
    setFontSize(newSize)
  }

  const calculateLineHeight = (size: number) => {
    const baseFontSize = 16
    const baseLineHeight = 1.5
    const minLineHeight = 1
    const maxLineHeight = 2

    // Fórmula inversamente proporcional ajustada con ligero acortamiento
    const lineHeight = baseLineHeight / (size / baseFontSize) - 0.1

    // Aplicamos límites superior e inferior
    const limitedLineHeight = Math.max(
      minLineHeight,
      Math.min(lineHeight, maxLineHeight)
    )

    return { fontSize: size, lineHeight: limitedLineHeight }
  }

  const { fontSize: calculatedFontSize, lineHeight } =
    calculateLineHeight(fontSize)

  return (
    <main className='w-screen min-h-screen flex flex-col justify-center items-center bg-cBackground'>
      <div className='w-full flex-1 flex flex-col justify-center items-center px-4'>
        <section className='flex flex-col gap-8 sm:gap-0'>
          <h1 className='text-[55px] sm:text-[90px] leading-16 sm:leading-normal text-center font-bold bg-gradient-to-b from-[#97A8DB] via-[#EBEEF8] to-[#546391] text-transparent bg-clip-text'>
            Perfect Line Height
          </h1>
          <h2 className='text-[20px] sm:text-[24px] text-cTextPrimary text-center'>
            Know the perfect height of your lines based on your font size.
          </h2>
        </section>
        <section className='flex mt-10 gap-8 flex-wrap w-full flex-col sm:flex-row items-center sm:justify-center'>
          <article className='w-full sm:w-[300px]'>
            <div className='flex justify-between items-center font-semibold mb-4 text-[20px] sm:text-[24px]'>
              <label>
                <p className='text-cTextPrimary'>Font Size</p>
              </label>
              <p className='p-2 text-cTextPrimary border-2 border-cPrimary rounded-[4px] flex items-center justify-center w-[64px] h-[40px]'>
                {fontSize}
              </p>
            </div>
            <input
              type='range'
              min='8'
              max='72'
              value={fontSize}
              onChange={handleFontSizeChange}
              className='w-full'
            />
            <div className='flex justify-between items-center font-semibold my-4 text-[20px] sm:text-[24px]'>
              <p className='text-cTextPrimary'>Line Height</p>
              <p className='p-2 text-cTextPrimary border-2 border-cPrimary rounded-[4px] flex items-center justify-center w-[64px] h-[40px]'>
                {lineHeight.toFixed(2)}
              </p>
            </div>
          </article>
          <article
            className='max-h-[250px] sm:h-auto sm:w-[500px] text-cTextSecondary overflow-auto '
            style={{ fontSize: fontSize }}
          >
            Lorem Ipsum is simply the filler text of the printing presses
            template
          </article>
        </section>
      </div>
      <footer className='text-cSecondary h-[50px] flex items-center'>
        Made with ❤️ by aforcita
      </footer>
    </main>
  )
}

export default App

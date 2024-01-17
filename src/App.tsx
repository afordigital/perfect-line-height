import { useState } from 'react'

function App () {
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
    <>
      {/* <div> */}
      {/* <header className="sticky top-0"></header> */} {/*  In case you need a sticky header, uncomment this line and the div above to make it work great. */}
      <main className='flex flex-col items-center'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h1 className='mt-50 text-[90px] font-bold bg-gradient-to-b from-[#97A8DB] via-[#EBEEF8] to-[#546391] text-transparent bg-clip-text'>
            Perfect Line Height
          </h1>
          <h2 className='text-[24px] text-cTextPrimary'>
            Know the perfect height of your lines based on your font size.
          </h2>
          <section className='flex mt-10 gap-x-8'>
            <article className='w-[300px]'>
              <div className='flex justify-between items-center font-semibold mb-4 text-[24px]'>
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
              <div className='flex justify-between items-center font-semibold my-4 text-[24px]'>
                <p className='text-cTextPrimary'>Line Height</p>
                <p className='p-2 text-cTextPrimary border-2 border-cPrimary rounded-[4px] flex items-center justify-center w-[64px] h-[40px]'>
                  {lineHeight.toFixed(2)}
                </p>
              </div>
            </article>
            <article
              className='w-[500px] text-cTextSecondary'
              style={{ fontSize: fontSize }}
            >
              Lorem Ipsum is simply the filler text of the printing presses
              template
            </article>
          </section>
        </div>
      </main>
      {/* </div> */}
      <footer className='flex items-center justify-center text-cSecondary py-4 mt-20'>
        Made with ❤️ by aforcita
      </footer>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'

import JSConfetti from 'js-confetti'
import { Toaster } from 'react-hot-toast'
import { showToast } from './CustomToast'

function App() {
  const [fontSize, setFontSize] = useState(16)
  const [currentString, setCurrentString] = useState<Array<string>>([]) // Update the type of currentString to be an array of strings

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10)
    setFontSize(newSize)
  }

  const handleKeyPress = (event: { key: string }) => {
    const keyPressed: string = event.key.toLowerCase()
    console.log(currentString.join(''))
    // keep 8 elements and remove the first one if the array is longer than 8
    if (currentString.length >= 8) {
      currentString.shift()
    }
    // add the key pressed to the array
    setCurrentString([...currentString, keyPressed]) // Fix the type error by updating the type of currentString
  }

  useEffect(() => {
    if (currentString.join('') === 'aforcita') {
      const confetti = new JSConfetti()
      confetti.addConfetti()
      setCurrentString([])
    }
  }, [currentString])

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [currentString])

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

  // Generamos el código y lo copiamos al clipbboard
  const generateCode = () => {
    const code = `font-size: ${fontSize}px; line-height: ${lineHeight.toFixed(
      2
    )};`
    navigator.clipboard.writeText(code)
    // Mostramos al usuario un mensaje avisando que el codigo esta en el clipboard
    showToast(code)
  }

  const { fontSize: calculatedFontSize, lineHeight } =
    calculateLineHeight(fontSize)

  return (
    <>
      {/* <div> */}
      {/* <header className='sticky top-0'></header> */}{' '}
      {/* Si quieres usar el header debes descomentar el div de arriba y abajo */}
      <main className='mt-50 w-full flex flex-col justify-center items-center'>
        <h1 className='text-[90px] font-bold bg-gradient-to-b from-[#97A8DB] via-[#EBEEF8] to-[#546391] text-transparent bg-clip-text'>
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
            <button
              onClick={generateCode}
              className='flex items-center gap-x-2 h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800'
            >
              <svg
                className='w-4 h-4 text-indigo-100'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4'
                ></path>
              </svg>
              Generate code
            </button>
          </article>
          <article
            className='w-[500px] text-cTextSecondary'
            style={{ fontSize: fontSize }}
          >
            Lorem Ipsum is simply the filler text of the printing presses
            template
          </article>
        </section>
      </main>
      {/* </div> */}
      <footer className='flex items-center justify-center py-5 mt-20 text-cSecondary'>
        Made with ❤️ by aforcita
      </footer>
      <Toaster />
    </>
  )
}

export default App

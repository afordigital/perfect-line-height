import { useEffect, useState } from 'react'

import JSConfetti from 'js-confetti'
import { Toaster } from 'react-hot-toast'
import { showToast } from './CustomToast'
import { calculateLineHeight } from './utils'
import { Footer } from './components/Footer'
import { StringTemplate } from './components/StringTemplate'
import { Title } from './components/Title'
import { Button } from './components/common/Button'
import { FontSizeSlider } from './components/FontSizeSlider'
import { TYPOGRAPHY } from './constants'

const App = () => {
  const [fontSize, setFontSize] = useState(16)
  const [currentString, setCurrentString] = useState<Array<string>>([])
  const [fontFamily, setFontFamily] = useState<string>(TYPOGRAPHY.INTER)

  const handleKeyPress = (event: { key: string }) => {
    const keyPressed: string = event.key.toLowerCase()
    console.log(currentString.join(''))
    if (currentString.length >= 8) {
      currentString.shift()
    }
    setCurrentString([...currentString, keyPressed])
  }

  useEffect(() => {
    if (currentString.join('') === 'aforcita') {
      const confetti = new JSConfetti()
      confetti.addConfetti()
      setCurrentString([])
    }
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [currentString])

  const generateCode = () => {
    const code = `font-size: ${fontSize}px; line-height: ${lineHeight.toFixed(
      2
    )};`
    navigator.clipboard.writeText(code)
    showToast(code)
  }

  const { fontSize: calculatedFontSize, lineHeight } =
    calculateLineHeight(fontSize)

  return (
    <>
      <main className='flex-1 mt-50 w-full h-full flex flex-col justify-center items-center overflow-hidden'>
        <Title />
        <section className='grid grid-cols-2 flex-1 mt-10 gap-x-24 max-w-5xl mx-auto overflow-hidden'>
          <article className='w-full space-y-8'>
            <FontSizeSlider
              fontSize={fontSize}
              fontFamily={fontFamily}
              setFontSize={setFontSize}
              setFontFamily={setFontFamily}
            />

            <div className='flex justify-between items-center font-semibold my-4 text-[24px]'>
              <p className='text-cTextPrimary'>Line Height</p>
              <p className='p-2 text-cTextPrimary border-2 border-cPrimary rounded-[4px] flex items-center justify-center w-[64px] h-[40px]'>
                {lineHeight.toFixed(2)}
              </p>
            </div>

            <div className='flex w-full justify-center'>
              <Button onClick={generateCode}>Copy CSS</Button>
            </div>
          </article>
          <StringTemplate fontSize={fontSize} fontFamily={fontFamily} />
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

export default App

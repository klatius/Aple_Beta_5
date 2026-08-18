import { useState } from 'react'
import CategoryGrid from './components/CategoryGrid'
import CategoryDetail from './components/CategoryDetail'
import Minidicionario from './components/Minidicionario'
import Minigramatica from './components/Minigramatica'
import WelcomeAudio from './components/WelcomeAudio'
import { categories } from './data/categories'
import type { Category } from './data/categories'

type Screen = 'home' | 'category' | 'dicionario' | 'gramatica'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [selectedCat, setSelectedCat] = useState<Category | null>(null)

  const goHome = () => {
    setScreen('home')
    setSelectedCat(null)
  }

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        minHeight: '100vh',
        background: '#F8F5EC',
      }}
    >
      {screen === 'home' && (
        <>
          <WelcomeAudio />

          <CategoryGrid
            categories={categories}
            onSelect={(cat) => {
              setSelectedCat(cat)
              setScreen('category')
            }}
            onDicionario={() => setScreen('dicionario')}
            onGramatica={() => setScreen('gramatica')}
          />
        </>
      )}

      {screen === 'category' && selectedCat && (
        <CategoryDetail
          category={selectedCat}
          onBack={goHome}
        />
      )}

      {screen === 'dicionario' && (
        <Minidicionario onBack={goHome} />
      )}

      {screen === 'gramatica' && (
        <Minigramatica onBack={goHome} />
      )}
    </div>
  )
}
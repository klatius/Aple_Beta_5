import { useState } from 'react'
import type { Category, Phrase } from '../data/categories'

interface Props {
  category: Category
  onBack: () => void
}

export default function CategoryDetail({ category, onBack }: Props) {
  const [flipped, setFlipped] = useState<number | null>(null)
  const [showPronunciation, setShowPronunciation] = useState<number | null>(null)

  const toggle = (i: number) => {
    setFlipped(flipped === i ? null : i)
    setShowPronunciation(null)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0e1f2b' }}>
      {/* Hero */}
      <div style={{
        background: `${category.bg}, #152536`,
        borderBottom: `2px solid ${category.accent}33`,
        padding: '32px 24px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40, width: 160, height: 160,
          borderRadius: '50%', background: `${category.accent}18`, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -20, left: -20, width: 100, height: 100,
          borderRadius: '50%', background: `${category.accent}12`, pointerEvents: 'none',
        }} />

        <button
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 10,
            color: '#f0f4f8',
            padding: '6px 14px',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 24,
            fontFamily: "'Nunito', sans-serif",
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
        >
          ← Categorias
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: `${category.accent}22`, border: `2px solid ${category.accent}66`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 40, flexShrink: 0,
          }}>
            {category.icon}
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 900,
              margin: '0 0 4px',
              color: '#f0f4f8',
              letterSpacing: '-0.02em',
            }}>
              {category.name}
            </h2>
            <p style={{ margin: '0 0 6px', color: category.accent, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {category.nameEn}
            </p>
            <p style={{ margin: 0, color: '#7a9ab5', fontSize: 14, maxWidth: 400 }}>
              {category.description}
            </p>
          </div>
        </div>

        <p style={{ margin: '20px 0 0', fontSize: 12, color: '#7a9ab5', fontWeight: 600 }}>
          Clique nas frases para ver a tradução · Click phrases to reveal translation
        </p>
      </div>

      {/* Phrases */}
      <main style={{ padding: '24px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {category.phrases.map((phrase, i) => (
            <PhraseCard
              key={i}
              index={i}
              phrase={phrase}
              accent={category.accent}
              isFlipped={flipped === i}
              showPron={showPronunciation === i}
              onFlip={() => toggle(i)}
              onPron={() => setShowPronunciation(showPronunciation === i ? null : i)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

interface PhraseCardProps {
  index: number
  phrase: Phrase
  accent: string
  isFlipped: boolean
  showPron: boolean
  onFlip: () => void
  onPron: () => void
}

function PhraseCard({ index, phrase, accent, isFlipped, showPron, onFlip, onPron }: PhraseCardProps) {
  return (
    <div style={{
      background: '#1a2d40',
      border: `1px solid ${isFlipped ? accent + '55' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: 16,
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <button
        onClick={onFlip}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: `${accent}22`, border: `1px solid ${accent}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 800, color: accent, flexShrink: 0,
        }}>
          {index + 1}
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#f0f4f8', lineHeight: 1.3 }}>
            {phrase.pt}
          </div>
          {isFlipped && (
            <div style={{ fontSize: 14, color: accent, fontWeight: 600, marginTop: 6 }}>
              {phrase.en}
            </div>
          )}
        </div>
        <div style={{
          fontSize: 18,
          color: isFlipped ? accent : '#7a9ab5',
          transition: 'transform 0.2s, color 0.2s',
          transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>↓</div>
      </button>

      {isFlipped && (
        <div style={{
          borderTop: `1px solid rgba(255,255,255,0.06)`,
          padding: '8px 20px 14px 64px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <button
            onClick={onPron}
            style={{
              background: showPron ? `${accent}22` : 'rgba(255,255,255,0.05)',
              border: `1px solid ${showPron ? accent + '55' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 8,
              padding: '4px 12px',
              fontSize: 11,
              fontWeight: 700,
              color: showPron ? accent : '#7a9ab5',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.15s',
            }}
          >
            🔊 Pronúncia
          </button>
          {showPron && (
            <span style={{ fontSize: 13, color: '#7a9ab5', fontStyle: 'italic', fontWeight: 600 }}>
              {phrase.pronunciation}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

import { useState, useMemo } from 'react'
import { dictionaryEntries, wordTypes, categoryNames } from '../data/dictionary'
import type { WordType } from '../data/dictionary'
import { categories } from '../data/categories'

const typeColors: Record<string, string> = {
  substantivo: '#2ec4b6',
  verbo: '#ff6b6b',
  adjetivo: '#f9d923',
  advérbio: '#9b59b6',
  pronome: '#ff9800',
  interjeição: '#e91e8c',
  expressão: '#3498db',
}

const typeColor = (t: string) => {
  for (const key of Object.keys(typeColors)) {
    if (t.includes(key)) return typeColors[key]
  }
  return '#7a9ab5'
}

const catAccent = (name: string) => categories.find(c => c.name === name)?.accent ?? '#7a9ab5'

interface Props { onBack: () => void }

export default function Minidicionario({ onBack }: Props) {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState<WordType>('todos')
  const [filterCat, setFilterCat] = useState('Todas')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return dictionaryEntries.filter(e => {
      const matchSearch = !q || e.word.toLowerCase().includes(q) || e.meaning.toLowerCase().includes(q) || e.meaningPt.toLowerCase().includes(q)
      const matchType = filterType === 'todos' || e.type.includes(filterType)
      const matchCat = filterCat === 'Todas' || e.category === filterCat
      return matchSearch && matchType && matchCat
    }).sort((a, b) => a.word.localeCompare(b.word, 'pt'))
  }, [search, filterType, filterCat])

  return (
    <div style={{ minHeight: '100vh', background: '#0e1f2b', fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #2ec4b622 0%, #3498db11 100%), #152536',
        borderBottom: '2px solid #2ec4b633',
        padding: '28px 24px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <button onClick={onBack} style={backBtn}>← Início</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '16px 0 4px' }}>
          <span style={{ fontSize: 36 }}>📖</span>
          <div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 900,
              margin: 0,
              color: '#f0f4f8',
              letterSpacing: '-0.02em',
            }}>Minidicionário</h2>
            <p style={{ margin: '2px 0 0', color: '#7a9ab5', fontSize: 13, fontWeight: 600 }}>
              {dictionaryEntries.length} palavras · {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <input
          type="text"
          placeholder="Buscar palavra ou significado..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12,
            padding: '10px 16px',
            color: '#f0f4f8',
            fontSize: 14,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            outline: 'none',
            marginTop: 12,
            boxSizing: 'border-box',
          }}
        />

        {/* Type filter */}
        <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
          {wordTypes.map(t => (
            <button key={t} onClick={() => setFilterType(t)} style={{
              background: filterType === t ? '#2ec4b6' : 'rgba(255,255,255,0.06)',
              border: `1px solid ${filterType === t ? '#2ec4b6' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 20,
              padding: '3px 12px',
              fontSize: 11,
              fontWeight: 700,
              color: filterType === t ? '#0e1f2b' : '#7a9ab5',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.15s',
            }}>{t}</button>
          ))}
        </div>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
          {categoryNames.map(c => {
            const acc = c === 'Todas' ? '#7a9ab5' : catAccent(c)
            const active = filterCat === c
            return (
              <button key={c} onClick={() => setFilterCat(c)} style={{
                background: active ? `${acc}33` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${active ? acc + '88' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 20,
                padding: '3px 11px',
                fontSize: 11,
                fontWeight: 700,
                color: active ? acc : '#7a9ab5',
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                transition: 'all 0.15s',
              }}>{c}</button>
            )
          })}
        </div>
      </div>

      {/* List */}
      <main style={{ padding: '16px 24px 48px', maxWidth: 720, margin: '0 auto' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#7a9ab5', padding: '60px 0', fontSize: 15 }}>
            Nenhuma palavra encontrada.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filtered.map((entry, i) => {
              const acc = catAccent(entry.category)
              const tc = typeColor(entry.type)
              return (
                <div key={i} style={{
                  background: '#1a2d40',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${acc}44`
                    e.currentTarget.style.boxShadow = `0 4px 14px ${acc}22`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
                      <span style={{ fontWeight: 800, fontSize: 16, color: '#f0f4f8' }}>{entry.word}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        background: `${tc}22`, border: `1px solid ${tc}55`,
                        borderRadius: 10, padding: '1px 8px',
                        color: tc, textTransform: 'capitalize',
                      }}>{entry.type}</span>
                    </div>
                    <div style={{ color: '#b0c8e0', fontSize: 13, fontWeight: 600, marginBottom: 4, lineHeight: 1.4 }}>
                      {entry.meaningPt}
                    </div>
                    <div style={{ color: '#4a6a85', fontSize: 11, fontWeight: 700, fontStyle: 'italic' }}>
                      🇬🇧 {entry.meaning}
                    </div>
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 700,
                    background: `${acc}18`, border: `1px solid ${acc}44`,
                    borderRadius: 10, padding: '2px 9px',
                    color: acc, whiteSpace: 'nowrap', flexShrink: 0,
                  }}>{entry.category}</div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

const backBtn: React.CSSProperties = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 10,
  color: '#f0f4f8',
  padding: '6px 14px',
  fontSize: 13,
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: "'Nunito', sans-serif",
}

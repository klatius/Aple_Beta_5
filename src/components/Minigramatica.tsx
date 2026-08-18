import { useState } from 'react'

type Section = 'classes' | 'alfabeto' | 'verbos' | 'numerais' | 'pluralsingular'

const sectionList: { id: Section; label: string; icon: string }[] = [
  { id: 'classes', label: '10 Classes Gramaticais', icon: '📝' },
  { id: 'alfabeto', label: 'Alfabeto', icon: '🔤' },
  { id: 'verbos', label: 'Tempos Verbais', icon: '⏱️' },
  { id: 'pluralsingular', label: 'Plural e Singular', icon: '🔢' },
  { id: 'numerais', label: 'Numerais', icon: '🔢' },
]

const accent = '#f9d923'

interface Props { onBack: () => void }

export default function Minigramatica({ onBack }: Props) {
  const [section, setSection] = useState<Section>('classes')

  return (
    <div style={{ minHeight: '100vh', background: '#0e1f2b', fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #f9d92322 0%, #ff980011 100%), #152536',
        borderBottom: '2px solid #f9d92333',
        padding: '28px 24px 0',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <button onClick={onBack} style={backBtn}>← Início</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '16px 0 16px' }}>
          <span style={{ fontSize: 36 }}>📗</span>
          <div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 900,
              margin: 0,
              color: '#f0f4f8',
              letterSpacing: '-0.02em',
            }}>Minigramática</h2>
            <p style={{ margin: '2px 0 0', color: '#7a9ab5', fontSize: 13, fontWeight: 600 }}>
              Gramática essencial do Português Brasileiro
            </p>
          </div>
        </div>
        {/* Tab nav */}
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 1 }}>
          {sectionList.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? accent : 'transparent',
              border: 'none',
              borderBottom: section === s.id ? `3px solid ${accent}` : '3px solid transparent',
              borderRadius: '8px 8px 0 0',
              padding: '8px 14px',
              fontSize: 12,
              fontWeight: 800,
              color: section === s.id ? '#0e1f2b' : '#7a9ab5',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              whiteSpace: 'nowrap',
              transition: 'all 0.15s',
            }}>{s.icon} {s.label}</button>
          ))}
        </div>
      </div>

      <main style={{ padding: '24px', maxWidth: 720, margin: '0 auto' }}>
        {section === 'classes' && <ClassesSection />}
        {section === 'alfabeto' && <AlfabetoSection />}
        {section === 'verbos' && <VerbosSection />}
        {section === 'pluralsingular' && <PluralSingularSection />}
        {section === 'numerais' && <NumeraisSection />}
      </main>
    </div>
  )
}

/* ─── 10 Classes Gramaticais ─── */
const classes = [
  { num: '1', name: 'Substantivo', en: 'Noun', color: '#2ec4b6', def: 'Nomeia seres, objetos, lugares, sentimentos e ideias.', ex: ['casa (house)', 'praia (beach)', 'saudade (longing)', 'Brasil'], tip: 'Masculino termina em -o; feminino em -a. Ex: o livro / a mesa.' },
  { num: '2', name: 'Artigo', en: 'Article', color: '#ff9800', def: 'Acompanha o substantivo, indicando gênero e número.', ex: ['o / a (the)', 'os / as (the, plural)', 'um / uma (a/an)', 'uns / umas'], tip: 'o menino / a menina · um carro / uma bicicleta' },
  { num: '3', name: 'Adjetivo', en: 'Adjective', color: '#f9d923', def: 'Caracteriza ou qualifica o substantivo.', ex: ['bonito/bonita (beautiful)', 'grande (big)', 'incrível (incredible)', 'caro (expensive)'], tip: 'Concorda com o substantivo em gênero e número: menino bonito / menina bonita.' },
  { num: '4', name: 'Pronome', en: 'Pronoun', color: '#9b59b6', def: 'Substitui ou acompanha o substantivo.', ex: ['eu (I)', 'você (you)', 'ele/ela (he/she)', 'nós (we)', 'eles/elas (they)'], tip: 'No Brasil, "você" é mais comum do que "tu" no cotidiano.' },
  { num: '5', name: 'Verbo', en: 'Verb', color: '#ff6b6b', def: 'Expressa ação, estado ou fenômeno. Núcleo do predicado.', ex: ['ser (to be)', 'ter (to have)', 'fazer (to do/make)', 'ir (to go)', 'falar (to speak)'], tip: 'Conjugações: -AR, -ER, -IR. Ex: fal-ar → eu falo, você fala, nós falamos.' },
  { num: '6', name: 'Advérbio', en: 'Adverb', color: '#3498db', def: 'Modifica verbo, adjetivo ou outro advérbio. Expressa circunstâncias.', ex: ['aqui (here)', 'amanhã (tomorrow)', 'muito (very/much)', 'bem (well)', 'não (no/not)'], tip: 'Não concorda com o substantivo. Ex: Ela fala muito bem.' },
  { num: '7', name: 'Preposição', en: 'Preposition', color: '#27ae60', def: 'Liga palavras, indicando relações de espaço, tempo, posse, modo.', ex: ['de (of/from)', 'em (in/at)', 'para (to/for)', 'com (with)', 'por (by/for)'], tip: '"De + o = do"; "Em + a = na"; "De + a = da". Ex: Sou do Brasil / Estou na praia.' },
  { num: '8', name: 'Conjunção', en: 'Conjunction', color: '#e91e8c', def: 'Une orações ou termos semelhantes na frase.', ex: ['e (and)', 'mas (but)', 'ou (or)', 'porque (because)', 'quando (when)'], tip: 'Ex: Gosto de samba e de forró. Quero ir, mas estou cansado.' },
  { num: '9', name: 'Interjeição', en: 'Interjection', color: '#e8c77b', def: 'Expressa sentimentos, emoções ou chama atenção. Não varia.', ex: ['Olá! (Hello!)', 'Caramba! (Wow!)', 'Oba! (Yay!)', 'Ai! (Ouch!)', 'Puxa! (Gosh!)'], tip: 'Sempre seguida de ponto de exclamação. Ex: Que saudade!' },
  { num: '10', name: 'Numeral', en: 'Numeral', color: '#8bc34a', def: 'Indica quantidade, ordem, multiplicação ou fração.', ex: ['um/uma (one)', 'dois/duas (two)', 'primeiro (first)', 'metade (half)'], tip: 'Cardinais: um, dois, três… Ordinais: primeiro, segundo, terceiro…' },
]

function ClassesSection() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ color: '#7a9ab5', fontSize: 14, marginBottom: 8, fontWeight: 600 }}>
        O português tem <strong style={{ color: '#f9d923' }}>10 classes de palavras</strong>. Clique para expandir cada uma.
      </p>
      {classes.map(c => (
        <div key={c.num} style={{
          background: '#1a2d40',
          border: `1px solid ${open === c.num ? c.color + '55' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s',
        }}>
          <button onClick={() => setOpen(open === c.num ? null : c.num)} style={{
            width: '100%', background: 'transparent', border: 'none',
            padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14,
            cursor: 'pointer', textAlign: 'left', fontFamily: "'Nunito', sans-serif",
          }}>
            <span style={{
              width: 32, height: 32, borderRadius: '50%',
              background: `${c.color}22`, border: `2px solid ${c.color}66`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 900, color: c.color, flexShrink: 0,
            }}>{c.num}</span>
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: '#f0f4f8' }}>{c.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#7a9ab5', fontWeight: 600 }}>{c.en}</span>
            </div>
            <span style={{ color: c.color, fontSize: 16, transition: 'transform 0.2s', transform: open === c.num ? 'rotate(180deg)' : 'none' }}>↓</span>
          </button>
          {open === c.num && (
            <div style={{ padding: '0 18px 18px 64px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: '#b0c8e0', fontSize: 14, marginTop: 12, fontWeight: 600 }}>{c.def}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                {c.ex.map((e, i) => (
                  <span key={i} style={{
                    background: `${c.color}18`, border: `1px solid ${c.color}44`,
                    borderRadius: 8, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: c.color,
                  }}>{e}</span>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 12, color: '#7a9ab5', fontWeight: 700, borderLeft: `3px solid ${c.color}55`, paddingLeft: 10 }}>
                💡 {c.tip}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Alfabeto ─── */
const alphabet = [
  { l: 'A', ex: 'amor', pron: '/a/' }, { l: 'B', ex: 'bola', pron: '/b/' }, { l: 'C', ex: 'casa', pron: '/k/ ou /s/' },
  { l: 'D', ex: 'dado', pron: '/d/' }, { l: 'E', ex: 'escola', pron: '/e/' }, { l: 'F', ex: 'festa', pron: '/f/' },
  { l: 'G', ex: 'gato', pron: '/g/ ou /ʒ/' }, { l: 'H', ex: 'hora', pron: '(mudo)' }, { l: 'I', ex: 'ilha', pron: '/i/' },
  { l: 'J', ex: 'janela', pron: '/ʒ/' }, { l: 'K', ex: 'kiwi', pron: '/k/' }, { l: 'L', ex: 'lua', pron: '/l/' },
  { l: 'M', ex: 'mar', pron: '/m/' }, { l: 'N', ex: 'nuvem', pron: '/n/' }, { l: 'O', ex: 'olha', pron: '/o/' },
  { l: 'P', ex: 'praia', pron: '/p/' }, { l: 'Q', ex: 'quero', pron: '/k/' }, { l: 'R', ex: 'rio', pron: '/ʀ/ ou /ɾ/' },
  { l: 'S', ex: 'samba', pron: '/s/ ou /z/' }, { l: 'T', ex: 'tudo', pron: '/t/' }, { l: 'U', ex: 'uva', pron: '/u/' },
  { l: 'V', ex: 'vida', pron: '/v/' }, { l: 'W', ex: 'web', pron: '/w/' }, { l: 'X', ex: 'xícara', pron: '/ʃ/ ou /ks/' },
  { l: 'Y', ex: 'yoga', pron: '/j/' }, { l: 'Z', ex: 'zero', pron: '/z/' },
]

const accentedChars = [
  { c: 'Ã / ã', ex: 'maçã, coração', pron: 'vogal nasal /ã/' },
  { c: 'Â / â', ex: 'âncora, câmara', pron: '/a/ fechado' },
  { c: 'À / à', ex: 'à (contração)', pron: '/a/ aberto' },
  { c: 'É / é', ex: 'café, pé', pron: '/ɛ/ aberto' },
  { c: 'Ê / ê', ex: 'você, mês', pron: '/e/ fechado' },
  { c: 'Í / í', ex: 'saída, país', pron: '/i/' },
  { c: 'Ó / ó', ex: 'avó, óculos', pron: '/ɔ/ aberto' },
  { c: 'Ô / ô', ex: 'avô, ônibus', pron: '/o/ fechado' },
  { c: 'Ú / ú', ex: 'último', pron: '/u/' },
  { c: 'Ç / ç', ex: 'caçar, praça', pron: '/s/' },
]

function AlfabetoSection() {
  return (
    <div>
      <p style={{ color: '#7a9ab5', fontSize: 14, marginBottom: 16, fontWeight: 600 }}>
        O alfabeto português tem <strong style={{ color: '#f9d923' }}>26 letras</strong>. As letras K, W e Y são usadas principalmente em palavras estrangeiras.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 8, marginBottom: 24 }}>
        {alphabet.map(a => (
          <button
            key={a.l}
            onClick={() => {
              // TODO: inserir áudio da letra aqui
              // ex: new Audio(`/audio/alfabeto/${a.l.toLowerCase()}.mp3`).play()
            }}
            title={`▶ Ouvir letra ${a.l}`}
            style={{
              background: '#1a2d40',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12,
              padding: '10px 8px 8px',
              textAlign: 'center',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'border-color 0.18s, box-shadow 0.18s, transform 0.15s',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f9d92388'
              e.currentTarget.style.boxShadow = '0 4px 14px #f9d92322'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = ''
              e.currentTarget.style.transform = ''
            }}
          >
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 900, color: '#f9d923' }}>{a.l}</div>
            <div style={{ fontSize: 11, color: '#2ec4b6', fontWeight: 700 }}>{a.ex}</div>
            <div style={{ fontSize: 10, color: '#7a9ab5', marginTop: 2 }}>{a.pron}</div>
            <div style={{ fontSize: 10, color: '#7a9ab5', marginTop: 5, opacity: 0.6 }}>🔊</div>
          </button>
        ))}
      </div>
      <h3 style={{ color: '#f0f4f8', fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Acentos e Caracteres Especiais</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {accentedChars.map(a => (
          <button
            key={a.c}
            onClick={() => {
              // TODO: inserir áudio do caractere aqui
              // ex: new Audio(`/audio/alfabeto/${a.c.replace(/[^a-záàâãéêíóôõúç]/gi,'').toLowerCase()}.mp3`).play()
            }}
            title={`▶ Ouvir ${a.c}`}
            style={{
              background: '#1a2d40',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              textAlign: 'left',
              transition: 'border-color 0.18s, box-shadow 0.18s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f9d92388'
              e.currentTarget.style.boxShadow = '0 4px 14px #f9d92322'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = ''
              e.currentTarget.style.transform = ''
            }}
          >
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 900, color: '#f9d923', minWidth: 60 }}>{a.c}</span>
            <span style={{ fontSize: 13, color: '#b0c8e0', fontWeight: 600, flex: 1 }}>{a.ex}</span>
            <span style={{ fontSize: 11, color: '#7a9ab5', fontWeight: 700 }}>{a.pron}</span>
            <span style={{ fontSize: 12, color: '#7a9ab5', opacity: 0.6 }}>🔊</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Tempos Verbais ─── */
const verbTenses = [
  { name: 'Presente do Indicativo', en: 'Simple Present', color: '#2ec4b6', desc: 'Ações habituais ou que acontecem agora.', rows: [['eu', 'falo', 'como', 'parto'], ['você/ele/ela', 'fala', 'come', 'parte'], ['nós', 'falamos', 'comemos', 'partimos'], ['vocês/eles', 'falam', 'comem', 'partem']], headers: ['', 'FALAR (-ar)', 'COMER (-er)', 'PARTIR (-ir)'] },
  { name: 'Pretérito Perfeito', en: 'Simple Past', color: '#ff6b6b', desc: 'Ação concluída no passado.', rows: [['eu', 'falei', 'comi', 'parti'], ['você/ele/ela', 'falou', 'comeu', 'partiu'], ['nós', 'falamos', 'comemos', 'partimos'], ['vocês/eles', 'falaram', 'comeram', 'partiram']], headers: ['', 'FALAR', 'COMER', 'PARTIR'] },
  { name: 'Futuro do Presente', en: 'Simple Future', color: '#9b59b6', desc: 'Ação que ocorrerá. Informal: usar "vai + infinitivo".', rows: [['eu', 'vou falar', 'vou comer', 'vou partir'], ['você/ele/ela', 'vai falar', 'vai comer', 'vai partir'], ['nós', 'vamos falar', 'vamos comer', 'vamos partir'], ['vocês/eles', 'vão falar', 'vão comer', 'vão partir']], headers: ['', 'FALAR', 'COMER', 'PARTIR'] },
  { name: 'Verbos Irregulares', en: 'Irregular Verbs', color: '#ff9800', desc: 'Verbos mais usados com conjugação irregular.', rows: [['eu', 'sou', 'estou', 'tenho', 'vou'], ['você/ele', 'é', 'está', 'tem', 'vai'], ['nós', 'somos', 'estamos', 'temos', 'vamos'], ['vocês/eles', 'são', 'estão', 'têm', 'vão']], headers: ['', 'SER', 'ESTAR', 'TER', 'IR'] },
]

function VerbosSection() {
  const [open, setOpen] = useState<string | null>(verbTenses[0].name)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ color: '#7a9ab5', fontSize: 14, marginBottom: 4, fontWeight: 600 }}>
        Os verbos portugueses conjugam-se em <strong style={{ color: '#f9d923' }}>pessoa, número e tempo</strong>.
      </p>
      {verbTenses.map(t => (
        <div key={t.name} style={{
          background: '#1a2d40', border: `1px solid ${open === t.name ? t.color + '55' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s',
        }}>
          <button onClick={() => setOpen(open === t.name ? null : t.name)} style={{
            width: '100%', background: 'transparent', border: 'none',
            padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14,
            cursor: 'pointer', textAlign: 'left', fontFamily: "'Nunito', sans-serif",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: '#f0f4f8' }}>{t.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#7a9ab5', fontWeight: 600 }}>{t.en}</span>
            </div>
            <span style={{ color: t.color, fontSize: 16, transform: open === t.name ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>↓</span>
          </button>
          {open === t.name && (
            <div style={{ padding: '0 18px 18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: 13, color: '#7a9ab5', fontWeight: 600, margin: '12px 0 10px' }}>{t.desc}</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr>
                      {t.headers.map((h, i) => (
                        <th key={i} style={{ padding: '6px 10px', textAlign: 'left', fontWeight: 800, color: i === 0 ? '#7a9ab5' : t.color, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: `1px solid ${t.color}33` }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: '7px 10px', fontWeight: j === 0 ? 700 : 600, color: j === 0 ? '#7a9ab5' : '#f0f4f8' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Plural e Singular ─── */
const pluralRules = [
  { rule: 'Geral: + S', ex: [['livro', 'livros'], ['casa', 'casas'], ['carro', 'carros']], color: '#2ec4b6' },
  { rule: 'Terminam em -ão → -ões / -ãos / -ães', ex: [['nação', 'nações'], ['mão', 'mãos'], ['pão', 'pães']], color: '#ff9800' },
  { rule: 'Terminam em -al / -el / -ol / -ul → -ais / -éis…', ex: [['animal', 'animais'], ['papel', 'papéis'], ['farol', 'faróis']], color: '#9b59b6' },
  { rule: 'Terminam em -m → -ns', ex: [['homem', 'homens'], ['viagem', 'viagens'], ['irmã', 'irmãs']], color: '#f9d923' },
  { rule: 'Terminam em -s (oxítonas) → -ses', ex: [['ês', 'eses'], ['mês', 'meses'], ['país', 'países']], color: '#ff6b6b' },
  { rule: 'Terminam em -r, -z → + ES', ex: [['mar', 'mares'], ['cruz', 'cruzes'], ['rapaz', 'rapazes']], color: '#8bc34a' },
]

function PluralSingularSection() {
  return (
    <div>
      <p style={{ color: '#7a9ab5', fontSize: 14, marginBottom: 16, fontWeight: 600 }}>
        A forma mais comum do plural é adicionar <strong style={{ color: '#f9d923' }}>-S</strong>. Veja as regras especiais:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {pluralRules.map((r, i) => (
          <div key={i} style={{ background: '#1a2d40', border: `1px solid ${r.color}33`, borderRadius: 14, padding: '14px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: r.color, marginBottom: 10 }}>{r.rule}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {r.ex.map(([s, p], j) => (
                <div key={j} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10, padding: '6px 12px', fontSize: 13, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: '#f0f4f8' }}>{s}</span>
                  <span style={{ color: '#7a9ab5' }}>→</span>
                  <span style={{ color: r.color }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, background: '#1a2d40', border: '1px solid #f9d92333', borderRadius: 14, padding: '14px 18px' }}>
        <div style={{ fontWeight: 800, color: '#f9d923', marginBottom: 8 }}>Gênero: Masculino e Feminino</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[['o menino', 'a menina'], ['o professor', 'a professora'], ['o médico', 'a médica'], ['o leão', 'a leoa']].map(([m, f], i) => (
            <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, fontWeight: 700 }}>
              <span style={{ color: '#3498db' }}>{m}</span>
              <span style={{ color: '#7a9ab5' }}>↔</span>
              <span style={{ color: '#e91e8c' }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Numerais ─── */
const cardinals = [
  ['0', 'zero'], ['1', 'um / uma'], ['2', 'dois / duas'], ['3', 'três'], ['4', 'quatro'],
  ['5', 'cinco'], ['6', 'seis'], ['7', 'sete'], ['8', 'oito'], ['9', 'nove'], ['10', 'dez'],
  ['11', 'onze'], ['12', 'doze'], ['13', 'treze'], ['14', 'quatorze'], ['15', 'quinze'],
  ['16', 'dezesseis'], ['17', 'dezessete'], ['18', 'dezoito'], ['19', 'dezenove'], ['20', 'vinte'],
  ['30', 'trinta'], ['40', 'quarenta'], ['50', 'cinquenta'], ['60', 'sessenta'], ['70', 'setenta'],
  ['80', 'oitenta'], ['90', 'noventa'], ['100', 'cem / cento'], ['1000', 'mil'],
]

const ordinals = [
  ['1º/1ª', 'primeiro/primeira'], ['2º/2ª', 'segundo/segunda'], ['3º/3ª', 'terceiro/terceira'],
  ['4º/4ª', 'quarto/quarta'], ['5º/5ª', 'quinto/quinta'], ['6º/6ª', 'sexto/sexta'],
  ['7º/7ª', 'sétimo/sétima'], ['8º/8ª', 'oitavo/oitava'], ['9º/9ª', 'nono/nona'], ['10º/10ª', 'décimo/décima'],
]

function NumeraisSection() {
  return (
    <div>
      <h3 style={{ color: '#8bc34a', fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Cardinais (Cardinal Numbers)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8, marginBottom: 24 }}>
        {cardinals.map(([n, w]) => (
          <button
            key={n}
            onClick={() => {
              // TODO: inserir áudio do cardinal aqui
              // ex: new Audio(`/audio/numerais/cardinal-${n}.mp3`).play()
            }}
            title={`▶ Ouvir ${w}`}
            style={{
              background: '#1a2d40',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10,
              padding: '10px 12px 8px',
              textAlign: 'center',
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'border-color 0.18s, box-shadow 0.18s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#8bc34a88'
              e.currentTarget.style.boxShadow = '0 4px 14px #8bc34a22'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = ''
              e.currentTarget.style.transform = ''
            }}
          >
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 900, color: '#8bc34a' }}>{n}</div>
            <div style={{ fontSize: 11, color: '#b0c8e0', fontWeight: 700, marginTop: 3 }}>{w}</div>
            <div style={{ fontSize: 10, color: '#7a9ab5', marginTop: 5, opacity: 0.6 }}>🔊</div>
          </button>
        ))}
      </div>
      <h3 style={{ color: '#e8c77b', fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Ordinais (Ordinal Numbers)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {ordinals.map(([n, w]) => (
          <button
            key={n}
            onClick={() => {
              // TODO: inserir áudio do ordinal aqui
              // ex: new Audio(`/audio/numerais/ordinal-${n.replace(/[º/ª]/g,'')}.mp3`).play()
            }}
            title={`▶ Ouvir ${w}`}
            style={{
              background: '#1a2d40',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              textAlign: 'left',
              transition: 'border-color 0.18s, box-shadow 0.18s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#e8c77b88'
              e.currentTarget.style.boxShadow = '0 4px 14px #e8c77b22'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = ''
              e.currentTarget.style.transform = ''
            }}
          >
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 900, color: '#e8c77b', minWidth: 50 }}>{n}</span>
            <span style={{ fontSize: 13, color: '#b0c8e0', fontWeight: 700, flex: 1 }}>{w}</span>
            <span style={{ fontSize: 12, color: '#7a9ab5', opacity: 0.6 }}>🔊</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16, background: '#1a2d40', border: '1px solid #f9d92333', borderRadius: 14, padding: '14px 18px' }}>
        <div style={{ fontWeight: 800, color: '#f9d923', marginBottom: 8, fontSize: 14 }}>💡 Dicas importantes</div>
        <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#7a9ab5', fontSize: 13, fontWeight: 600, lineHeight: 1.8 }}>
          <li>"Cem" = 100 exato · "Cento e um" = 101</li>
          <li>Dois/duas concordam com gênero: dois livros / duas casas</li>
          <li>Mil é invariável: mil homens / mil mulheres</li>
          <li>Ordinais concordam em gênero: primeiro / primeira</li>
        </ul>
      </div>
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

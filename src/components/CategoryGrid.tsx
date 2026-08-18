import type { Category } from '../data/categories'

interface Props {
  categories: Category[]
  onSelect: (cat: Category) => void
  onDicionario: () => void
  onGramatica: () => void
}

export default function CategoryGrid({
  categories,
  onSelect,
  onDicionario,
  onGramatica,
}: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F8F5EC',
        color: '#173042',
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: '36px 28px 20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(23,48,66,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 6,
          }}
        >
          {/* Bandeira do Brasil */}
          <img
            src="/BR.png"
            alt="Brasil"
            style={{
              width: 34,
              height: 24,
              objectFit: 'cover',
              borderRadius: 6,
            }}
          />

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(26px, 5vw, 44px)',
              fontWeight: 900,
              margin: 0,
              color: '#173042',
              letterSpacing: '-0.03em',
            }}
          >
            Alfa
            <span style={{ color: '#e0b900' }}>ling</span>{' '}
            <span style={{ color: '#239f94' }}>Brasil</span>
          </h1>

          <span style={{ fontSize: 28 }}>🌴</span>
        </div>

        <p
          style={{
            color: '#607887',
            fontSize: 13,
            margin: '0 0 20px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight: 1.6,
          }}
        >
          <span style={{ display: 'block' }}>
            Português para Estrangeiros
          </span>

          <span style={{ display: 'block' }}>
            Learn Brazilian Portuguese
          </span>
        </p>

        {/* Action bar-buttons */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <BarButton
            icon="📖"
            label="Minidicionário"
            sublabel="Todas as palavras"
            color="#239f94"
            onClick={onDicionario}
          />

          <BarButton
            icon="📗"
            label="Minigramática"
            sublabel="10 classes · Verbos · Números"
            color="#d8ae00"
            onClick={onGramatica}
          />
        </div>
      </header>

      {/* Category grid */}
      <main
        style={{
          padding: '28px 20px 48px',
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        <p
          style={{
            color: '#607887',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Categorias Temáticas
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(155px, 1fr))',
            gap: 14,
          }}
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={() => onSelect(cat)}
            />
          ))}
        </div>

        <footer
          style={{
            textAlign: 'center',
            marginTop: 44,
            color: '#607887',
            fontSize: 12,
          }}
        >
          Selecione uma categoria para aprender frases · Click a category to
          learn phrases
        </footer>
      </main>
    </div>
  )
}

function BarButton({
  icon,
  label,
  sublabel,
  color,
  onClick,
}: {
  icon: string
  label: string
  sublabel: string
  color: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#ffffff',
        border: `1.5px solid ${color}55`,
        borderRadius: 14,
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        fontFamily: "'Nunito', sans-serif",
        transition:
          'background 0.18s, border-color 0.18s, transform 0.15s, box-shadow 0.18s',
        minWidth: 200,
        textAlign: 'left',
        boxShadow: '0 4px 14px rgba(23,48,66,0.07)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffffff'
        e.currentTarget.style.borderColor = `${color}99`
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow =
          '0 8px 20px rgba(23,48,66,0.11)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#ffffff'
        e.currentTarget.style.borderColor = `${color}55`
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow =
          '0 4px 14px rgba(23,48,66,0.07)'
      }}
    >
      <span
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: `${color}18`,
          border: `1px solid ${color}55`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>

      <div>
        <div
          style={{
            fontWeight: 800,
            fontSize: 14,
            color,
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: 11,
            color: '#607887',
            fontWeight: 600,
            marginTop: 1,
          }}
        >
          {sublabel}
        </div>
      </div>

      <span
        style={{
          color: `${color}99`,
          fontSize: 16,
          marginLeft: 'auto',
        }}
      >
        ›
      </span>
    </button>
  )
}

function CategoryCard({
  category,
  onClick,
}: {
  category: Category
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#ffffff',
        border: '1px solid rgba(23,48,66,0.08)',
        borderRadius: 20,
        padding: '22px 14px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 11,
        transition:
          'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 5px 18px rgba(23,48,66,0.08)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px) scale(1.02)'
        el.style.boxShadow = `0 16px 40px ${category.accent}33`
        el.style.borderColor = `${category.accent}66`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = ''
        el.style.boxShadow = '0 5px 18px rgba(23,48,66,0.08)'
        el.style.borderColor = 'rgba(23,48,66,0.08)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: category.bg,
          opacity: 0.45,
          borderRadius: 20,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: '50%',
          background: `${category.accent}18`,
          border: `2px solid ${category.accent}55`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 34,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {category.icon}
      </div>

      <div
        style={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: 14,
            color: '#173042',
            lineHeight: 1.2,
            marginBottom: 3,
          }}
        >
          {category.name}
        </div>

        <div
          style={{
            fontSize: 10,
            color: category.accent,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
          }}
        >
          {category.nameEn}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          background: `${category.accent}18`,
          border: `1px solid ${category.accent}44`,
          borderRadius: 20,
          padding: '2px 10px',
          fontSize: 10,
          fontWeight: 700,
          color: category.accent,
        }}
      >
        {category.phrases.length} frases
      </div>
    </button>
  )
}
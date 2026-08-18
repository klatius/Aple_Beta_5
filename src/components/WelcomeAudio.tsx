import { useEffect, useState } from 'react'

// Uma única instância de áudio para todo o aplicativo
let backgroundAudio: HTMLAudioElement | null = null

export default function WelcomeAudio() {
  const [silenciado, setSilenciado] = useState(false)

  useEffect(() => {
    const preferencia = localStorage.getItem('alfaling-mute')

    if (preferencia === 'true') {
      setSilenciado(true)
    }

    // Cria o áudio somente uma vez
    if (!backgroundAudio) {
      backgroundAudio = new Audio('/Aple_Pavlovi.mp3')
      backgroundAudio.loop = true
      backgroundAudio.volume = 0.12
      backgroundAudio.preload = 'auto'
    }

    const audio = backgroundAudio

    if (preferencia === 'true') {
      audio.muted = true
    }

    const iniciarMusica = async () => {
      if (audio.muted) {
        return
      }

      if (!audio.paused) {
        return
      }

      try {
        await audio.play()

        console.log('🎵 Música de fundo iniciada - volume 12%')

        document.removeEventListener(
          'pointerdown',
          iniciarMusica,
          true
        )

        document.removeEventListener(
          'click',
          iniciarMusica,
          true
        )
      } catch (erro) {
        console.log(
          'Aguardando interação do usuário para iniciar a música:',
          erro
        )
      }
    }

    // Tenta iniciar automaticamente
    iniciarMusica()

    // Se o navegador bloquear o autoplay,
    // inicia na primeira interação do usuário.
    document.addEventListener(
      'pointerdown',
      iniciarMusica,
      true
    )

    document.addEventListener(
      'click',
      iniciarMusica,
      true
    )

    return () => {
      document.removeEventListener(
        'pointerdown',
        iniciarMusica,
        true
      )

      document.removeEventListener(
        'click',
        iniciarMusica,
        true
      )
    }
  }, [])

  const alternarSom = async () => {
    if (!backgroundAudio) {
      return
    }

    const audio = backgroundAudio

    if (audio.muted) {
      audio.muted = false
      setSilenciado(false)

      localStorage.setItem(
        'alfaling-mute',
        'false'
      )

      try {
        await audio.play()
      } catch (erro) {
        console.log(
          'O navegador aguarda uma interação para iniciar a música:',
          erro
        )
      }
    } else {
      audio.muted = true
      setSilenciado(true)

      localStorage.setItem(
        'alfaling-mute',
        'true'
      )
    }
  }

  return (
    <button
      onClick={alternarSom}
      aria-label={
        silenciado
          ? 'Ativar música de fundo'
          : 'Desativar música de fundo'
      }
      title={
        silenciado
          ? 'Ativar música'
          : 'Desativar música'
      }
      style={{
        position: 'fixed',
        top: 18,
        right: 18,
        zIndex: 9999,
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: '1px solid rgba(35,159,148,0.35)',
        background: '#ffffff',
        color: '#239f94',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: 20,
        boxShadow:
          '0 4px 14px rgba(23,48,66,0.12)',
        transition:
          'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          'scale(1.08)'

        e.currentTarget.style.boxShadow =
          '0 6px 18px rgba(23,48,66,0.18)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          'scale(1)'

        e.currentTarget.style.boxShadow =
          '0 4px 14px rgba(23,48,66,0.12)'
      }}
    >
      {silenciado ? '🔇' : '🔊'}
    </button>
  )
}
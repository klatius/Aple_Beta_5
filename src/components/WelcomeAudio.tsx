import { useEffect } from 'react'

// Uma única instância de áudio para todo o aplicativo
let backgroundAudio: HTMLAudioElement | null = null

export default function WelcomeAudio() {
  useEffect(() => {
    // Cria o áudio somente uma vez
    if (!backgroundAudio) {
      backgroundAudio = new Audio('/Aple_Pavlovi.mp3')
      backgroundAudio.loop = true
      backgroundAudio.volume = 0.12
      backgroundAudio.preload = 'auto'
    }

    const audio = backgroundAudio

    let iniciado = false

    const iniciarMusica = async () => {
      if (audio.paused === false) {
        iniciado = true
        return
      }

      try {
        await audio.play()

        iniciado = true

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
      // IMPORTANTE:
      // NÃO pausamos o áudio aqui.
      // A música deve continuar quando a tela mudar.

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

  return null
}
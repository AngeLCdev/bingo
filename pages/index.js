import Head from 'next/head'

import Partida from 'components/Partida'

import shuffle from "utils/shuffle"

export default function Home() {

  const bolasJugando = shuffle()

  if (process.browser) {
    window.onbeforeunload = () => {
      return "¿Seguro que quieres reiniciar la partida?"
    }
  }

  return (
    <>
      <Head>
        <title>Mae Mía</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Partida bolasJugando={bolasJugando} />

    </>
  )
}
